import Joi from "joi";
const registerValidator = (body: any) => {
    const schema = Joi.object({
        fullName: Joi.string().required(),
        birthday: Joi.date().required(),
        country: Joi.string().required(),
        region: Joi.string().required(),
        location: Joi.string().required(),
        phone: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });
    return schema.validate(body);
}
const loginValidator = (body: any) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    })
    return schema.validate(body)
}
export default {registerValidator, loginValidator}