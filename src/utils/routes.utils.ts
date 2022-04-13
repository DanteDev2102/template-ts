import express, { Application } from 'express';
import path from 'path';
import { userRoutes } from '../routes';

export const routes = (server: Application) => {
  server.use('/user', userRoutes);
  server.use('/files', express.static(path.join(__dirname, '../files')));
};

export default routes;
