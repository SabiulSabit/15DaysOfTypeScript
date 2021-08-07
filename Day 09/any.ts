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