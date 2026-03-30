const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(80, () => {
  console.log("Exercise4 running on port 80");
});