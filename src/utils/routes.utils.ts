import express, { Application } from 'express';
import path from 'path';
import { serve, setup } from 'swagger-ui-express';
import { userRoutes } from '../routes';
import { swagger } from '../docs';

export const routes = (server: Application) => {
  server.use('/user', userRoutes);
  server.use('/files', express.static(path.join(__dirname, '../files')));
  server.use('/docs', serve, setup(swagger));
};

export default routes;
