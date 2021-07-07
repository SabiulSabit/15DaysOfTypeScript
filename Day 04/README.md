#  Type Aliases:

A type alias is a name for any type. The syntax for a type alias is:

```typescript
  type myType = {  // creating my own type
    name: string,
    age: number
  }
  
  let fn = (user: myType) =>{ 
   
  }
  
  fn({name:"Sabit",age: 1}) // call the function
   
```

# Function Signatures: 

```typescript
  let fn: () => void;  // describe the function
                       // it means fn is a function who return nothing
  //Example 
  let add: (a: number, b: number) => number    
  //add recive two number as parameter and return a number
  // when we implement the add function then we have to use this singature to implement it
  
  add = (x: number, y: number)=> {  // have to recive two number
    return x + y;  // have to return a number
  }                
                         
```

# Class in TS:

```typescript
  class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world"); // valid
let greeters: Greeter[] =  []; //valid

```
