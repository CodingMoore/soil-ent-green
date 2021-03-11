import React from "react";
import PropTypes from "prop-types";
import Plant from "./Plant";
import PlantStatus from "./PlantStatus";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase"; 

function PlantList (props) {
  const userEmail = props.auth.currentUser.email;
  useFirestoreConnect([
    { collection: "plants" }
  ]);
  const plants = useSelector(state => state.firestore.ordered.plants);
  // console.log(plants);
  

  // function filter(arg) {
  //   for (let i=0; i<Object.keys(arg).length; i++) {

  //   }
  // }
  // const filteredPlants = filter(plants);

  if (isLoaded(plants)) {
    return (
      <>
        <hr/>
        {plants.map((plant) => {
          // const plantData = Object.keys(plant)
          // console.log(plantData);
          return <Plant 
          whenPlantClicked = { props.onPlantSelection }
          plantName = { "Name: " + plant.plantName }
          species = { "Species: " + plant.species }
          id = { plant.id }
          key = { plant.id }/>
          })
        }
        <PlantStatus />
      </>
    );
  } else {
    return (
      <>
        <h3>Loading...</h3>
      </>
    )
  }
}

PlantList.propTypes = {
  onPlantSelection: PropTypes.func
};

export default PlantList; 