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
