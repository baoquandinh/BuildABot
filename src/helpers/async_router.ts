import { Request, Response, NextFunction, RequestHandler } from "express";

export const asyncRouter = (handler: RequestHandler) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Promise.resolve(handler(req, res, next)).catch(next);
};
