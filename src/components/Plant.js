import React from "react";
import PropTypes from "prop-types";

function Plant(props) {

  return (
    <>
      <hr/>
      <p class="compBound">Plant Start</p>
      <div onClick = {() => props.whenPlantClicked(props.id)}>
        <h3>{props.plantName}</h3>
        <h4>{props.yellowAlertAt}</h4>
        <h4>{props.redAlertAt}</h4>
        <h4>{props.species}</h4>
        <h4>{props.birthDate}</h4>
        <h4>{props.notes}</h4>
      </div>
      <p class="compBound">Plant End</p>
      <hr/>
    </>
  );
}

Plant.propTypes = {
  plantName: PropTypes.string.isRequired,
  yellowAlertAt: PropTypes.string,
  redAlertAt: PropTypes.string,
  species: PropTypes.string,
  birthDate: PropTypes.string,
  notes: PropTypes.string,
}

export default Plant;