"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const controllers_1 = require("../controllers");
const helpers_1 = require("../helpers");
exports.userRoutes = (app) => {
    app
        .route("/users")
        .get(helpers_1.asyncRouter(controllers_1.getAllUsers))
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
