import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { PlusIcon } from "@heroicons/react/24/solid";
import { MinusIcon } from "@heroicons/react/24/solid";
import { getRandomKartCombination } from "./lib/kartUtils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "./components/ui/aspect-ratio";

interface Player {
  id: number;
  kartCombination: KartCombination;
}

function App() {
  const [players, setPlayers] = useState<Player[]>([]);

  const addPlayer = () => {
    const newPlayer: Player = {
      id: players.length + 1,
      kartCombination: getRandomKartCombination(),
    };
    setPlayers([...players, newPlayer]);
  };

  const removePlayer = () => {
    setPlayers([...players.filter((player) => player.id !== players.length)]);
  };

  const changePlayerCombination = (playerId: number) => {
    const newPlayers = players.map((player) => {
      if (player.id === playerId) {
        return {
          id: player.id,
          kartCombination: getRandomKartCombination(),
        };
      }
      return player;
    });
    setPlayers(newPlayers);
  };

  const randomizeAll = () => {
    const newPlayers = players.map((player) => {
      return {
        id: player.id,
        kartCombination: getRandomKartCombination(),
      };
    });
    setPlayers(newPlayers);
  };

  const handleRandomize = () => {
    randomizeAll();
  };

  return (
    <>
      <header className=" w-full bg-secondary h-14 justify-center items-center flex">
        <h1 className="text-3xl font-bold tracking-tight lg:text-5xl">
          Mario Kart 8 Randomizer
        </h1>
      </header>
      <Separator />
      <div>
        <div className=" flex w-full justify-evenly items-center p-3">
          <span className=" text-2xl">
            {players.length === 1 ? " 1 Player" : `${players.length} Players`}{" "}
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
        <div className="flex w-full justify-center items-center h-fit p-3">
          <Button className="h-14 p-3" onClick={handleRandomize}>
            <span className=" text-4xl text-center">Randomize</span>
          </Button>
        </div>
        <div className=" bg-primary px-2">
          {players.map((player, index) => {
            return (
              <PlayerCard
                key={index}
                id={player.id}
                combination={player.kartCombination}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

function PlayerCard(props: { id: number; combination: KartCombination }) {
  const [combination, setCombination] = useState<KartCombination>({
    character: { name: "", imageURL: "", id: 0, selectable: false, type: "" },
    body: { name: "", type: "", imageURL: "", id: 0, selectable: false },
    tire: { name: "", type: "", imageURL: "", id: 0, selectable: false },
    glider: { name: "", type: "", imageURL: "", id: 0, selectable: false },
    description: "",
  });

  useEffect(() => {
    setCombination(props.combination);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle title={`Player ${props.id}`} />
      </CardHeader>
      <CardContent>
        <div>
          <span>Character</span>
          <img src={`/${combination.tire.imageURL}`} />
          <span>{combination.character.name}</span>
        </div>
        <div>
          <span>Kart</span>
          <img src={`/${combination.tire.imageURL}`} />
          <span>{combination.body.name}</span>
        </div>
        <div>
          <span>Tire</span>
          <img src={`/${combination.tire.imageURL}`} className="w-24 h-24" />
          <span>{combination.tire.imageURL}</span>
          <span>{combination.tire.name}</span>
        </div>
        <div>
          <span>Glider</span>
          <img src={`/${combination.tire.imageURL}`} className="w-24 h-24" />
          <span>{combination.glider.name}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default App;
