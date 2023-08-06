import FilterBox, { Filter } from "@/components/filterBox";
import PlayerCard from "@/components/playerCard";
import Randomize from "@/components/randomize";
import SinglePlayers from "@/components/singlePlayer";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useKartCombination } from "@/hooks/useKartCombination";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog";
import { Separator } from "@radix-ui/react-separator";
import { useState } from "react";

function Group() {
  const [players, setPlayers] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);
  const { getRandomKartCombination } = useKartCombination(activeFilters);
  const [userId, setUserId] = useState(null);
  const [groupId, setGroupId] = useState<string | null>(null);

  function randomizeAll() {
    setRefresh(!refresh);
  }

  const handleRandomize = () => {
    randomizeAll();
  };

  return (
    <>
      {groupId != null && (
        <>
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
      )}
      {groupId == null && (
        <div>
          <div>
            <Dialog>
              <DialogTrigger>
                <Button>Create Group</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create a group</DialogTitle>
                  <DialogDescription>
                    Copy the link below and share it with your friends.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div>
            <Dialog>
              <DialogTrigger>
                <Button>Join Group</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Join a group</DialogTitle>
                  <DialogDescription>
                    Paste the link below to join a group.
                    <Input />
                    <Button>Join</Button>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </>
  );
}
export default Group;
