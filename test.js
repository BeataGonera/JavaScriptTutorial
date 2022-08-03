var newCar = new Object;
newCar.speed = 50;
newCar.driver = "Beata";

newCar.drive = function()
{
    console.log("now driving");
};

newCar.drive();

var newCar2 = {speed: 40, driver:"John", drive: function(){console.log("now driving really fast");}};

newCar2.drive();