// Kart Utils
import dataimport from "../assets/imageMap.json";

const data: {
  [key: string]: any;
} = dataimport;

export function getRandomKartCombination(): KartCombination {
  if (!data) {
    return {
      character: { name: "", imageURL: "", id: 0, selectable: false, type: "" },
      body: { name: "", type: "", imageURL: "", id: 0, selectable: false },
      tire: { name: "", type: "", imageURL: "", id: 0, selectable: false },
      glider: { name: "", type: "", imageURL: "", id: 0, selectable: false },
      description: "",
    };
  }
  const randomKartCombination = {
    character: getRandomCharakter(),
    description: "Random Kart Combination",
    body: getRandomKartPart("vehicles"),
    tire: getRandomKartPart("tires"),
    glider: getRandomKartPart("gliders"),
  };
  return randomKartCombination;
}

export function getRandomKartPart(partType: string): KartPart {
  if (!data[partType]) {
    return { name: "", type: "", imageURL: "", id: 0, selectable: false };
  }
  const randomKartPart =
    data[partType][Math.floor(Math.random() * data[partType].length)];
  return randomKartPart;
}

export function getRandomCharakter(): Charakter {
  const randomCharakter =
    data["characters"][Math.floor(Math.random() * data["characters"].length)];
  return randomCharakter;
}
