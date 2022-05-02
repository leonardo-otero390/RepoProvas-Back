import { Router } from 'express';
import * as categoryController from '../controllers/categoryController.js';

const categoryRouter = Router();

categoryRouter.get('/', categoryController.findMany);

export default categoryRouter;
