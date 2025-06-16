const { z } = require("zod");

const repeatSchema = z.object({
  text: z.string(),
  count: z.string(),
});

async function main(req, res) {
  res.send("Hello World");
}

function runValidation(count, res) {
  // if any alphabet is in the count, return error
  if (count.match(/[a-zA-Z]/)) {
    return res.status(400).json({
      error: "Count must be a number",
    });
  }

  // if count is not a number, return error
  if (isNaN(count)) {
    return res.status(400).json({
      error: "Count must be a number",
    });
  }

  return parseInt(count);
}

async function repeat(req, res) {
  const { text, count } = repeatSchema.parse(req.query);

  const countInt = runValidation(count, res);
  if (countInt === undefined) {
    return;
  }

  return res.status(200).json({
    result: Array.from({ length: countInt }, () => text),
  });
}

module.exports = { main, repeat };
