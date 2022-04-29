import { Router } from 'express';
import authRouter from './authRouter.js';
import validateToken from '../middlewares/validateToken.js';
import termRouter from './termRouter.js';
import disciplineRouter from './disciplineRouter.js';
import teacherRouter from './teacherRouter.js';

const routes = Router();

routes.get('/health', async (req, res) => {
  res.sendStatus(200);
});
routes.use(authRouter);

routes.use(validateToken);

routes.use('/terms', termRouter);

routes.use('/disciplines', disciplineRouter);

routes.use('/teachers', teacherRouter);

export default routes;
