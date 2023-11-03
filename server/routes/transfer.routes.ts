import express from "express";
import authMiddleware from "../middlewares/auth.middleware";
import { ExpressRequest } from "../types/express";
import transferValidator from "../helpers/validators/transfer";
import { Transfer } from "../models/transfer.model";
import { TransferResponse } from "../types/models";
const router = express.Router();
router.post("/new", authMiddleware, async (req: ExpressRequest, res) => {
  const { error } = transferValidator.transfer(req.body);
  if (error)
    return res
      .status(400)
      .send({ code: 400, message: error.details[0].message });
  const newTransfer = new Transfer(req.body);
  if (req.user) newTransfer.senderId = req.user._id;
  await newTransfer.save();
  res.status(201).send({ code: 201, message: "Amount has been transferred" });
});
router.get("/get/:id", authMiddleware, async (req: ExpressRequest, res) => {
  const {
    params: { id },
    user,
  } = req;
  if (!user) return;
  const _id = user._id.toString();
  if (id === "all") {
    const allTransfers: TransferResponse[] = await Transfer.find().populate(
      "senderCard senderId receiverCard receiverId"
    );
    const result = allTransfers.filter(
      (transfer) =>
        transfer.senderId._id.toString() === _id ||
        transfer.receiverId._id.toString() === _id
    );

    return res.status(200).send({ code: 200, result });
  }
  const transfer = await Transfer.findOne({ _id: id }).populate(
    "senderCard senderId receiverCard receiverId"
  );
  if (!transfer)
    return res
      .status(404)
      .send({ code: 404, message: "Transfer is not found" });
  res.status(200).send({ code: 200, result: transfer });
});
export default router;
