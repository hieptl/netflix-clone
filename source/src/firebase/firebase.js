/**
 * Github: https://github.com/hieptl/netflix-clone.
 * Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
 */
// import firebase.
import firebase from "firebase";
// initialize firebase app in the application.
const app = firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: `${process.env.REACT_APP_FIREBASE_DATABASE_URL}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`
});
// create firebase database.
const firebaseDatabase = app.database();
// create firebase auth.
const firebaseAuth = app.auth();
// export firebase database and firebase auth for later use.
export { firebaseDatabase, firebaseAuth };
