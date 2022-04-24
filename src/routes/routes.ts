import { Router } from 'express';
import authRouter from './auth.routes.js';
import * as factoryRepository from '../repositories/factoryRepository.js';

const routes = Router();

routes.get('/health', async (req, res) => {
  res.sendStatus(200);
});
routes.use(authRouter);
routes.post('/populate/tests', async (req, res) => {
  await factoryRepository.populateTests();
  res.sendStatus(201);
});
routes.delete('/database', async (req, res) => {
  await factoryRepository.dropTables();
  res.sendStatus(200);
});

export default routes;
