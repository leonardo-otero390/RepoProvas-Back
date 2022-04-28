import { Router } from 'express';
import authRouter from './auth.routes.js';
import validateToken from '../middlewares/validateToken.js';
import termRouter from './term.routes.js';

const routes = Router();

routes.get('/health', async (req, res) => {
  res.sendStatus(200);
});
routes.use(authRouter);

routes.use(validateToken);

routes.use('/terms', termRouter);

export default routes;
