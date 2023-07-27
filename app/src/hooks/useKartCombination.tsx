import { Filter } from "@/components/filterBox";
import { KartPart } from "@/models/kartPart";
import { useEffect, useState } from "react";

// Kart Utils
import dataimport from "../assets/imageMap.json";

const data: {
  [key: string]: any;
} = dataimport;

interface DataInterface {
  characters: Charakter[];
  vehicles: KartPart[];
  tires: KartPart[];
  gliders: KartPart[];
}

export function useKartCombination(aktiveFilters: Filter[]) {
  const [aktiveData, setAktiveData] = useState<DataInterface>(data);

  useEffect(() => {
    console.log("filtering data", aktiveFilters);
    console.log("data", data);
    filterData();
  }, [aktiveFilters]);

  const filterData = () => {
    if (aktiveFilters.length === 0) {
      setAktiveData(data);
      console.log(data);
      return;
    }
    const newData = JSON.parse(JSON.stringify(data));
    aktiveFilters.forEach((filter) => {
      if (filter.filterType === "character") {
        newData.characters = data.characters.filter(
          (character: Charakter) => character.type != filter.filterproperties
        );
        console.log("filtering all characters ", filter.filterproperties);
      }
      if (filter.filterType === "body") {
        if (filter.filterproperties === "bike") {
          newData.vehicles = data.vehicles.filter(
            (vehicle: KartPart) =>
              vehicle.type !== "standartBike" && vehicle.type !== "sportBike"
          );
        }
        if (filter.filterproperties === "kart") {
          newData.vehicles = data.vehicles.filter(
            (vehicle: KartPart) =>
              vehicle.type !== "kart" && vehicle.type !== "atv"
          );
        }
      }
      if (filter.filterType === "vehicle") {
        if (filter.filterproperties === "dlc") {
          console.log("filtering dlc parts");
          newData.characters = data.characters.filter(
            (vehicle: KartPart) => !vehicle.dlc
          );
        }
        if (filter.filterproperties === "noGolden") {
          console.log("filtering golden parts");
          newData.vehicles = data.vehicles.filter(
            (vehicle: KartPart) => !vehicle.golden
          );
          newData.tires = data.tires.filter((tire: KartPart) => !tire.golden);
          newData.gliders = data.gliders.filter(
            (glider: KartPart) => !glider.golden
          );
        }
      }
    });
    setAktiveData(newData);
    console.log(newData);
  };
  function getRandomKartCombination(): KartCombination {
    if (!aktiveData) {
      return {
        character: {
          name: "",
          imageURL: "",
          id: 0,
          selectable: false,
          type: "",
        },
        body: { name: "", type: "", imageURL: "", id: 0, selectable: false },
        tire: { name: "", type: "", imageURL: "", id: 0, selectable: false },
        glider: {
          name: "",
          type: "",
          imageURL: "",
          id: 0,
          selectable: false,
        },
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

  function getRandomKartPart(partType: string): KartPart {
    if (!aktiveData[partType]) {
      return { name: "", type: "", imageURL: "", id: 0, selectable: false };
    }
    const randomKartPart: KartPart =
      aktiveData[partType][
        Math.floor(Math.random() * aktiveData[partType].length)
      ];

    return randomKartPart;
  }

  function getRandomCharakter(): Charakter {
    const randomCharakter =
      aktiveData["characters"][
        Math.floor(Math.random() * aktiveData["characters"].length)
      ];
    return randomCharakter;
  }

  return { getRandomKartCombination };
}
