const mysql = require('mysql')

const db = mysql.createConnection({
	host: "evilparadise.com",
	user: "fivem",
	password: "152cb9c2713a75ea8bd08ee2490f6ec5",
	database:"fivem" 
})

module.exports = db;
