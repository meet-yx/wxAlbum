/**
 * Created by zy on 2017/11/15.
 */
"use strict";

const mysql = require("promise-mysql");

var pool = mysql.createPool({
    host:"172.16.10.20",
    user:"root",
    password:"root",
    port:3306,
    database:"zlsalbum",
    connectionLimit:10
});
module.exports = pool



