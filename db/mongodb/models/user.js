const mongoose = require("../connection");

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  age: Number,
});

let User = mongoose.model("Users", userSchema);
module.exports = User;
