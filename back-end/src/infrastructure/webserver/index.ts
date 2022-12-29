import 'dotenv/config';
import '../database';
import cors from 'cors';
import express from 'express';
import { routes } from './routes';

const application = express();

application.disable('x-powered-by');

application.use(cors({ origin: process.env.URL_ORIGIN }));
application.use(express.json());
application.use(express.urlencoded({ extended: true, }));

application.use('/api/v1', routes);

export { application };