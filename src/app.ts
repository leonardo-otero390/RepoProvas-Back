import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import serverError from './middlewares/serverError.js';
import routes from './routes/routes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(serverError);
export default app;
