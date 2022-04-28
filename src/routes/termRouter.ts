import { Router } from 'express';
import * as termController from '../controllers/termController.js';

const termRouter = Router();

termRouter.get('/', termController.findMany);

export default termRouter;
