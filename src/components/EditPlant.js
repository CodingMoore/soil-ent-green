import React from "react";
import ReusableForm from "./ReusableForm";

function EditPlant() {
  
  return (
    <>
      <hr/>
      <p class="compBound">EditPlant Start</p>
      <ReusableForm 
      buttonText = "Edit Plant"/>
      <p class="compBound">EditPlant End</p>
      <hr/>
    </>
  )
}

export default EditPlant;