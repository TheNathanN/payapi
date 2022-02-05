"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var contactForm_1 = __importDefault(require("./pages/contactForm"));
var demoForm_1 = __importDefault(require("./pages/demoForm"));
var app = (0, express_1.default)();
var port = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/demoForm', demoForm_1.default);
app.use('/contactForm', contactForm_1.default);
app.listen(port, function () { return console.log("Server running on port ".concat(port)); });
