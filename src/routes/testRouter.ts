import { Router } from 'express';
import * as testController from '../controllers/testController.js';
import validateSchema from '../middlewares/validateSchema.js';
import { newTest } from '../schemas/testSchemas.js';

const testRouter = Router();

testRouter.post('/', validateSchema(newTest, 'body'), testController.create);

testRouter.patch('/:id/views', testController.incrementViews);

export default testRouter;
