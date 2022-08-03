var newCar = new Object;
newCar.speed = 50;
newCar.driver = "Beata";

newCar.drive = function()
{
    console.log("now driving");
};

newCar.drive();

var newCar2 = {
    speed: 40,
    driver:"John",
    drive: function(speed, time){
        console.log(speed * time);}, 
    test: function(){
        console.log(this);
    }, 
    logDriver: function(){
        console.log("The driver's name is:" + this.driver);
    }

};

newCar2.drive(50, 2);
newCar2.test();
newCar2.logDriver();