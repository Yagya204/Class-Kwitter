
 var firebaseConfig = {
  apiKey: "AIzaSyAVtL1mErFOm8bmYCXPw2qmoN6Wigj4MQ8",
  authDomain: "kwitter-37085.firebaseapp.com",
  databaseURL: "https://kwitter-37085-default-rtdb.firebaseio.com",
  projectId: "kwitter-37085",
  storageBucket: "kwitter-37085.appspot.com",
  messagingSenderId: "240137955845",
  appId: "1:240137955845:web:171e53c223c8c566b5ca6c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);

  window.location= "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name'id="+Room_names+"onclick='redirectotRoonName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectotRoonName(name) {
  console.log(name);
  LocalStorage.setItem("room_name", name)
  window.location = "kwitter_page.html"
}