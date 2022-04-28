import { Router } from 'express';
import * as categoryController from '../controllers/testController.js';

const disciplineRouter = Router();

disciplineRouter.get(
  '/:disciplineId/tests',
  categoryController.findManyByDisciplineId
);

export default disciplineRouter;
