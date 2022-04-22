import Joi from 'joi';

export const signUp = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().equal(Joi.ref('password')).required(),
});

export const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
