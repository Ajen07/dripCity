import React from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RadioFilterProps } from "@/lib/types";

const RadioFilter = ({ name, value }: RadioFilterProps) => {
  return (
    <div className="flex items-center space-x-2 ">
      <RadioGroupItem value={value} id={value} />
      <Label htmlFor={value} className="md:text-lg font-normal">{name}</Label>
    </div>
  );
};

export default RadioFilter;
