import Joi from "joi";

export const validator = Joi.object({
    cat_name: Joi.string().min(4).required(),
    amount: Joi.number().required(),
    type: Joi.string().valid("income", "expense", "saving").required(),
    userId: Joi.string().required()
})