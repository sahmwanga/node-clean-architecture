const actions = require("./actions");

const db = require("./models");

const myDb = actions(db);
module.exports = myDb;
