const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/repeat", (req, res) => {
  const { text } = req.query;
  const { count } = req.query;
  const repeatedText = Array.from({ length: count }, () => text);
  res.json({
    result: repeatedText,
    text: text,
    count: count,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

