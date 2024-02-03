import mongoose from "mongoose";
import { NotificationSchema } from "../types/models";

const notificationSchema = new mongoose.Schema<NotificationSchema>({
  date: {
    type: Date,
    default: function () {
      return new Date();
    },
  },
  type: {
    type: String,
    enum: ["transfer", "news", "warning"],
    required: true,
  },
  body: String,
  whoRead: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "user",
  },
  to: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
  },
  forEveryone: {
    type: Boolean,
    default: false,
  },
});
export const Notification = mongoose.model<NotificationSchema>(
  "notification",
  notificationSchema
);
