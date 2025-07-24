"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.send("Welcome person");
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Listening on port http://localhost${port}');
});
