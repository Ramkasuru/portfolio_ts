// index.js - custom Next.js server for Firebase App Hosting / Cloud Run

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
