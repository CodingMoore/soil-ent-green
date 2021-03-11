import React from "react";
import ReusableForm from "./ReusableForm";

function EditPlant() {
  
  return (
    <>
      <hr/>
      <p className="compBound">EditPlant Start</p>
      <ReusableForm 
      buttonText = "Edit Plant"/>
      <p className="compBound">EditPlant End</p>
      <hr/>
    </>
  )
}

export default EditPlant;