import Joi from 'joi';

export const signUp = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
