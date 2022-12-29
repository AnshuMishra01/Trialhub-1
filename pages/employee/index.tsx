import React from "react";
import FilterIcon from "../components/icons/filterIcon";
import GridIcon from "../components/icons/gridIcon";

function employee() {
  return (
    <div>
      <div id="heading">
        <div
          id="employee-head"
          className="flex space-x-20 justify-between max-w-1280px mx-auto py-2 px-4 bg-red-50 border-solid border-y-2 border-black-500"
        >
          <div>
            <h3 className="font-bold my-3">Employee</h3>
          </div>
          <div className="hidden md:inline-flex space-x-10 ">
            <h3 className="my-3">Search</h3>

            <FilterIcon />
            <GridIcon />
            <button className="border-2 px-4 py-0.4 hover:border-t-4 rounded-2xl">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default employee;
