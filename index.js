"use strict";

const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const PORT = parseInt(process.env.PORT) || 3030;
const app = express();


const log = console.log;

console.log = function (...args) {
  log.apply(console, ["[", new Date().toISOString(), "]"].concat(args));
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// spin up the server.
app.on("error", (err) => {
  console.error(err);
});

const routes = require("./routes");
app.use("/api", routes());

http.createServer(app);

app.listen(PORT, () => {
  console.log(`[*] OAuth Server is running at [::1]:${PORT}...`);
});
