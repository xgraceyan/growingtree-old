import { Redirect } from "react-router-dom";

export const logIn = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const logInWithGoogle = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    var provider = new firebase.auth.GoogleAuthProvider();
    var firestore = getFirestore();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (creds) {
        var token = creds.credential.accessToken;
        var user = creds.user;
        var fullName = creds.user.displayName.split(" ");
        console.log(creds);

        const usersRef = firestore.collection("users").doc(creds.user.uid);
        usersRef.get().then((docSnapshot) => {
          if (docSnapshot.exists) {
            dispatch({ type: "LOGIN_GOOGLE_SUCCESS" });
          } else {
            firestore.collection("users").doc(creds.user.uid).set({
              firstName: fullName[0],
              lastName: fullName[1],
              userName: creds.user.email,
            });
          }
        });
      })
      .catch(function (err) {
        var errCode = err.code;
        var errMessage = err.message;
        var email = err.email;
        var credential = err.credential;
        dispatch({ type: "LOGIN_GOOGLE_ERROR", err });
      });
  };
};

export const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGOUT_ERROR", err });
      });
  };
};

export const signUp = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((response) => {
        return firestore
          .collection("users")
          .doc(response.user.uid)
          .set({
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
          })
          .then(() => {
            dispatch({ type: "SIGNUP_SUCCESS" });
          })
          .catch((err) => {
            dispatch({ type: "SIGNUP_ERROR", err });
          });
      });
  };
};
