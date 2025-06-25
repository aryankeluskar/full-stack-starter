import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  "*",
  cors({
    origin: "*",
    allowHeaders: ["*"],
    allowMethods: ["*"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  }),
);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/repeat", (c) => {
  const { text, count } = c.req.query();
  return c.json({
    result: Array(Number(count)).fill(text),
    text: text,
    count: count,
  });
});

export default app;
