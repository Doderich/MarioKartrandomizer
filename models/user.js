const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const KartCombination = require("./kartCombination");

const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  kartCombinations: [KartCombination],
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
