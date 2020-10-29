"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncRouter = void 0;
exports.asyncRouter = (handler) => (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(next);
};
