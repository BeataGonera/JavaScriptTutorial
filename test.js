function getAverage (a,b) {
    var average = (a+b)/2;
    console.log(average);
    return average;
}

var myResult = getAverage(7,12);
function logResult(){
    console.log("My result is " + myResult);
}

logResult();