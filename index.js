const express = require("express");
const app = express();
const routers = require("./controller/usercontroller");

app.use(express.json());

app.use("/", routers);

app.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
