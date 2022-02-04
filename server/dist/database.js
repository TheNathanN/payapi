"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql2_1 = __importDefault(require("mysql2"));
require("dotenv/config");
var pool = mysql2_1.default.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: process.env.DB_PW,
});
var contacts = {
    viewAll: function () {
        return new Promise(function (resolve, reject) {
            pool.query("SELECT * FROM contacts", function (err, results) {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    },
    addContact: function (email) {
        return new Promise(function (resolve, reject) {
            pool.query("\n        INSERT INTO contacts (email)\n        VALUES(?);\n        ", email, function (err, results) {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    },
};
exports.default = contacts;
