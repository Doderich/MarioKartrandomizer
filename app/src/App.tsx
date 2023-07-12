import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { PlusIcon } from "@heroicons/react/24/solid";
import { MinusIcon } from "@heroicons/react/24/solid";
import { getRandomKartCombination } from "./lib/kartUtils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "./components/ui/aspect-ratio";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import useCheckMobileScreen from "./lib/useCheckMobile";

function App() {
  const [players, setPlayers] = useState(1);
  const [refresh, setRefresh] = useState(false);

  const isMobile = useCheckMobileScreen();

  useEffect(() => {}, [players]);

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
      <header className=" w-full bg-secondary h-20 justify-center items-center flex">
        <h1 className="text-3xl font-bold tracking-tight lg:text-5xl">
          Mario Kart 8 Randomizer
        </h1>
      </header>
      <Separator />
      <>
        <div className=" flex w-full h-20 justify-evenly items-center p-3 md:justify-center md:gap-2 lg:justify-center lg:gap-2">
          <span className=" text-2xl">
            {players === 1 ? " 1 Player" : `${players} Players`}{" "}
          </span>
          <div>
            <Button onClick={() => addPlayer()} variant="ghost">
              <PlusIcon className="h-6 w-6 text-black" />
            </Button>
            <Button onClick={() => removePlayer()} variant="ghost">
              <MinusIcon className="h-6 w-6 text-black" />
            </Button>
          </div>
        </div>
        <Separator />
        <div className="flex w-full justify-center h-20 items-center p-3">
          <Button className="h-full p-3" onClick={handleRandomize}>
            <span className=" text-4xl text-center">Randomize</span>
          </Button>
        </div>
      </>
      <div className="grid p-2 w-full h-1/2 lg:grid-cols-2 lg:gap-3">
        {Array.from(Array(players), (player, index) => {
          return (
            <div
              className="mb-2 w-full lg:h-1/2 lg:row-span-1 lg:col-span-1"
              key={index}
            >
              <PlayerCard id={index + 1} refresh={refresh} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PlayerCard(props: { id: number; refresh: any }) {
  const [combination, setCombination] = useState<KartCombination>({
    character: { name: "", imageURL: "", id: 0, selectable: false, type: "" },
    body: { name: "", type: "", imageURL: "", id: 0, selectable: false },
    tire: { name: "", type: "", imageURL: "", id: 0, selectable: false },
    glider: { name: "", type: "", imageURL: "", id: 0, selectable: false },
    description: "",
  });
  useEffect(() => {
    setCombination(getRandomKartCombination());
  }, [props.refresh]);

  function reRoll() {
    setCombination(getRandomKartCombination());
  }

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>
          <span className=" text-3xl">Player {props.id}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 grid-rows-7 gap-2 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-2 lg:grid-rows-3 ">
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-2">
              <span className="font-semibold text-xl">Character</span>
              <span className="font-medium text-lg">
                {combination.character.name}
              </span>
            </div>
            <div className="w-3/4 h-3/4  md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3">
              <AspectRatio ratio={1}>
                <img
                  src={combination.character.imageURL}
                  alt="Image couldn't be loaded"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
          </div>
          <Separator className=" row-span-2 md:hidden lg:hidden " />
          <div className="grid grid-cols-2">
            <div className=" grid grid-rows-2 ">
              <span className="font-semibold text-xl">Vehicle</span>
              <span className="font-medium text-lg">
                {combination.body.name}
              </span>
            </div>
            <div className="w-3/4 h-3/4 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3">
              <AspectRatio ratio={1}>
                <img
                  src={combination.body.imageURL}
                  alt="Image couldn't be loaded"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
          </div>
          <Separator className=" row-span-2 md:hidden lg:hidden" />
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-2">
              <span className="font-semibold text-xl">Tire</span>
              <span className="font-medium text-lg">
                {combination.tire.name}
              </span>
            </div>
            <div className="w-3/4 h-3/4 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3">
              <AspectRatio ratio={1}>
                <img
                  src={combination.tire.imageURL}
                  alt="Image couldn't be loaded"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
          </div>
          <Separator className=" row-span-2 md:hidden lg:hidden" />
          <div className="grid grid-cols-2">
            <div className=" grid grid-rows-2">
              <span className="font-semibold text-xl">Glider</span>
              <span className="font-medium text-lg">
                {combination.glider.name}
              </span>
            </div>
            <div className="w-3/4 h-3/4 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3">
              <AspectRatio ratio={1}>
                <img
                  src={combination.glider.imageURL}
                  alt="Image couldn't be loaded"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
          </div>
          <Separator className=" row-span-2 md:hidden lg:hidden" />
          <div className=" justify-center items-center flex w-full md:col-span-2 lg:col-span-2 ">
            <Button onClick={reRoll} variant="outline" className="w-1/2 ">
              <ArrowPathIcon className="h-6 w-6 text-black" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default App;
