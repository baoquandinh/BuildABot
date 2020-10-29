"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
exports.userRoutes = function (app) {
    app.get("/users", function (req, res, next) {
        res.send("GET call successfull");
    });
    app.post("/users", function (req, res, next) {
        res.send("POST call sucessful");
    });
    app.put("/users/:userId", function (req, res, next) {
        res.send("PUT call sucessful");
    });
    app.delete("/users/:userId", function (req, res, next) {
        res.send("DELETE call sucessful");
    });
};
