import React from "react";

function FilterContainer() {
  return (
    <div className="space-y-4">
    <h1 className="text-3xl">Filters</h1>
      <div className="flex gap-4">
      <input type="text" name="sbcn" placeholder="Search by client Name" className="border px-2 rounded-md border-black h-12"/>
      <input type="date" className="border px-2 rounded-md border-black h-12" name="sbd"/>
      </div>
    </div>
  );
}

export default FilterContainer;
