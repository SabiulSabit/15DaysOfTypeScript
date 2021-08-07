//create a profile object
const profile = {
    name: "Sabit",
    age: 20,
    cords: {
        lat: 0,
        lng: 15,
    },
    setAge(age: number): void {
        this.age = age;
    }
}