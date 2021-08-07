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


//destructuring the data
const { age }: { age: number } = profile;

// multiple data  destructuring
const { username, roll }: { username: string, roll: number } = profile;


//get nested object
const { coords:
    { lat, lng }
}: {
    coords:
    { lat: number; lng: number }
} = profile;
