import {
  Express,
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express";

export const summonerRoutes = (app: Express) => {
  app
    .route("/summoners")
    .get((req, res, next) => {
      res.send("GET call successfull");
    })
    .post((req, res, next) => {
      // res.send("POST call sucessful");
      res.send(req.params);
    });

  app
    .route("/summoners/:summonerId")
    .put((req, res, next) => {
      res.send("PUT call sucessful");
    })
    .delete((req, res, next) => {
      res.send("DELETE call sucessful");
    });
};
