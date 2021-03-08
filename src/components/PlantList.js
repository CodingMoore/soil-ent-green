import React from "react";
import Plant from "./Plant";
import PlantStatus from "./PlantStatus";

const masterPlantList = [
  {
    plantName: "Kiki",
    yellowAlertAt: "50",
    redAlertAt: "25",
    species: "Pathos",
    birthDate: "03-01-2021",
    notes: "Hangs by main livingroom window."
  },
  {
    plantName: "Alijandro",
    yellowAlertAt: "30",
    redAlertAt: "10",
    species: "Fish-Tail Palm",
    birthDate: "01-10-2021",
    notes: "In the large blue pot by the stairs."
  }
]


function PlantList() {
  return (
    <>
      <hr/>
      <p class="compBound">PlantList Start</p>
      {masterPlantList.map((plant, index) =>
      <Plant 
      // whenPlantClicked = { props.onPlantSelection }
      plantName = {"Name: " + plant.plantName}
      yellowAlertAt = {"Yellow Alert Level: " + plant.yellowAlertAt}
      redAlertAt = {"Red Alert Level: " + plant.redAlertAt}
      species = {"Species: " + plant.species}
      birthDate = {"Birth Date: " + plant.birthDate}
      notes = {"Notes: " + plant.notes}
      // id = {plant.id}
      key = {index}/>
      )}
      <PlantStatus />
      <p class="compBound">PlantList End</p>
      <hr/>
    </>
  );
}

export default PlantList; 