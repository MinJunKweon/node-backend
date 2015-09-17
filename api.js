var express = require('express');
var db = require('./db.js');
var api = express.Router();

api.get('/data', function (req, res) {
	db.query('SELECT * from user', function (err, rows) {
		if (err) throw err;

		res.json(rows);
	});
});
api.get('/error', function (req, res) {
	db.query('SELECT * from error', function (err, rows) {
		if (err) throw err;

		res.json(rows);
	});
});


module.exports = api;
