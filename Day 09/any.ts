//any type
const json =  '{"x": 10, "y": 10}';
const cord =  JSON.parse(json); // this is an any type data
// this will all time return any type data 

//this is a valid syntax 
cord.hello = "sdf";


// Fix this problem

const json_1 =  '{"x": 10, "y": 10}';
const cord_1: {x: number; y: number} =  JSON.parse(json_1);

//invalid
//cord_1.hello= "sdf";

//decleare 1st then initilaze it
let new_var: boolean;  // or let new_var: fasle; 

for(let i=0; i<3; i++){
    if(i === 2){
        new_var =  true;
    }
}


//vraible whose type cannot be inferred correctly
let number: boolean | string = false; // initialy this is a boolean value

for(let i=0; i<3; i++){
    if(i === 2){
        number =  "True Value" // now this is string
    }
}

