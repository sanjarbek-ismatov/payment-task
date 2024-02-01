import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
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
  wasRead: {
    type: Boolean,
    default: false,
  },
  to: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
  },
});
export const Notification = mongoose.model("notification", notificationSchema);
