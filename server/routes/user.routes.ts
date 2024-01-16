import express, { Response } from "express";
import { upload } from "../models/gridfs.model";
import userValidator from "../helpers/validators/user";
import { User } from "../models/user.model";
import { passwordChecker, passwordGenerator } from "../helpers/passwordManager";
import { tokenGenerator } from "../helpers/tokenGenerator";
import authMiddleware from "../middlewares/auth.middleware";
import { ExpressRequest } from "../types/express";
import { CreditCard } from "../models/card.model";
const router = express.Router();
router.post("/signup", upload.single("image"), async (req, res) => {
  console.log(req.body);
  const { error } = userValidator.registerValidator(req.body);
  if (error)
    return res
      .status(400)
      .send({ code: 400, message: error.details[0].message });
  const checkEmail = await User.findOne({ email: req.body.email });
  console.log(checkEmail);
  if (checkEmail)
    return res
      .status(403)
      .send({ code: 403, message: "The email is already available" });
  const newUser = new User(req.body);
  console.log(newUser);
  if (req.file) {
    newUser.image = req.file.filename;
  }
  newUser.password = await passwordGenerator(req.body.password);
  console.log(newUser);
  await newUser.save();
  res.status(201).send({ code: 201, message: "User has been created" });
});
router.post("/signing", upload.none(), async (req, res) => {
  const { error } = userValidator.loginValidator(req.body);
  const { email, password } = req.body;
  if (error)
    return res
      .status(400)
      .send({ code: 400, message: error.details[0].message });
  const user = await User.findOne({ email });
  if (!user)
    return res.status(404).send({ code: 404, message: "User is not found" });
  const arePasswordsTheSame = await passwordChecker(password, user.password);
  if (!arePasswordsTheSame)
    return res
      .status(400)
      .send({ code: 400, message: "The password is wrong" });
  const token = tokenGenerator(email, "email");
  res
    .setHeader("x-token", token)
    .status(200)
    .send({ code: 200, message: "Login complete" });
});
router.get("/me", authMiddleware, async (req: ExpressRequest, res) => {
  const user = req.user;
  res
    .status(200)
    .send({ code: 200, result: await user?.populate("cards payments") });
});
router.post("/", async (req, res) => {
  if (req.body.type === "card") {
    const card = await CreditCard.findOne({
      cardNumber: req.body.card,
    }).select("cardNumber cardHolderName cardHolderId");
    if (!card)
      return res.status(404).send({ code: 404, message: "Card is not found" });
    return res.status(200).send({ code: 200, result: card });
  }
  delete req.body.type;
  const user = await User.findOne(req.body)
    .select("-password -payments")
    .populate({ path: "cards", select: "-cvv -expirationDate" });
  if (!user)
    return res.status(404).send({ code: 404, message: "User is not found" });
  return res.status(200).send({ code: 200, result: user });
});
router.put(
  "/update",
  [upload.single("image"), authMiddleware],
  async (req: ExpressRequest, res: Response) => {
    const user = req.user;
    if (!user) return;
    if (req.file) {
      user.image = req.file.filename;
    }
    if (req.body.password) {
      user.password = await passwordGenerator(req.body.password);
    }
    delete req.body.password;
    Object.assign(user, req.body);
    await user.save();
    res.status(200).send({ code: 200, message: "DONE" });
  }
);
export default router;
