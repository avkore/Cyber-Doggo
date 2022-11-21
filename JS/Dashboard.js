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



// document.addEventListener("mousemove", rotateDoggo)
//     .then(() => { alert("Doggo is ready to play!") });

// document.addEventListener("click", (e) => {

//     })
// const testDbBtn = document.getElementById("testDbBtn");
// testDbBtn.addEventListener("click", (e) => {
//     e.preventDefault();

// })

// function rotateDoggo(e) {
//     var cube = document.getElementById("doggoContainer");
//     var x = e.clientX - window.innerWidth / 2;
//     var y = e.clientY - window.innerHeight / 2;
//     var q = 0.15;
//     var i;

//     x = x * q * 1.25;
//     y = y * q * 1.25;
//     for (i = 0; i < cube.length; i++) {
//         cube[i].style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
//     }
// }
// LETS TRY THREE JS 
const canvas = document.querySelector('canvas.webgl');

const PI = Math.PI;

const scene = new THREE.Scene();

// INSTANTIATE LOADER
const loader = new THREE.GLTFLoader();

const modelGroup = new THREE.Group();

// LOAD GLTF MODEL
loader.load(
    '/Images/3d/wolf-correct-color.glb',
    function(gltf) {

        modelGroup.add(gltf.scene);
        scene.add(modelGroup);

    },
    // IN PROGRESS
    function(xhr) {

        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    },
    // ERROR
    function(error) {

        console.log('An error happened');

    }
);

// WINDOW SIZE OBJECT
const sizes = {
    width: window.innerWidth / 2.5,
    height: window.innerHeight / 2.5
};

// INSTANTIATE CAMERA
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 23;
scene.add(camera);

// LIGHTING
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
directionalLight.position.x = 20;
directionalLight.position.z = 10;
scene.add(directionalLight);

// WINDOW RESIZE HANDLER
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth / 2.5;
    sizes.height = window.innerHeight / 2.5;

    camera.aspect = (sizes.width / sizes.height);
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
});

// MOUSEMOVE ANIMATION
window.addEventListener('mousemove', (event) => {
    modelGroup.rotation.y = (event.clientX / window.innerWidth) - 0.5;
    modelGroup.rotation.x = (event.clientY / window.innerHeight) - 0.5;

    modelGroup.position.x = ((event.clientX / window.innerWidth) - 0.5) * 15;
    modelGroup.position.y = ((event.clientY / window.innerHeight) - 0.5) * -15;
});

// INSTANTIATE RENDERER
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
renderer.setClearColor(0x000000, 0);

// ANIMATION LOOP
const tick = () => {
    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
};
tick();