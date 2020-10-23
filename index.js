const app = require('./app');
const { config } = require('./config')

const host = '0.0.0.0';
const port = config.port;

// Server
const server = app.listen(port, host, () =>{
  console.log(`Listen https://localhost:${server.address().port}`)
});