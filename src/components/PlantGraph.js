import React from "react";
import CanvasJSReact from "./../canvasjs.react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { withFirestore, useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase"; 
import firebase from "../firebase";


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



class PlantGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    soilData: null,
    moisture: null
    }
  }

  // useFirestoreConnect([
  //   { collection: "hardware" }
  // ]);

  // const moistureData = useSelector(state => state.firestore.ordered.hardware);
  getSoilData = (data) => {
    const db = firebase.firestore();
    db.collection("hardware").get(data).then((doc) => {
       if(doc.exists){
         console.log("document data", doc.data());
        } else {
          console.log("idk");
        }
    
    // db.collection("hardware").get({
    //   moisture: data.moisture
    // });
  })
}
  

  // getSoilData = () => {
  //   this.props.firestore.collection.get({collection: "hardware"}).then(data) => {
  //     const newSoilData = {
  //       moisture: data.get("moisture")
  //     }
  //     console.log(newSoilData);
  //     console.log(doc);
  //     this.setState({soilData: newSoilData});
  //   };
  // }


  render() {
    console.log(this.getSoilData());
    this.getSoilData();

    
    // console.log(this.props.moistureData);

    const options = {
      animationEnabled: true,
      title:{
        test:"Soil Moisture Percentage"
      },
      axisY:{
        title: "Moisture Content"
      },  
        toolTip: {
          shared: true
        },
      data: [{
        type: "spline",
        name: "Your Plant",
        showInLegend: true,
        dataPoints: this.props.moistureData
      }]
    }
    
    if (!isLoaded || !this.props.moistureData) {
      return <>Loading...</>
    } else { 
      
      return (
        <>
        <hr/>
        <p class="compBound">PlantGraph Start</p>
          <CanvasJSChart optons={options} />
        <p class="compBound">PlantGraph End</p>
        <hr/>
        </>
      );
    }
  }

}
  

const mapStateToProps = state => {
  return {
    soilData: state.soilData
  }
}

PlantGraph = connect(mapStateToProps)(PlantGraph)

export default withFirestore(PlantGraph);