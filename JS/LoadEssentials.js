if(document.body.contains(document.getElementById("footer"))){
document.getElementById("footer").innerHTML =
    "<link rel='stylesheet' href='/CSS/Footer.css'>"+
    "<ul><li><a href='/HTML/Dashboard.html''><img src='/Images/icons8-home-page-100.png' class=''></a></li><li><a href='/HTML/Leaderboard.html'><img src='/Images/icons8-trophy-96.png' class=''></a>"+
    "</li><li><a href='/HTML/Profile.html'><img src='/Images/icons8-user-100.png' class=''></a></li><li>"+
    "<a href='/HTML/Teams.html'><img src='/Images/icons8-people-80.png' class=''></a></li></ul>";
}

if(document.body.contains(document.getElementById("doggoContainer"))){
    console.log("contains");
    document.getElementById("doggoContainer").innerHTML =
    "<canvas class='webgl' width='100%' height='100%' style='width: 100%; height: 100%;'></canvas></div>";
}
