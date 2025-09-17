/* eslint-disable no-unused-vars */
import createHttpError from 'http-errors';
export const notFoundHandler = (req, res, next) => {
  const err = createHttpError(404, 'Route not found');
  res.status(404).json({
    status: err.status,
    message: err.name,
    data: err,
  });
};
