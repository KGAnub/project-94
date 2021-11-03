
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCbxMScbcq3wA98g_5IeYrZqpGo2hmrH-M",
      authDomain: "kwitter-project-d4623.firebaseapp.com",
      databaseURL: "https://kwitter-project-d4623-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-d4623",
      storageBucket: "kwitter-project-d4623.appspot.com",
      messagingSenderId: "687408579680",
      appId: "1:687408579680:web:35672f0d10a9a9fa15ef05"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room"
      });
  }
