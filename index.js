const http = require("node:http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"COntent-Type": "text/plain"});
    res.end("Hello World!");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server runnin on port ${PORT}.`));