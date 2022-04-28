import { Router } from 'express';
import * as termController from '../controllers/termController.js';
import * as disciplineController from '../controllers/disciplineController.js';

const termRouter = Router();

termRouter.get('/', termController.findMany);
termRouter.get('/:termId/disciplines', disciplineController.findManyByTermId);

export default termRouter;
