"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var port = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello');
});
app.listen(port, function () { return console.log("Server running on port ".concat(port)); });
