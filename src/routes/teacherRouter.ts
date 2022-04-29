import { Router } from 'express';
import * as teacherController from '../controllers/teacherController.js';
import * as testController from '../controllers/testController.js';

const teacherRouter = Router();

teacherRouter.get('/', teacherController.findMany);

teacherRouter.get('/:teacherId/tests', testController.findManyByTeacherId);

export default teacherRouter;
