const mongoose = require("mongoose");
const Charakter = require("./character");
const KartPart = require("./kartPart");
const Schema = mongoose.Schema;

const KartCombinationSchema = new Schema({
  charakter: Charakter,
  description: String,
  kart: KartPart,
  tire: KartPart,
  glider: KartPart,
});

const KartCombination = mongoose.model(
  "kartCombination",
  KartCombinationSchema
);

module.exports = KartCombination;
