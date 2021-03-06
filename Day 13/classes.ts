//create a class
class Vehicle {

    private userName: string;

    //use constructor
    constructor(name: string) {
        this.userName = name;
        console.log(`Hello ${this.userName}`);
    }

    drive(): void {
        console.log("Hello from Drive");
    }

    //use access modifiers
    //this private method can only be used from inside of this class
    private play(): void {
        console.log("This is a private method");
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
const vehicle = new Vehicle("sabit");

//use class propery
vehicle.drive();

// this is not valid
// vehicle.play();

//use car class
const abc = new Car("sabit");
abc.drive();

