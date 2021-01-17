function Log_Out(){
    window.location = "Login.html";
}

var UserName_1 = localStorage.getItem("User_1");

document.getElementById("UserName_Display").innerHTML = "Welcome " + UserName_1;
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBJBDhoV-eBulRyZ552vayxsSF0ouwvpSA",
    authDomain: "c94-project-student.firebaseapp.com",
    databaseURL: "https://c94-project-student-default-rtdb.firebaseio.com",
    projectId: "c94-project-student",
    storageBucket: "c94-project-student.appspot.com",
    messagingSenderId: "646954476168",
    appId: "1:646954476168:web:7b6cd60770caff1890f53d"
  };
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
function AddRoom(){
    Add_User = document.getElementById("Input_Room_Name").value;
    console.log(Add_User);
    firebase.database().ref("/").child(Add_User).update({
        Purpose: "Comment"
    });
    document.getElementById("Room_Names").innerHTML = Add_User;
}