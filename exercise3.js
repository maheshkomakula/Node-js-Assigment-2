const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, res) => {
  let fileName = "";

  if (req.url === "/api/exercise3/pages/home") {
    fileName = "home.html";
  } else if (req.url === "/api/exercise3/pages/about") {
    fileName = "about.html";
  } else if (req.url === "/api/exercise3/pages/contact") {
    fileName = "contact.html";
  }

  if (fileName) {
    const filePath = path.join(__dirname, "lib", fileName);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("Not Found");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
}).listen(80, () => {
  console.log("Exercise3 running on port 80");
});