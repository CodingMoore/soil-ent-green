import React from "react";
import PlantList from "./PlantList";
import PlantDetails from "./PlantDetails";
import NewPlant from "./NewPlant";
import EditPlant from "./EditPlant";

class PlantControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <>
        <hr/>
        <p class="compBound">PlantControl Start</p>
          <PlantList />
          <PlantDetails />
          <NewPlant />
          <EditPlant />
        <p class="compBound">PlantControl End</p>
        <hr/>
      </>
    );
  }

}



export default PlantControl;