import React from "react";

const Statusbar = ({ num }) => {
  if (num == 1) {
    return (
      <div className="bg-lighter-grey flex flex-row rounded-3xl w-10 h-3">
        <div className="bg-blue-500 w-1/3"></div>
        <div className="bg-lighter-grey w-1/3"></div>
        <div className="bg-lighter-grey w-1/3"></div>
      </div>
    );
  }
  if (num == 2) {
    return (
      <div className="bg-lighter-grey flex flex-row rounded-3xl w-10 h-3">
        <div className="bg-yellow-500 w-1/3"></div>
        <div className="bg-yellow-500 w-1/3"></div>
        <div className="bg-lighter-grey w-1/3"></div>
      </div>
    );
  }
  if (num == 3) {
    return (
      <div className="bg-lighter-grey flex flex-row rounded-3xl w-10 h-3">
        <div className="bg-green-500 w-1/3"></div>
        <div className="bg-green-500 w-1/3"></div>
        <div className="bg-green-500 w-1/3"></div>
      </div>
    );
  }
};

export default Statusbar;
