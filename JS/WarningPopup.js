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
var blockedUrl;


const continueBtn = document.getElementById("continueBtn");
continueBtn.addEventListener("click", (e) => {
    e.preventDefault();
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        blockedUrl = tabs[0].url;
        blockedUrl = blockedUrl.split("?")[1];
        blockedUrl = blockedUrl.split("://")[1];
        blockedUrl = blockedUrl.split("/")[0];
    });
    // chrome.tabs.update({ url: blockedUrl });
})

const reportBtn = document.getElementById("reportBtn");
reportBtn.addEventListener("click", (e) => {
    e.preventDefault();
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        blockedUrl = tabs[0].url;
        blockedUrl = blockedUrl.split("?")[1];
        blockedUrl = blockedUrl.split("://")[1];
        blockedUrl = blockedUrl.split("/")[0];
    });
    ReportWebsite(blockedUrl).then(alert("Reported! Page will now close.")).then(window.close());
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
















// var deniedUrl = window.location.href.split("?")[1];
// var virustotalLinkTemplate = "https://www.virustotal.com/ui/search?limit=20&relationships%5Bcomment%5D=author%2Citem&query=";

// alert("NOT ALLOWED: " + deniedUrl)

// scan url should be: virustotalLinkTemplate + deniedUrl

//This aint working with mode: 'no-cors' because important headers get blocked, like x-tool :(
// put your value in 'x-vt-anti-abuse-header'

// fetch("https://www.virustotal.com/ui/search?limit=20&relationships%5Bcomment%5D=author%2Citem&query=http%3A%2F%2Ffacebook.com", {
//     headers: {
//         'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
//         'x-app-version': 'v1x134x1',
//         'x-tool': 'vt-ui-main',
//         'x-vt-anti-abuse-header': '',
//         'accept-ianguage': 'en-US,en;q=0.9,es;q=0.8'
//     }
// }).then(function (response) {
//     return response.json();
// }).then(function (data) {
//     console.log(data);
// }).catch(function () {
//     console.log("Booo");
// });