import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, set, child, push, update } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import { getAuth, onAuthStateChanged, } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

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
const db = getDatabase();
const auth = getAuth();

//  Copy link to input field
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    document.getElementById("reportUrl").value = tabs[0].url;
});


const reportBtn = document.getElementById("reportBtn");
reportBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const reportUrl = document.getElementById("reportUrl").value;
    ReportWebsite(reportUrl);

})

function ReportWebsite(repUrl) {
    const user = auth.currentUser;
    const postData = {
        url: repUrl,
        approved: false
    };

    const newPostKey = push(child(ref(db), 'reportedUrls')).key;
    const updates = {};
    updates["doggo/users/" + user.uid + "/reports/" + newPostKey] = postData;

    return update(ref(db), updates);
}