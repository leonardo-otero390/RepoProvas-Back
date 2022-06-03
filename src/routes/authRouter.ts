import { Router } from 'express';
import * as userController from '../controllers/userController.js';
import validateSchema from '../middlewares/validateSchema.js';
import * as userSchemas from '../schemas/userSchemas.js';

const authRouter = Router();

authRouter.post(
  '/signup',
  validateSchema(userSchemas.signUp, 'body'),
  userController.signUp
);

authRouter.post(
  '/login',
  validateSchema(userSchemas.login, 'body'),
  userController.login
);

export default authRouter;
