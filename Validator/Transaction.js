import Joi from "joi";

export const validator = Joi.object({
     catEstimationId: Joi.string().required(),
     amount_used: Joi.string().min(1).max(10).required(),
     userId: Joi.string().required()
})