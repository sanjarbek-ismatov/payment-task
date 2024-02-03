import express from "express";
import { Notification } from "../models/notification.model";
import {
  notificationBodyValidator,
  notificationUpdateValidator,
} from "../helpers/validators/notifications";
import { User } from "../models/user.model";

const router = express.Router();
router.post("/add", async (req, res) => {
  const { error } = notificationBodyValidator(req.body);
  if (error)
    return res
      .status(401)
      .send({ code: 400, message: error.details[0].message });
  const { type, body, to } = req.body;
  const newNotification = new Notification({ type, body, to });
  if (to) {
    const foundUser = await User.findById(to);
    if (!foundUser)
      return res
        .status(404)
        .send({ code: 404, message: "The User doesn't exist" });
    foundUser.notifications.push(newNotification._id);
    await foundUser.save();
  } else {
    newNotification.forEveryone = true;
  }
  await newNotification.save();
  res.status(201).send({ code: 201, message: "Created!" });
});
router.put("/update", async (req, res) => {
  const { error } = notificationUpdateValidator(req.body);
  if (error)
    return res
      .status(400)
      .send({ code: 400, message: error.details[0].message });
  const notification = await Notification.findById(req.body._id);
  const user = await User.findById(req.body.userId);
  if (!user)
    return res.status(404).send({ code: 404, message: "User is not found" });
  switch (req.body.type) {
    case "delete": {
      try {
        const deletedNotification = await Notification.findByIdAndDelete(
          req.body._id
        );
        if (deletedNotification?.to === user._id) {
          const neededIndexToRemove = user.notifications.findIndex(
            (notif) => notif.toString() === notification?._id.toString()
          );
          neededIndexToRemove !== -1 &&
            user.notifications.splice(neededIndexToRemove, 1);
          await user.save();
        }
        return res.status(204).send({
          code: 204,
          message: "Notification was successfully deleted!",
        });
      } catch (ex: any) {
        return res
          .status(500)
          .send({ code: 500, message: new Error(ex).message });
      }
    }
    case "read": {
      notification?.whoRead.push(user?._id);
      return res.status(200).send({ code: 200, message: "Updated" });
    }
  }
});
router.get("/get", async (req, res) => {
  const notifications = await Notification.find({ forEveryone: true });
  res.status(200).send({ code: 200, result: notifications });
});
export default router;
