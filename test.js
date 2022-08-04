var Car = function (maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed,time){
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("The driver's name is:" + driver);
    };
}  

var newCar1 = new Car(70,"Beata");
var newCar2 = new Car(30,"Jan");
var newCar3 = new Car(7,"Zosia");
var newCar4 = new Car(1,"Grzesio");

newCar1.drive(10,2);
newCar3.logDriver();

