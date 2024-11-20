import React from "react";
import axios from "axios"
function FilterContainer({ table ,handleFilterSubmit}) {

function handleSubmit(e)
{
  handleFilterSubmit(e);
}

  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Filters</h1>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="clientName"
          placeholder="Search by client Name"
          className="border px-2 rounded-md border-black h-12"
        />
        <input
          type="date"
          className="border px-2 rounded-md border-black h-12"
          name="sbd"
        />
        <button
          className="text-md p-2 font-bold border-2 text-center rounded-lg hover:scale-90 transition duration-300 cursor-pointer text-white bg-blue-600 shadow-sm shadow-black w-fit"
          type="submit"
        >
          Apply Filter
        </button>
      </form>
    </div>
  );
}

export default FilterContainer;
