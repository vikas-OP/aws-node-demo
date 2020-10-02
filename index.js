const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("NodeJS server on EC2 instance. Vikas. This is server 1");
});

app.listen(PORT, () => console.log("server started"));
