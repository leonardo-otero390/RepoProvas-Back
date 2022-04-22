import { Router } from 'express';
import * as userController from '../controllers/userController.js';
import validateSchema from '../middlewares/validateSchema.js';
import * as userSchemas from '../schemas/userSchemas.js';

const routes = Router();

routes.post(
  '/sign-up',
  validateSchema(userSchemas.signUp, 'body'),
  userController.signUp
);

routes.post(
  '/login',
  validateSchema(userSchemas.login, 'body'),
  userController.login
);

export default routes;
