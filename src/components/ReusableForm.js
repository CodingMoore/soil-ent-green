import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return(
    <>
      <hr/>
      <p class="compBound">ReusableForm Start</p>
      <form onSubmit={props.formSubmissionHandler}>
        <input
        type = "text"
        name = "plantName" />
        <br/>
        <input
        type = "text"
        name = "yellowAlertAt" />
        <br/>
        <input
        type = "text"
        name = "redAlertAt" />
        <br/>
        <input
        type = "text"
        name = "species" />
        <br/>
        <input
        type = "text"
        name = "birthDate" />
        <br/>
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