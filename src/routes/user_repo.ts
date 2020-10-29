import { Express } from "express";
import { getAllUsers } from "../controllers";
import { asyncRouter } from "../helpers";

export const userRoutes = (app: Express) => {
  app
    .route("/users")
    .get(asyncRouter(getAllUsers))
    .post((req, res, next) => {
      res.send("POST call sucessful");
    });

  app
    .route("/users/:userId")
    .put((req, res, next) => {
      res.send("PUT call sucessful");
    })
    .delete((req, res, next) => {
      res.send("DELETE call sucessful");
    });
};
