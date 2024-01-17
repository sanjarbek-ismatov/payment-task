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
});
