import { useState } from "react";
import { Separator } from "./components/ui/separator";
import FilterBox, { Filter } from "./components/filterBox";
import { useKartCombination } from "./hooks/useKartCombination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import Randomize from "./components/randomize";
import SinglePlayers from "./components/singlePlayer";
import PlayerCard from "./components/playerCard";
import Single from "./pages/single";
import Group from "./pages/group";

function App() {
  return (
    <div className="w-full h-full">
      <header className="flex items-center justify-center w-full h-20 bg-secondary">
        <h1 className="text-3xl font-bold tracking-tight lg:text-5xl">
          Mario Kart 8 Randomizer
        </h1>
      </header>
      <Separator />
      <Tabs defaultValue="single">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="single">
            Single
          </TabsTrigger>
          <TabsTrigger value="group" className="w-full">
            Group
          </TabsTrigger>
        </TabsList>
        <TabsContent value="single">
          <Single />
        </TabsContent>
        <TabsContent value="group">
          <Group />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
