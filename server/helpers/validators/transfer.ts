import Joi from "joi";
const transfer = (body: any) => {
    const transferJoiSchema = Joi.object({
        senderCard: Joi.string().required(),
        receiverCard: Joi.string().required(),
        receiverId: Joi.string().required(),
        amount: Joi.number().required().min(0),
        description: Joi.string(),
    });
    return transferJoiSchema.validate(body)
}
export default {transfer}