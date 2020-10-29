import { Request, Response, NextFunction } from "express";
import { IUser } from "../resources/models/user";

export const getAllUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const failed = false;
  const user = failed
    ? undefined
    : {
        user_name: "baoquan",
        user_summoner_name: "One Steamed bun",
      };
  if (!user) {
    throw Error()
  }
  res.send(user);
};
