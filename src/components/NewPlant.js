import React from "react";
import ReusableForm from "./ReusableForm";

function NewPlant(props) {
  function handleSubmission(event) {
    event.preventDefault();
    props.onNewPlantCreation({
      plantName: event.target.plantName.value,
      yellowAlertAt: event.target.yellowAlertAt.value,
      redAlertAt: event.target.redAlertAt.value,
      species: event.target.species.value,
      birthDate: event.target.birthDate.value,
      notes: event.target.notes.value
    })
  }
  return(
    <>
      <hr/>
      <p class="compBound">NewPlant Start</p>
      <ReusableForm />
      <p class="compBound">NewPlant End</p>
      <hr/>
    </>
  );
}

export default NewPlant;