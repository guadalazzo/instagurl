import firebase from "firebase";
import { USER_STATE_CHANGE } from "../constants/index";
/**
 * Function that triggers database actions.
 */
export function fetchUser() {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          /**
           * update the state of the currentUser variable
           */
          dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() });
        } else {
          console.log("snapshot doesn't exist");
        }
      });
  };
}
