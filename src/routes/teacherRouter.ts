import { Router } from 'express';
import * as teacherController from '../controllers/teacherController.js';
import * as testController from '../controllers/testController.js';
import validateSchema from '../middlewares/validateSchema.js';
import { search } from '../schemas/querySchemas.js';

const teacherRouter = Router();

teacherRouter.get(
  '/',
  validateSchema(search, 'query'),
  teacherController.findMany
);

teacherRouter.get('/:teacherId/tests', testController.findManyByTeacherId);

export default teacherRouter;
