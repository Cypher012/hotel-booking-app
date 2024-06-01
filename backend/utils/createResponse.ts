import { Response } from "express";

const createResponse = (
  res: Response,
  statusCode: number,
  message?: object
) => {
  return res.status(statusCode)?.json(message);
};

export default createResponse;
