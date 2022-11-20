import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, updatePassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getDatabase, ref, set, push, child, get, onValue } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(); // Initialize Firebase Authentication and get a reference to the service
const db = getDatabase(); // Initialize Firebase Database and get a reference to the service

const testDbBtn = document.getElementById("testDbBtn");
testDbBtn.addEventListener("click", (e) => {
    e.preventDefault();
    fetchBannedUrls();
})




function fetchBannedUrls() {
    const dbRef = ref(db);
    get(child(dbRef, `/doggo/bannedUrls`)).then((snapshot) => {
        if (snapshot.exists()) {
            var data = snapshot.val();
            for (let i in data) {
                alert(data[i]);
            }
        } else {
            alert("No data available");
        }
    }).catch((error) => {
        alert(error);
    });
}