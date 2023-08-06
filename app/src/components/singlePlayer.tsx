import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "./ui/button";

function SinglePlayers(
  players: number,
  addPlayer: () => void,
  removePlayer: () => void
) {
  return (
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
  );
}

export default SinglePlayers;
