// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDeltXOsq-fT0JL5DTqeEoyyqA65teXk20",
  authDomain: "giridhari-1.firebaseapp.com",
  databaseURL: "https://giridhari-1.firebaseio.com",
  projectId: "giridhari-1",
  storageBucket: "giridhari-1.appspot.com",
  messagingSenderId: "410937798845",
  appId: "1:410937798845:web:8af69292a14ad2a57ec7d4",
  measurementId: "G-KYXM3FFBBR"
};

firebase.initializeApp(firebaseConfig);
console.log("firebase ", firebase);
const db = firebase.firestore();
console.log("db ", db); 
 
var database = firebase.database();
console.log("database ", database);