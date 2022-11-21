if (document.body.contains(document.getElementById("doggoContainer"))) {
    console.log("contains");
    document.getElementById("doggoContainer").innerHTML =
        "<canvas class='webgl' width='100%' height='100%' style='width: 100%; height: 100%;'></canvas></div>";
}
if (document.body.contains(document.getElementById("footer"))) {
    document.getElementById("footer").innerHTML =
        "<link rel='stylesheet' href='/CSS/Footer.css'>" +
        "<ul><li><a href='/HTML/Dashboard.html''><img src='/Images/icons8-home-page-100.png' class=''></a></li><li><a href='/HTML/Leaderboard.html'><img src='/Images/icons8-trophy-96.png' class=''></a>" +
        "</li><li><a href='/HTML/Profile.html'><img src='/Images/icons8-user-100.png' class=''></a></li><li>" +
        "<a href='/HTML/Teams.html'><img src='/Images/icons8-people-80.png' class=''></a></li></ul>";
}
if (document.body.contains(document.getElementById("waveWrapper"))) {
    document.getElementById("waveWrapper").innerHTML =
        "<svg class='waves' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 24 150 28' preserveAspectRatio='none' shape-rendering='auto'>" +
        "<defs>" +
        "<path id='gentle-wave'" +
        "d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' />" +
        "</defs>" +
        "<g class='parallax'>" +
        "<use xlink:href='#gentle-wave' x='48' y='0' fill='rgba(255,255,255,0.7' />" +
        "<use xlink:href='#gentle-wave' x='48' y='3' fill='rgba(255,255,255,0.5)' />" +
        "<use xlink:href='#gentle-wave' x='48' y='5' fill='rgba(255,255,255,0.3)' />" +
        "<use xlink:href='#gentle-wave' x='48' y='7' fill='#fff' />" +
        "</g>" +
        "</svg>"


}