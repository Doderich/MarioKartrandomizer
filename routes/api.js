const express = require("express");
const KartPart = require("../models/kartPart");
const Charakter = require("../models/character");
const router = express.Router();
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

router.get("/kartpart", (req, res, next) => {
  try {
    const part = KartPart.findById(req.params.id);
    res.json(part);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/combination", async (req, res, next) => {
  try {
    const parts = await KartPart.find();
    const characters = await Charakter.find();
    const karts = parts.filter((part) => part.type === "kart");
    const tires = parts.filter((part) => part.type === "tire");
    const gliders = parts.filter((part) => part.type === "glider");

    const data = {
      kart: karts.random(),
      tire: tires.random(),
      glider: gliders.random(),
      characters: characters.random(),
    };
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/combination/<id:number>", async (req, res, next) => {
  try {
    const combination = await KartCombination.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
