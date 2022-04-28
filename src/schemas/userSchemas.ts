import Joi from 'joi';

export const signUp = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
