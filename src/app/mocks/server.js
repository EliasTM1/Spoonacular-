const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');

const middlewares =jsonServer.defaults();
server.use(middlewares)



// * defaultServer
let port = 3000;
server.use(router);
server.listen(port, () => {
  console.log('server running on' + port)
})
