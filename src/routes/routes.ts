import { Router } from 'express';
import authRouter from './auth.routes.js';

const routes = Router();

routes.get('/health', async (req, res) => {
  res.sendStatus(200);
});
routes.use(authRouter);

export default routes;
