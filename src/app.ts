import 'express-async-errors';
import express from 'express';
import serverError from './middlewares/serverError.js';
import routes from './routes/routes.js';

const app = express();
app.use(express.json());
app.use(routes);
app.use(serverError);
export default app;
