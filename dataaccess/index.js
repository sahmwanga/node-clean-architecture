const makeSecretDb = require("./secretDb");

module.exports.myDb = () => {
  //all sequlize db connection;
  console.log("database connection");
};

const secretDb = makeSecretDb({ myDb });
module.exports = { secretDb };
