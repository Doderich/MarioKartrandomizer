// Kart Utils
let data: any;

async function fetchData() {
  const response = await fetch("../imageMap.json");
  data = await response.json();
  console.log(data);
}

fetchData();

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

  console.log(randomKartCombination);

  return randomKartCombination;
}

export function getRandomKartPart(partType: string): KartPart {
  const randomKartPart =
    data[partType][Math.floor(Math.random() * data[partType].length)];
  return randomKartPart;
}

export function getRandomCharakter(): Charakter {
  const randomCharakter =
    data["characters"][Math.floor(Math.random() * data["characters"].length)];
  return randomCharakter;
}
