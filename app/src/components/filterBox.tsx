import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Toggle } from "./ui/toggle";

interface Filter {
  name: string;
  filterType: string;
  filterproperties: string;
}

const listofFilters: Filter[] = [
  {
    name: "heavy",
    filterType: "Character",
    filterproperties: "heavy",
  },
  {
    name: "medium",
    filterType: "Character",
    filterproperties: "medium",
  },
  {
    name: "light",
    filterType: "Character",
    filterproperties: "light",
  },
  {
    name: "karts",
    filterType: "Vehicle",
    filterproperties: "kart",
  },
  {
    name: "bikes",
    filterType: "Vehicle",
    filterproperties: "bike",
  },
  {
    name: "everything unlocked",
    filterType: "Vehicle",
    filterproperties: "everything",
  },
  {
    name: "dlc",
    filterType: "Vehicle",
    filterproperties: "dlc",
  },
  {
    name: "golden parts",
    filterType: "Vehicle",
    filterproperties: "noGolden",
  },
];
function FilterBox() {
  return (
    <Collapsible>
      <CollapsibleTrigger className=" flex justify-center">
        <span className="text-xl">Filters</span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="w-full h-full flex flex-row gap-4">
          {listofFilters.map((filter, index) => (
            <ToggleButton
              key={index}
              filterType={filter.filterType}
              filterproperties={filter.filterproperties}
              name={filter.name}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default FilterBox;

function ToggleButton(props: Filter) {
  return (
    <Toggle className="flex flex-col w-fit h-full ">
      <span className="text-xl">{props.name}</span>
    </Toggle>
  );
}
