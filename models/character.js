const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: String,
  imageURL: String,
});

const Charakter = mongoose.model("character", CharacterSchema);

module.exports = Charakter;
