import React from "react";
import ReusableForm from "./ReusableForm";
import { useFirebase } from "react-redux-firebase";
import { useState } from "react";
import firebase from "../firebase";

const db = firebase.database();

function NewPlant() {
  function addPlantToFirebase(event) {
    event.preventDefault();
    const plantRef = db.ref("plants");
    const newPlantRef = plantRef.push();
    newPlantRef.set(
      {
        plantName: event.target.plantName.value,
        yellowAlertAt: event.target.yellowAlertAt.value,
        redAlertAt: event.target.redAlertAt.value,
        species: event.target.species.value,
        birthDate: event.target.birthDate.value,
        notes: event.target.notes.value
      }
    );
  }
  
  return(
    <>
      <hr/>
      <p class="compBound">NewPlant Start</p>
      <ReusableForm 
      formSubmissionHandler = { addPlantToFirebase }
      buttonText = "Add New Plant"/>
      <p class="compBound">NewPlant End</p>
      <hr/>
    </>
  );
}

export default NewPlant;