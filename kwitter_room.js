
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD-htEciNmzVRfMzmvkkw1ZgZvGbGneWMI",
  authDomain: "kwitter-89380.firebaseapp.com",
  databaseURL: "https://kwitter-89380-default-rtdb.firebaseio.com",
  projectId: "kwitter-89380",
  storageBucket: "kwitter-89380.appspot.com",
  messagingSenderId: "456052967876",
  appId: "1:456052967876:web:8a7b7b47aee81199933c91"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="welcome "+user_name

function addroom(){      
Room_name=document.getElementById("room_name").value
firebase.database().ref("/").child(Room_name).update({
purpose:"adding roomname"
});
localStorage.setItem("Room_name",Room_name)
window.location="kwitter_page.html"
}
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
 { console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; }
 function logout() { localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location = "index.html"; }