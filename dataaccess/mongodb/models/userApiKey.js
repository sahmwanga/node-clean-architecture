const mongoose = require("../connections");

let Schema = mongoose.Schema;

let userSecretKey = new Schema({
  user_id: String,
  app_name: String,
  api_key: String,
  status: String,
});

let UserSecretKey = mongoose.model("UserSecretKey", userSecretKey);
module.exports = UserSecretKey;
