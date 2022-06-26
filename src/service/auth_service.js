import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(provierName) {
    const authProvidder = new firebase.auth[`${provierName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvidder);
  }

  logout() {
    firebase.auth().signOut();
  }

  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
