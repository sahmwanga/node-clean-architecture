const appSecret = require("express").Router();
const { addSecretKey } = require("../controllers");

/**
 *
 * @module Generate App Secret
 * @param {*} db
 * @returns
 */
module.exports = () => {
  appSecret.post("/", addSecretKey);
  return appSecret;
};
