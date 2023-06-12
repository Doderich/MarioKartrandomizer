const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KartPartSchema = new Schema({
  name: String,
  type: String,
  imageURL: String,
});

const KartPart = mongoose.model("kartPart", KartPartSchema);

module.exports = KartPart;
