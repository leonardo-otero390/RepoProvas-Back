import { Router } from 'express';
import * as testController from '../controllers/testController.js';

const routes = Router();

routes.get('/disciplines', testController.find);

export default routes;
