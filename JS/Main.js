// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//     apiKey: "AIzaSyDqsFlsWEmB_Gs6zW60CPJvfRaI12nWKLM",
//     authDomain: "doggo-v1.firebaseapp.com",
//     projectId: "doggo-v1",
//     storageBucket: "doggo-v1.appspot.com",
//     messagingSenderId: "686895259242",
//     appId: "1:686895259242:web:ab10716f058dcaebd0f413",
//     measurementId: "G-MH1K6RHX18"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseConfig = {
    apiKey: "AIzaSyDqsFlsWEmB_Gs6zW60CPJvfRaI12nWKLM",
    authDomain: "doggo-v1.firebaseapp.com",
    databaseURL: "https://doggo-v1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "doggo-v1",
    storageBucket: "doggo-v1.appspot.com",
    messagingSenderId: "686895259242",
    appId: "1:686895259242:web:ab10716f058dcaebd0f413",
    measurementId: "G-MH1K6RHX18"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

function register() {
    alert("here");
    nickname = document.getElementById("nickname").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(function() {

            var user = auth.currentUser // declare user variable
            var database_ref = database.ref() //add user to firebase database
            var user_data = {
                nickname: nickname,
                email: email,
                password: password,
                last_login: Date.now()
            }
            database_ref.child('users/' + user.uid).set(user_data); //add user to firebase database
            alert("User created");
        })
        .catch(function(error) {
            var error_code = error.code;
            var error_message = error.message;
            alert(error_message);
        })
}

// submit.addEventListener('click', (e) => {
//     alert("Hello");

// });