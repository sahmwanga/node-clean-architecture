const { buildMakeSecret } = require("./buildMakeSecret");

const makeSecret = buildMakeSecret();

module.exports = { makeSecret };
