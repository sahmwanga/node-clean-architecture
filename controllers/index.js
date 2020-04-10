const { addSecret } = require("../usecases");
const { generateSecretController } = require("./generateSecretController");

const addSecretKey = generateSecretController({ addSecret });

module.exports = { addSecretKey };
