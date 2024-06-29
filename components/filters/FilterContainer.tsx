import React from "react";
import RadioFilterContainer from "./RadioFilterContainer";
import SelectFilterContainer from "./SelectFilterContainer";

const FilterContainer = () => {
  return (
    <div className="flex flex-col pl-4 space-y-4">
      <RadioFilterContainer />
      <SelectFilterContainer />
      <SelectFilterContainer />
    </div>
  );
};

export default FilterContainer;
