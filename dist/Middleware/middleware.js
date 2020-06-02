"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = exports.auth = exports.requestTracker = exports.bp = exports.sess = void 0;
//module imports
const express_session_1 = __importDefault(require("express-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const connection_1 = require("../DB Connection/connection");
const bcrypt_1 = __importDefault(require("bcrypt"));
//creating an instance and setting parameters of the session middleware
exports.sess = express_session_1.default({
    secret: "test",
    saveUninitialized: true,
    resave: true,
});
//creating an instance of the body parser middleware to parse json objects specified in the body
//portion of a request
exports.bp = body_parser_1.default.json();
//logger that logs the request method,request url,request timestamp and request query type
exports.requestTracker = (req, res, next) => {
    console.log(`A ${req.method} request was made to path ${req.path} on the following timestamp ${new Date()} and the query for this is ${req.query}`);
    next();
};
let user = false;
//authentication middleware with password hashing to authenticate users
exports.auth = function (req, res, next) {
    const saltRounds = 10;
    req.session.username = req.body.username;
    req.session.password = req.body.password;
    req.session.role = req.body.role;
    const pass = bcrypt_1.default.hashSync(req.session.password, saltRounds);
    connection_1.db.one("SELECT username,password FROM members WHERE username=${user_name} AND password=${password} AND role=${role}", {
        user_name: req.session.username,
        password: req.session.password,
        role: req.session.role,
    })
        .then((result) => {
        if (bcrypt_1.default.compareSync(result.password, pass)) {
            user = true;
            res.send("You are logged in");
        }
        else {
            res.send("login failed");
        }
        next();
    })
        .catch((error) => {
        res.send("Sorry you are not registered with us,So please create an account!");
    });
};
//validator middleware
exports.validator = function (req, res, next) {
    if (user) {
        next();
    }
    else {
        res.send("sorry you are not authorized");
    }
};
