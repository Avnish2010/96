//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name")
    function send(){
      msg=document.getElementById("msg").value
{      firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value=""
}    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
