import FilterBox, { Filter } from "@/components/filterBox";
import PlayerCard from "@/components/playerCard";
import Randomize from "@/components/randomize";
import SinglePlayers from "@/components/singlePlayer";
import { useKartCombination } from "@/hooks/useKartCombination";
import { Separator } from "@radix-ui/react-separator";
import { useState } from "react";

function Single() {
  const [players, setPlayers] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);
  const { getRandomKartCombination } = useKartCombination(activeFilters);

  const addPlayer = () => {
    if (players < 4) {
      setPlayers(players + 1);
    }
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
    <>
      {SinglePlayers(players, addPlayer, removePlayer)}
      <Separator />
      <div className="flex items-center justify-center ">
        <FilterBox
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />
      </div>
      <Separator />
      <Randomize handleRandomize={handleRandomize} />
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
    </>
  );
}
export default Single;
