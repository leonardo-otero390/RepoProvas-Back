import { Router } from 'express';
import authRouter from './auth.routes.js';
import testRouter from './test.routes.js';
import * as teacherController from '../controllers/teacherController.js';
import validateToken from '../middlewares/validateToken.js';

const routes = Router();

routes.get('/health', async (req, res) => {
  res.sendStatus(200);
});
routes.use(authRouter);

routes.use(validateToken);

routes.get(
  '/teachers/categories/tests',
  teacherController.findWithCategoriesAndTests
);

routes.use('/tests', testRouter);

export default routes;
