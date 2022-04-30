import { Router } from 'express';
import * as testController from '../controllers/testController.js';

const testRouter = Router();

testRouter.patch('/:id/views', testController.incrementViews);

export default testRouter;
