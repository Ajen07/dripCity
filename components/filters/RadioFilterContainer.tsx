import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RadioFilterProps } from "@/lib/types";
import RadioFilter from "./RadioFilter";
const RadioFilterContainer = () => {
  const radioFilters: any = [
    { name: "price high to low", value: "price high to low" },
    { name: "price low to high", value: "price low to high" },
    { name: "latest", value: "latest" },
  ];
  return (
    <div>
      <h1 className="font-bold text-xl text-purple-800">Sort By</h1>
      <RadioGroup className="mt-2">
        {radioFilters.map((filter: RadioFilterProps,i:number) => {
          return <RadioFilter key={i} name={filter.name} value={filter.value} />;
        })}
      </RadioGroup>
    </div>
  );
};

export default RadioFilterContainer;
