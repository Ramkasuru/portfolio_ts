// This file is no longer needed with Next.js standalone output
// but we'll keep it to avoid causing issues with existing configurations
// that might reference it. It will not be used by the new `start` script.

const http = require("http");
const next = require("next");

const port = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      handle(req, res);
    })
    .listen(port, "0.0.0.0", () => {
      console.log(`> Ready on http://0.0.0.0:${port}`);
    });
});
