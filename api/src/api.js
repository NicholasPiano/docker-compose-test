const process = require('process');
const restify = require('restify');

const host    = process.env.API_HOST || '0.0.0.0';
const port    = process.env.API_PORT || 80;
const server  = restify.createServer();

server.listen(port, host, () => {
  console.log('%s listening at %s', server.name, server.url);
});

server.use(restify.bodyParser());

server.pre(function(req, res, next) {
  req.headers.accept = 'application/json';
  return next();
});

// Endpoints
const contacts = require('./contacts');

server.get(contacts.get.route, contacts.get.respond);
server.post(contacts.post.route, contacts.post.respond);
