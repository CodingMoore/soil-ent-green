import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import plantListReducer from "./plant-list-reducer";

const rootReducer = combineReducers({
  firestore: firestoreReducer
});

export default rootReducer;

