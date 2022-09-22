import { Router } from 'express';
import storiesRoutes from './storiesRoutes';
import feedRoutes from './feedRoutes';
import routesTest from './test';
import userRoutes from './userRoutes';
import suggestsRoutes from './suggestsRoutes';

const routes = new Router();

routes.use(routesTest, storiesRoutes, feedRoutes, userRoutes, suggestsRoutes);

export default routes;