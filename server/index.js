const express = require("express");
const app = express();
const PORT = 8080;

const { main, repeat } = require("./src/functions");

const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  main(req, res);
});

app.get("/repeat", (req, res) => {
  repeat(req, res);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
