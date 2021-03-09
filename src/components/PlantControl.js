import React from "react";
import PlantList from "./PlantList";
import PlantDetails from "./PlantDetails";
import NewPlant from "./NewPlant";
import EditPlant from "./EditPlant";
import { firebaseConnect } from "react-redux-firebase";

class PlantControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPlant: { //null when selected plant isn't automatically shown.
        name: "Placeholder",
        species: "Placeholder",
        notes: "nPlaceholder",
        yellowAlertAt: "Placeholder",
        redAlertAt: "Placeholder",
        machineCode: "Placeholder"
      }

    }
  }

  handleChangingSelectedPlant = (id) => {
    const newSelectedPlant = firebaseConnect.database().ref().on("");
    this.setState({selectedPlant: newSelectedPlant});

    console.log(this.state.selectedPlant);
  }

  handleAddingNewPlantToList = () => {
    const { dispatch } = this.props;
    //TBD
  }

  render() {
    return (
      <>
        <hr/>
        <p class="compBound">PlantControl Start</p>
          <PlantList 
          onPlantSelection = { this.handleChangingSelectedPlant }/>
          <PlantDetails />
          <NewPlant onNewPlantCreation = { this.handleAddingNewPlantToList }/>
          <EditPlant />
        <p class="compBound">PlantControl End</p>
        <hr/>
      </>
    );
  }

}



export default PlantControl;