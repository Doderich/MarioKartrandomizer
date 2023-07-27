import { SetStateAction, useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Toggle } from "./ui/toggle";

export interface Filter {
  name: string;
  filterType: string;
  filterproperties: string;
}

const listofFilters: Filter[] = [
  {
    name: "heavy",
    filterType: "character",
    filterproperties: "large",
  },
  {
    name: "medium",
    filterType: "character",
    filterproperties: "medium",
  },
  {
    name: "light",
    filterType: "character",
    filterproperties: "small",
  },
  {
    name: "karts",
    filterType: "body",
    filterproperties: "kart",
  },
  {
    name: "bikes",
    filterType: "body",
    filterproperties: "bike",
  },
  {
    name: "dlc",
    filterType: "vehicle",
    filterproperties: "dlc",
  },
  {
    name: "golden parts",
    filterType: "vehicle",
    filterproperties: "noGolden",
  },
];
function FilterBox({
  setActiveFilters,
  activeFilters,
}: {
  setActiveFilters: React.Dispatch<SetStateAction<Filter[]>>;
  activeFilters: Filter[];
}) {
  useEffect(() => {
    setActiveFilters([]);
  }, []);

  function addFilter(filter: Filter) {
    setActiveFilters([...activeFilters, filter]);
  }

  useEffect(() => {
    console.log(activeFilters);
  }, [activeFilters]);

  function removeFilter(filter: Filter) {
    setActiveFilters(
      activeFilters.filter((activeFilter) => activeFilter.name !== filter.name)
    );
  }
  return (
    <Collapsible>
      <CollapsibleTrigger className="flex justify-center w-full">
        <span className="text-3xl">Filters</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col justify-center w-full h-full gap-4 mt-2">
        <div className="flex flex-row flex-wrap justify-center w-full h-full gap-4">
          {listofFilters.map((filter, index) => (
            <ToggleButton
              key={index}
              filterType={filter.filterType}
              filterproperties={filter.filterproperties}
              name={filter.name}
              addFilter={addFilter}
              removeFilter={removeFilter}
            />
          ))}
        </div>
        <div className="flex items-center justify-center w-full">
          <span className="">
            Select the Tags you <b>don't</b> want
          </span>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default FilterBox;

function ToggleButton(props: {
  name: string;
  filterType: string;
  filterproperties: string;
  addFilter: (filter: Filter) => void;
  removeFilter: (filter: Filter) => void;
}) {
  const [pressed, setPressed] = useState(false);

  function togglePressed() {
    setPressed(!pressed);
  }

  useEffect(() => {
    if (pressed) {
      props.addFilter({
        name: props.name,
        filterType: props.filterType,
        filterproperties: props.filterproperties,
      });
    } else {
      props.removeFilter({
        name: props.name,
        filterType: props.filterType,
        filterproperties: props.filterproperties,
      });
    }
  }, [pressed]);

  return (
    <Toggle
      className="flex flex-col h-full w-fit"
      onPressedChange={togglePressed}
    >
      <span className="text-xl">{props.name}</span>
    </Toggle>
  );
}
