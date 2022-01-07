const firebaseConfig = {
    apiKey: "AIzaSyD-hhTQ990iDiB2baGkR_ScaCv-0oRCGT4",
    authDomain: "project-93-50f68.firebaseapp.com",
    databaseURL: "https://project-93-50f68-default-rtdb.firebaseio.com",
    projectId: "project-93-50f68",
    storageBucket: "project-93-50f68.appspot.com",
    messagingSenderId: "122636403305",
    appId: "1:122636403305:web:f676db23e631b7955318f8",
    measurementId: "G-72QTHXSH4S"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
