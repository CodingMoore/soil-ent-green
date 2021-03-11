import React from "react";
import CanvasJSReact from "./../canvasjs.react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { withFirestore, useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase"; 
import firebase, {db} from "../firebase";



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

  componentDidMount() {
    // this.waitTimeUpdateTimer = setInterval(() =>
    //   this.updateTicketElapsedWaitTime(),
    // 60000
    // );
    this.getSoilData();
  }

  // useFirestoreConnect([
  //   { collection: "hardware" }
  // ]);

  // const moistureData = useSelector(state => state.firestore.ordered.hardware);
  // getSoilData = (data) => {
  //   const db = firebase.firestore();
  //   db.collection("hardware").get(data).then((doc) => {
  //     console.log("document data", doc.data());
  //      if(doc.exists){
  //       } else {
  //         console.log("idk");
  //       }
    
    // db.collection("hardware").get({
    //   moisture: data.moisture
    // });
//   })
// }
  
    // syntax 1
    // firebase.firestore.collection('hardware').get().then(...)

    // syntax 2
    // firebase.firestore.get({collection: 'hardware'}).then(...)

  getSoilData = () => {
    console.log("firebase", firebase);
    db.collection("hardware")
    .get()
    .then(
      // (querySnapshot) => {
      // querySnapshot.forEach((doc) => {
      //   console.log(doc.id, " => ", doc.data());
      // })
      querySnapshot => { // query snapshot
        const result = querySnapshot.docs.map(doc => { // queryDocumentSnapshot
          return {...doc.data(), id: doc.id}
        })

      // const newSoilData = {
      //   moisture: data.get("moisture")
      // }
      // console.log(newSoilData);
      // // console.log(doc);
      this.setState({soilData: result});
      return result;
    });
  }


  render() {
    // console.log(this.getSoilData());
    // this.getSoilData();
    console.log("SOIL DATA!!!!", this.state.soilData);
    
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
        dataPoints: this.state.soilData
      }]
    }
    
    if (!isLoaded || !this.state.soilData) {
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
  

// const mapStateToProps = state => {
//   return {
//     soilData: state.soilData
//   }
// }

// PlantGraph = connect(mapStateToProps)(PlantGraph)

// export default withFirestore(PlantGraph);

export default PlantGraph;