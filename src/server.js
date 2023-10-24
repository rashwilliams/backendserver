const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello Node!!!!</h1>\n");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// const http = require ("http")
// const app = require ("./app")

// const httpServer = http.createServer (app)

// const PORT = 3000

// httpServer.listen (PORT, () => {
//     console.log (`server is running on port: ${PORT}`)

// })
