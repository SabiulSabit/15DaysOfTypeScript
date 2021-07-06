# Dynamic / Any Type:

```typescript
     let userName; //support any type value
      // or
     let userName: any; //this is also any type   
     
     //array
     let userName: any[] = [];
     
     //object
     let user: {
       name: any,
       age: any
     }
     
```
* Not the best feature to use. 


# Function: 

```typescript
     
     let fn: Function;  // function type variable 
     
     // then we can implement it like this
     fn =  ( ) =>{
       
     }
   
```

### Parameters in function: 

```typescript
  let user = (a: string, b: number) => {  // set parameters type
     
  }
  
  user("A", 1);  // valid
  user(1,2);    // invalid
  
  //set optional parameters
  let user = (a: string, b?: number) => {  // b is optional
     
  }
  
  user("a");    // valid
  user("a", 1); // valid
  
  //set defult value
  let user = (a: string, b: number = 1) => { // defult value of b is 1
     
  }
  
  user("a");    // valid
  user("a", 5); // valid
  
```

### Return in function 

```typescript
  let user = (a: string, b: number) : string => {  // set return type
      return a + b;   // return type string
  }
  
  //defult
  let user = (a: string, b: number) => {  
      return a + b;   // return type string
  }
  
  //defult
  let user = (a: number, b: number) => {  
      return a + b;   // return type number
  }
```