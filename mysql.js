const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "mysql.bearpoint.dev",
    user: "paco9595",
    password: "paco1234",
    database: "bautizosofia",
    port: '3306'
});

module.exports = connection;
