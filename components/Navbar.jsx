import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex text-light-grey font-semibold text-xl justify-between items-center sticky top-0 px-4 py-2 my-4">
      <div>
        <Link href="/">App_name</Link>
      </div>

      <div className="flex">
        <div className="mx-2">
          <Link href="/employee">Employee</Link>
        </div>
        <div className="mx-2">
          <Link href={"/task"}>Task</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
