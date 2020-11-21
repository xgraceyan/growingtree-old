import authReducer from "../reducers/authReducer";
import classReducer from "../reducers/classReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  class: classReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
