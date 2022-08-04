var myDate = new Date();

console.log(myDate);

var myPastDate = new Date(1990, 5, 18);
var myFutureDate = new Date(2037, 4, 13);

console.log("Today is:" + myDate);
console.log("Some time ago was:" + myPastDate);
console.log("One day will be" + myFutureDate);

var myBirthday = new Date (1990, 5, 18, 13, 54, 54);
var myBirthday2 = new Date (1990, 5, 18, 13, 54, 54);

if(myBirthday == myBirthday2){ /*.getTime wyrównuje urodziny*/

    console.log("birthdays are equal");
}else{

    console.log("birthdays are not equal");


};

