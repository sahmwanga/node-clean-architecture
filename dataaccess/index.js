const makeSecretDb = require("./secretDb");

const db = require("../../../../models");

const myDb = makeSecretDb(db);
module.exports = myDb;
