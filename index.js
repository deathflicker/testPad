var splashTime = Math.floor((Math.random() * 5000) + 1000);
var splash = document.getElementById("splash");
var LoSi = document.getElementById("LoSi");

setTimeout(hideSplash, splashTime);

function hideSplash(){
 splash.style.display = "none";
 LoSi.style.display = "flex";   
}