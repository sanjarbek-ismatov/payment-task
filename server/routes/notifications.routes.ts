import express from "express";
import { Notification } from "../models/notification.model";
import { notificationBodyValidator } from "../helpers/validators/notifications";
import { User } from "../models/user.model";

const router = express.Router();
router.post("/add", async (req, res) => {
  const { error } = notificationBodyValidator(req.body);
  if (error)
    return res
      .status(401)
      .send({ code: 400, message: error.details[0].message });
  const { type, body, to } = req.body;
  const foundUser = await User.findById(to);
  if (!foundUser) {
    // Should be worked for here
  }
  const newNotification = new Notification({ type, body, to });
  await newNotification.save();
  res.status(201).send({ code: 201, message: "Created!" });
});
export default router;
