import Joi from "joi";
import { NotificationSchema } from "../../types/models";
const notificationBodyValidator = (body: NotificationSchema) => {
  const validator = Joi.object({
    type: Joi.string().valid("warning", "news", "transfer").required(),
    body: Joi.string().required(),
    key: Joi.string().required(),
    to: Joi.string(),
  });
  return validator.validate(body);
};
type NotificationRequest = {
  _id: string;
  type: "delete" | "read";
  userId: string;
};

const notificationUpdateValidator = (body: NotificationRequest) => {
  const validator = Joi.object({
    _id: Joi.string().required(),
    type: Joi.string().valid("delete", "read").required(),
    userId: Joi.string(),
  });
  return validator.validate(body);
};
export { notificationBodyValidator, notificationUpdateValidator };
