const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const process		 = require('process');
const assert			= require('assert');

const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/app`;
MongoClient.connect(url, (err, db) => {
	assert.equal(null, err);
	console.log(`Successfully connected to database.\n${url}`);
	db.close();
});

module.exports = {
	get: {
		route: /^\/contacts\/*([^\/]*)\/*([^\/]*)\/*/,
		respond: (req, res, next) => {
			if (req.params[0] === '') {
				MongoClient.connect(url, (err, db) => {
					db.collection('contacts')
						.find()
						.toArray((err, contacts) => {
							let body = err ? JSON.stringify(err) : contacts;
							res.send(body);
							console.log(`GET: /contacts/\n${JSON.stringify(body, null, 2)}`);
						});
					db.close();
					next();
				});
			} else {
				let command = req.params[0];
				let arg = (req.params[1] || '');

				if (command === 'remove') {
					let condition = arg === 'all' ? {} : {_id: ObjectId(arg)};
					MongoClient.connect(url, (err, db) => {
						db.collection('contacts').remove(condition);
						db.close();
						res.send([]);
						next();
					});
				}
			}
		}
	},
	post: {
		route: '/contacts',
		respond: (req, res, next) => {
			MongoClient.connect(url, (err, db) => {
				db.collection('contacts')
					.insertOne(req.params, (err, result) => {
						let body = err ? JSON.stringify(err) : result;
						res.send(body);
						console.log(`POST: /contacts/\n${JSON.stringify(body, null, 2)}`);
					});
				db.close();
				next();
			});
		}
	}
};
