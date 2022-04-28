import { Router } from 'express';
import * as termController from '../controllers/termController.js';

const routes = Router();

routes.get('/', termController.findMany);

export default routes;
