import express, { Application, json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { routes } from './utils';

const app: Application = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(compression());
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

routes(app);

export default app;
