const jsonServer = require('json-server')
const { host, port } = require('./mock.config.json');
const customizeMiddlewares = require('./middlewares');
const { mapping, db } = require('./db');

const server = jsonServer.create();
const middlewares = jsonServer.defaults({ bodyParser: true });
const route = jsonServer.router(db);

server.use(middlewares.concat(customizeMiddlewares));
server.use(jsonServer.rewriter(mapping));
server.use(route);

server.listen(port, host, () => {
  console.log(`[Mock:Start] Server is running at http://${host}:${port}`);
});
