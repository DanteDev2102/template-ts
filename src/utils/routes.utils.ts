import { Application } from 'express';
import { userRoutes } from '../routes';

export const routes = (server: Application) => {
  server.use('/user', userRoutes);
};

export default routes;
