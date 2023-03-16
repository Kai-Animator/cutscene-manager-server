const { serverEndpoints } = require('./src/server.js');

const server = serverEndpoints();

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`🧲 [Server] is listening to port: ${PORT}`)
})

// https.createServer(options, server).listen(PORT, () => {
//   console.info(`Cutscene Manager is listening to PORT: ${PORT}`);
// });
