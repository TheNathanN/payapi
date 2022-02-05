"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql2_1 = __importDefault(require("mysql2"));
require("dotenv/config");
var pool = mysql2_1.default.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PW,
});
var contacts = {
    addDemo: function (email) {
        return new Promise(function (resolve, reject) {
            pool.query("INSERT INTO demo_form (email) \n        VALUES (?);", [email], function (err, results) {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    },
    addContact: function (name, email, company, marketing, title, message) {
        return new Promise(function (resolve, reject) {
            pool.query("INSERT INTO contact_form (name, email, company, marketing, title, message) \n        VALUES (?, ?, ?, ?, ?, ?);\n        ", [name, email, company, marketing, title, message], function (err, results) {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    },
};
exports.default = contacts;
