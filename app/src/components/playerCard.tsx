import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Separator } from "@radix-ui/react-separator";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

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

export default PlayerCard;
