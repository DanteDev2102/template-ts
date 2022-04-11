import { Application } from 'express';
import { userRoutes } from '../routes';
import express from 'express';
import { resolve } from 'path';

export const routes = (server: Application) => {
  server.use('/user', userRoutes);
  server.use('/files', express.static(resolve('files')));
};

export default routes;
