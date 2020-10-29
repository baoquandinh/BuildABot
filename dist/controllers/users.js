"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
exports.getAllUsers = (req, res, next) => {
    const failed = false;
    const user = failed
        ? undefined
        : {
            user_name: "baoquan",
            user_summoner_name: "One Steamed bun",
        };
    if (!user) {
        throw Error();
    }
    res.send(user);
};
