import Joi from 'joi';
import { NewTestReq } from '../interfaces/Test';

export const newTest = Joi.object<NewTestReq>({
  name: Joi.string().required(),
  pdfUrl: Joi.string().uri().required(),
  categoryId: Joi.number().required(),
  teacherId: Joi.number().required(),
  disciplineId: Joi.number().required(),
});
