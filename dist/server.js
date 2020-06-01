"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
//Allocating a port to run the server
const PORT = 5000;
//a port designated for the server and a callback function
// with an output to the console to know the server is up
//and running
main_1.app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
