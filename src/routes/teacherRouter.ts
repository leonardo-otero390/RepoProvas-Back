import { Router } from 'express';
import * as teacherController from '../controllers/teacherController.js';

const teacherRouter = Router();

teacherRouter.get('/', teacherController.findMany);

export default teacherRouter;
