import React from "react";
import Plant from "./Plant";
import PlantStatus from "./PlantStatus";
import firebase from "../firebase";


class PlantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayList: [{
        plantName: "No Plant"
      }]
    }
  }

  // const plant = document.getElementById('object');
  componentDidMount() { 
  const db = firebase.database();
  const ref = db.ref("plants").child("userName1");

  ref.on("value", function(snapshot) {
    console.log(snapshot.val());  
  }, 
  
  function (errorObject) {
    console.log("The read failed: " + errorObject.code)
  });
  console.log(this.state.displayList);
  };
  

  render() {
    if (this.state.displayList === null) {
      return <Plant plantName = {"You have not added a plant."}/>
    }else {
      return (
        <>
          <hr/>
          <p class="compBound">PlantList Start</p>
          {this.state.displayList.map((plant) =>
            <Plant 
            // whenPlantClicked = { props.onPlantSelection }
            plantName = { "Name: " + plant.plantName }
            species = { "Species: " + plant.species }
            id = { plant.id }
            key = { plant.id }/>
          )}
          <PlantStatus />
          <p class="compBound">PlantList End</p>
          <hr/>
        </>
      );
    }
  }
}

export default PlantList; 