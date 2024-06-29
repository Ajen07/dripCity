import React from "react";
import SelectFilter from "./SelectFilter";

const SelectFilterContainer = () => {
  return (
    <div>
      <h1 className="font-bold text-xl text-purple-800">Collections</h1>
      <SelectFilter/>
      <SelectFilter/>
    </div>
  );
};

export default SelectFilterContainer;
