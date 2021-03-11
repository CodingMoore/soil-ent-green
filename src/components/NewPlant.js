import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";

function NewPlant(props) {
  const firestore = useFirestore();
  async function addPlantToFirebase(event) {
    event.preventDefault();
    props.onNewPlantCreation();
    const userEmail = props.auth.currentUser.email;
  
    return firestore.collection("plants").add(
      
        {
          user: userEmail,
          plantName: event.target.plantName.value,
          species: event.target.species.value,
          notes: event.target.notes.value,
          yellowAlertAt: event.target.yellowAlertAt.value,
          redAlertAt: event.target.redAlertAt.value,
          hardwareCode: event.target.hardwareCode.value
        }
      
    );
  }
  /*
  return firestore.collection("plants").add(  
    {
      [userEmail]: {
        userPlants: [{
          plantName: event.target.plantName.value,
          species: event.target.species.value,
          notes: event.target.notes.value,
          yellowAlertAt: event.target.yellowAlertAt.value,
          redAlertAt: event.target.redAlertAt.value,
          hardwareCode: event.target.hardwareCode.value
        }]
      }
    }
    );
  */
  
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

NewPlant.propTypes = {
  onNewPlantCreation: PropTypes.func
};

export default NewPlant;