const bcrypt = require("bcrypt");

const { makeGenerateSecret } = require("./generate-secret");

const hashBcrypt = (api_key) => {
  return bcrypt.hashSync(api_key, 12);
};


//db-mysql
// const database = require("../dataaccess");

//db-mongodb
const database = require("../dataaccess/mongodb");

const { addSecret } = makeGenerateSecret({ hashBcrypt });
module.exports = { addSecret };
