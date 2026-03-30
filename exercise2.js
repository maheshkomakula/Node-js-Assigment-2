const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, res) => {
  if (req.url === "/api/exercise2") {
    const filePath = path.join(__dirname, "lib", "users.txt");

    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error");
        return;
      }

      const lines = data.trim().split("\n");

      let html = "<table border='1'>";

      const headers = lines[0].split("|").map(h => h.trim());
      html += "<tr>";
      headers.forEach(h => html += `<th>${h}</th>`);
      html += "</tr>";

      for (let i = 1; i < lines.length; i++) {
        const row = lines[i].split("|").map(r => r.trim());
        html += "<tr>";
        row.forEach(col => html += `<td>${col}</td>`);
        html += "</tr>";
      }

      html += "</table>";

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    });
  }
}).listen(80, () => {
  console.log("Exercise2 running on port 80");
});