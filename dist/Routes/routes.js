"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.path = void 0;
//importing modules
const express_1 = __importDefault(require("express"));
const connection_1 = require("../DB Connection/connection");
const middleware_1 = require("../Middleware/middleware");
const cors_1 = __importDefault(require("cors"));
//creating a router instance
exports.path = express_1.default.Router();
const config = {
    origin: "http://localhost:3000",
    credentials: true,
};
//using the middleware
exports.path.use(middleware_1.requestTracker);
exports.path.use(middleware_1.bp);
exports.path.use(middleware_1.sess);
exports.path.use(cors_1.default(config));
//route to the landing page with a get request
exports.path.get("/", function (req, res) { });
//route to the login portal with the user credentials to be specified in the
//body of the request
exports.path.post("/login", middleware_1.auth);
//multiple roles
exports.path.get("/role", middleware_1.validator, function (req, res) {
    if (req.session.role === "admin") {
        res.send("Welcome to admin portal");
    }
    else if (req.session.role === "vendor") {
        res.send("Welcome to vendor portal");
    }
    else {
        res.send("Welcome to customer portal");
    }
});
//route to search section
exports.path.get("/search", middleware_1.validator, function (req, res) {
    connection_1.db.any("SELECT * FROM book_catalog")
        .then((result) => {
        res.json(result);
    })
        .catch((error) => {
        res.send("Sorry your search result does not match with any of our records!");
    });
});
//route to obtain the details for all the book supplied by a given supplier
//affiliated with my store
exports.path.get("/author/:author", middleware_1.validator, function (req, res) {
    let data = req.params;
    connection_1.db.any("SELECT * FROM book_catalog WHERE author=${author}", {
        author: data.author,
    })
        .then((result) => {
        res.json(result);
    })
        .catch((error) => {
        res.send("Sorry your search result does not match with any of our records!");
    });
});
//route to obtain title of books which is higher that a given supplier rating
exports.path.get("/rating/:supplier_rating", middleware_1.validator, function (req, res) {
    let url = req.params;
    connection_1.db.any("SELECT title FROM book_catalog INNER JOIN supplier ON book_catalog.supplier_id=supplier.supplier_id WHERE supplier_rating > ${supplier_rating}", {
        supplier_rating: url.supplier_rating,
    })
        .then((result) => {
        res.json(result);
    })
        .catch((error) => {
        res.send("No records found");
    });
});
//filter by title
exports.path.get("/title/:title", middleware_1.validator, function (req, res) {
    let data = req.params;
    connection_1.db.any("SELECT * FROM book_catalog WHERE title = ${title}", {
        title: data.title,
    })
        .then((result) => {
        res.json(result);
    })
        .catch((error) => {
        res.send("No records found");
    });
});
exports.path.get("/price/:price", middleware_1.validator, function (req, res) {
    let data = req.params;
    connection_1.db.any("SELECT title FROM book_catalog WHERE price > ${price}", {
        price: data.price,
    })
        .then((result) => {
        res.json(result);
    })
        .catch((error) => {
        res.send("No records found");
    });
});
//route for new joiners
exports.path.post("/signup", function (req, res) {
    connection_1.db.none("INSERT INTO members VALUES(${username},${password},${role})", {
        username: req.body.username,
        password: req.body.password,
        role: req.body.role,
    })
        .then((result) => {
        res.send("Please login to continue");
    })
        .catch((error) => {
        res.send("please input valid information!");
    });
});
//route for a session termination
exports.path.get("/logout", function (req, res) {
    req.session.destroy();
    res.send("logged out");
});
