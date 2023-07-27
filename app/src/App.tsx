import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { PlusIcon } from "@heroicons/react/24/solid";
import { MinusIcon } from "@heroicons/react/24/solid";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "./components/ui/aspect-ratio";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import FilterDrawer from "./components/filterDrawer";
import FilterBox, { Filter } from "./components/filterBox";
import { useKartCombination } from "./hooks/useKartCombination";

function App() {
  const [players, setPlayers] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);
  const { getRandomKartCombination } = useKartCombination(activeFilters);

  const addPlayer = () => {
    setPlayers(players + 1);
  };

  const removePlayer = () => {
    if (players > 1) {
      setPlayers(players - 1);
    }
  };

  function randomizeAll() {
    setRefresh(!refresh);
  }

  const handleRandomize = () => {
    randomizeAll();
  };

  return (
    <div className="w-full h-full">
      <header className="flex items-center justify-center w-full h-20 bg-secondary">
        <h1 className="text-3xl font-bold tracking-tight lg:text-5xl">
          Mario Kart 8 Randomizer
        </h1>
      </header>
      <Separator />
      <div className="flex items-center w-full h-20 p-3 justify-evenly md:justify-center md:gap-2 lg:justify-center lg:gap-2">
        <span className="text-2xl ">
          {players === 1 ? " 1 Player" : `${players} Players`}{" "}
        </span>
        <div>
          <Button onClick={() => addPlayer()} variant="ghost">
            <PlusIcon className="w-6 h-6 text-black" />
          </Button>
          <Button onClick={() => removePlayer()} variant="ghost">
            <MinusIcon className="w-6 h-6 text-black" />
          </Button>
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-center w-full h-20 gap-10 p-3">
        <Button className="h-full p-3" onClick={handleRandomize}>
          <span className="text-4xl text-center ">Randomize</span>
        </Button>
      </div>
      <Separator />
      <div className="flex items-center justify-center ">
        <FilterBox
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />
      </div>
      <Separator />
      <div className="grid w-full p-2 h-1/2 lg:grid-cols-2 lg:gap-3">
        {Array.from(Array(players), (_player, index) => {
          return (
            <div
              className="w-full mb-2 lg:h-1/2 lg:row-span-1 lg:col-span-1"
              key={index}
            >
              <PlayerCard
                id={index + 1}
                refresh={refresh}
                getRandomKartCombination={getRandomKartCombination}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PlayerCard(props: {
  id: number;
  refresh: any;
  getRandomKartCombination: any;
}) {
  const [combination, setCombination] = useState<KartCombination>({
    character: { name: "", imageURL: "", id: 0, selectable: false, type: "" },
    body: { name: "", type: "", imageURL: "", id: 0, selectable: false },
    tire: { name: "", type: "", imageURL: "", id: 0, selectable: false },
    glider: { name: "", type: "", imageURL: "", id: 0, selectable: false },
    description: "",
  });
  useEffect(() => {
    setCombination(props.getRandomKartCombination());
  }, [props.refresh]);

  function reRoll() {
    setCombination(props.getRandomKartCombination());
  }

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>
          <span className="text-3xl ">Player {props.id}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-2 grid-rows-7 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-2 lg:grid-rows-3 ">
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-2">
              <span className="text-xl font-semibold">Character</span>
              <span className="text-lg font-medium">
                {combination.character.name}
              </span>
            </div>
            <div className="w-3/4 h-3/4 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3">
              <AspectRatio ratio={1}>
                <img
                  src={combination.character.imageURL}
                  alt="Image couldn't be loaded"
                  className="object-cover rounded-md"
                />
              </AspectRatio>
            </div>
          </div>
          <Separator className="row-span-2 md:hidden lg:hidden" />
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-2 ">
              <span className="text-xl font-semibold">Vehicle</span>
              <span className="text-lg font-medium">
                {combination.body.name}
              </span>
            </div>
            <div className="w-3/4 h-3/4 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3">
              <AspectRatio ratio={1}>
                <img
                  src={combination.body.imageURL}
                  alt="Image couldn't be loaded"
                  className="object-cover rounded-md"
                />
              </AspectRatio>
            </div>
          </div>
          <Separator className="row-span-2 md:hidden lg:hidden" />
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-2">
              <span className="text-xl font-semibold">Tire</span>
              <span className="text-lg font-medium">
                {combination.tire.name}
              </span>
            </div>
            <div className="w-3/4 h-3/4 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3">
              <AspectRatio ratio={1}>
                <img
                  src={combination.tire.imageURL}
                  alt="Image couldn't be loaded"
                  className="object-cover rounded-md"
                />
              </AspectRatio>
            </div>
          </div>
          <Separator className="row-span-2 md:hidden lg:hidden" />
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-2 ">
              <span className="text-xl font-semibold">Glider</span>
              <span className="text-lg font-medium">
                {combination.glider.name}
              </span>
            </div>
            <div className="w-3/4 h-3/4 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3">
              <AspectRatio ratio={1}>
                <img
                  src={combination.glider.imageURL}
                  alt="Image couldn't be loaded"
                  className="object-cover rounded-md"
                />
              </AspectRatio>
            </div>
          </div>
          <Separator className="row-span-2 md:hidden lg:hidden" />
          <div className="flex items-center justify-center w-full md:col-span-2 lg:col-span-2">
            <Button onClick={reRoll} variant="outline" className="w-1/2 ">
              <ArrowPathIcon className="w-6 h-6 text-black" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default App;
