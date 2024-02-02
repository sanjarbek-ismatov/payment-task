import Joi from "joi";
import { NotificationSchema } from "../../types/models";
const notificationBodyValidator = (body: NotificationSchema) => {
  const validator = Joi.object({
    type: Joi.string().valid("warning", "news", "transfer").required(),
    body: Joi.string().required(),
    key: Joi.string().required(),
    to: Joi.string().required(),
  });
  return validator.validate(body);
};
export { notificationBodyValidator };
