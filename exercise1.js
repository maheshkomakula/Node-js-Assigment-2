const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, res) => {
  if (req.url === "/api/exercise1") {
    const filePath = path.join(__dirname, "lib", "index.html");

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
}).listen(80, () => {
  console.log("Exercise1 running on port 80");
});