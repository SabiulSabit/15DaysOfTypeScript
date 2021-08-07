
// this function will recive two number as argument
// and then return a number
const add = (a: number, b: number): number => {
    return a + b;
}


// return void type
const sub = (a: number, b: number) => {
    console.log(a - b);
}


// by using function keyword
function mul(a: number, b: number): number {
    return a * b;
}

function div(a: number, b: number) {
    console.log(a / b);
}


//return void
function test(a: number, b: number): void {
    console.log(a / b);
    // return null;        // valid
    // return undefined;   // valid
}
