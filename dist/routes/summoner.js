"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summonerRoutes = void 0;
exports.summonerRoutes = function (app) {
    app.get("/summoners", function (req, res, next) {
        res.send("GET summoner successfull");
    });
    app.post("/summoners", function (req, res, next) {
        res.send("POST summoner sucessful");
    });
    app.put("/summoners/:summonerId", function (req, res, next) {
        res.send("PUT summoner sucessful");
    });
    app.delete("/summoners/:summonerId", function (req, res, next) {
        res.send("DELETE summoner sucessful");
    });
};
