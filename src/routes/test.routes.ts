import { Router } from 'express';
import * as testController from '../controllers/testController.js';
import validateToken from '../middlewares/validateToken.js';

const routes = Router();

routes.use(validateToken);

routes.get('/disciplines', testController.find);

export default routes;
