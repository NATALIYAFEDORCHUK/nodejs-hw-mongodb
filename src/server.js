import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import contactsRouter from './routers/contacts.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import dotenv from 'dotenv';

dotenv.config();

export const setupServer = () => {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(
    express.json({
      type: ['application/json', 'application/vnd.api+json'],
      limit: '100kb',
    }),
  );
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(contactsRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.use((req, res, next) => {
    res.status(404).json({
      status: 404,
      message: 'Not found',
    });
    next();
  });

  app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
    });
    next(err);
    return app;
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
