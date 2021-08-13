//create a class
class Vehicle {
    drive(): void {
        console.log("Hello from Drive");

    }
}


//inheritance
class Car extends Vehicle {

    //override
    drive(): void {
        console.log("Hello from Car Drive");

    }
}


//class instance create
const vehicle = new Vehicle();

//use class propery
vehicle.drive();

//use car class
const abc = new Car();
abc.drive();

