const { makeSecret } = require("../entities");

module.exports.makeGenerateSecret = ({ hashBcrypt }) => {
  addSecret = async ({ payload }) => {
    const secret = await makeSecret({ payload });
    //generate secret;
    const hash = hashBcrypt(secret.getApiKey());

    //do all db interactions like insert/update/delete;
    return { api_key: hash };
  };

  return { addSecret };
};
