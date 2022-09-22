import express from 'express';

import cors from 'cors';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.corsAuthorizations();
  }

  corsAuthorizations() {
    this.server.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
      );

      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST');
      this.server.use(cors());
      next();
    });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
