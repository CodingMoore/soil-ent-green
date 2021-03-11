import React from "react";
import PlantList from "./PlantList";
import PlantDetails from "./PlantDetails";
import NewPlant from "./NewPlant";
import EditPlant from "./EditPlant";
import PlantGraph from "./PlantGraph";
import { firebaseConnect, withFirestore, isLoaded } from "react-redux-firebase";
// import { connect } from "react-redux";
import db from "../firebase";



class PlantControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPlant: { //null when selected plant isn't automatically shown.
        name: "Placeholder",
        species: "Placeholder",
        notes: "Placeholder",
        yellowAlertAt: "Placeholder",
        redAlertAt: "Placeholder",
        machineCode: "Placeholder"
      }

    }
  }

  //second argument in setState is to deal with Async nature of setState.
  handleChangingSelectedPlant = (id) => {
    const newSelectedPlant = firebaseConnect.database().ref().on("");
    this.setState({selectedPlant: newSelectedPlant}, () => {
      console.log(this.state.selectedPlant);
    });

    
  }

  // handleAddingNewPlantToList = () => {
  //   const { dispatch } = this.props;
  //   //TBD
  // }

  render() {
    // const auth = this.props.firebase.auth();
    const auth = db.auth();
    if (!isLoaded(auth)) {
      return (
        <>
          <h1>Loading...</h1>
        </>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <>
          <h1>You must be signed in to access your plants.</h1>
        </>
      )
    }
    if((isLoaded(auth)) && (auth.currentUser != null)) {
      return (
        <>
          <hr/>
          <p className="compBound">PlantControl Start</p>
            {/* <PlantList auth = { this.props.firebase.auth() }
            onPlantSelection = { this.handleChangingSelectedPlant }/> */}
            <PlantDetails />
            {/* <NewPlant 
            
            auth={auth}
            onNewPlantCreation = { this.handleAddingNewPlantToList }/> */}
            <PlantGraph />
            <EditPlant />
          <p className="compBound">PlantControl End</p>
          <hr/>
        </>
      );
    }
  }

}

// {/* auth = { this.props.firebase.auth() } */}

// const mapStateToProps = state => {
//   return {
    
//   }
// }

// PlantControl = connect(mapStateToProps)(PlantControl);

// export default withFirestore(PlantControl);

export default PlantControl;