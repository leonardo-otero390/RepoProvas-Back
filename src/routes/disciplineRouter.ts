import { Router } from 'express';
import * as categoryController from '../controllers/testController.js';
import * as disciplineController from '../controllers/disciplineController.js';
import validateSchema from '../middlewares/validateSchema.js';
import { search } from '../schemas/querySchemas.js';

const disciplineRouter = Router();

disciplineRouter.get(
  '/',
  validateSchema(search, 'query'),
  disciplineController.findMany
);

disciplineRouter.get(
  '/:disciplineId/tests',
  categoryController.findManyByDisciplineId
);

export default disciplineRouter;
