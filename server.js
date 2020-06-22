const express = require("express");
const next = require("next");
const cookieParser = require("cookie-parser");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const routes = require("next-routes")();

const handle = routes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(cookieParser());

    server.all("/api*", (req, res) => {
      return handle(req, res);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    // console.error(ex.stack);
    process.exit(1);
  });
