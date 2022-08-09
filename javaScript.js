var content = document.getElementById("content");
var clickHere = document.getElementById("click-here");

clickHere.onclick = function(){

    if(content.className == "open"){
        content.className = "";
        clickHere.innerHTML = "Show more";
    } else {
    content.className = "open";
    clickHere.innerHTML = "Show less";

};
}
