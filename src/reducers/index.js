import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  firebase: firestoreReducer
});

export default rootReducer;

