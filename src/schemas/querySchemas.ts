import Joi from 'joi';

export const search = Joi.object({
  name: Joi.string().min(3),
});
