import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return(
    <>
      <hr/>
      <p class="compBound">ReusableForm Start</p>
      <form onSubmit={props.formSubmissionHandler}>
        <label for="plantName">Name: </label> 
        <input
        type = "text"
        name = "plantName" />
        <br/>
        <label for="plantName">Yellow Alert Level: </label> 
        <input
        type = "text"
        name = "yellowAlertAt" />
        <br/>
        <label for="plantName">Red Alert Level: </label> 
        <input
        type = "text"
        name = "redAlertAt" />
        <br/>
        <label for="plantName">Species: </label> 
        <input
        type = "text"
        name = "species" />
        <br/>
        <label for="plantName">Birth Date: </label> 
        <input
        type = "text"
        name = "birthDate" />
        <br/>
        <label for="plantName">Notes: </label> 
        <input
        type = "text"
        name = "notes" />
        <br/>
        <button type="submit">{props.buttonText}</button>
      </form>
      <p class="compBound">ReusableForm End</p>
      <hr/>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;