"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
//importing modules
const express_1 = __importDefault(require("express"));
const routes_1 = require("./Routes/routes");
//creating and naming an instance of express object
exports.app = express_1.default();
//making using the router middleware
exports.app.use('/', routes_1.path);
