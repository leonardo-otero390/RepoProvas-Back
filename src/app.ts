import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import serverError from './middlewares/serverError.js';
import router from './routes/router.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(serverError);
export default app;
