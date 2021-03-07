import React from "react";
import Plant from "./Plant";
import PlantStatus from "./PlantStatus";
import PlantDetails from "./PlantDetails";

function PlantList() {

  return (
    <>
      <hr/>
      <p class="compBound">PlantList Start</p>
      <Plant />
      <PlantStatus />
      <PlantDetails />
      <p class="compBound">PlantList End</p>
      <hr/>
    </>
  );
}

export default PlantList; 