//array of string only
const carMakers = ["ford", "toyota", "chevy"]

const carName: string[] = []

//any type array
const arr = [];

//valid
carMakers.push('lambo')

//invalid
//carMakers.push(233);


//use map
carMakers.map((car: string): string => {
    return car;
})


//many type data in array
// this array have two type data
const diffDate = [new DataCue(), "2020-12-12"]

//declearation
const newData: (string | number)[] = [1, "3"];

