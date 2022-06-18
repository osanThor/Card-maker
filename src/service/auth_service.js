import firebase from "firebase";

class AuthService {
  login(provierName) {
    const authProvider = new firebase.auth[`${provierName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
