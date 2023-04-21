import React from "react";

function Result() {
  return (
    <div className="shadow-xl mt-5 p-2">
      <h2 className="text-4xl text-center">City Name</h2>
      <div className=" text-2xl flex justify-around mt-3">
        <div>Max Temp:48 deg</div>
        <div>Min Temp:20 deg</div>
      </div>
      <div className="flex justify-around mt-3 text-2xl">
        <div>Icon</div>
        <div>Weather Type</div>
      </div>
    </div>
  );
}

export default Result;
