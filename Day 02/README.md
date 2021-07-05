# Can't assign different type of value in one variable:

```typescript
     let userName = "Sabit"; //initialize with a string value 
     
     userName = "Sabiul"; // valid ts code
     
     userName = 22; // this will give an error 
                    // userName variable is a string type varibale
                    // we can't assign integer to it. 
```
* If we didn't assign the value on declaration then this issue will not appear. 


# Set function petameter data type: 

```typescript
  function addNum(a: number, b: number){ // this function only receive 
      return a + b;                      // number as argument 
  }
    
 addNum(1,2);   // valid
 addNum('1',2); // error
```

# Handle Array:

```typescript
     let arr = ['a', 'b', 'c']; // string type array can't push diffrent
                                // data type value here.
                               
     let arr = []; // undefined array, we can push any data here.
     
     let arr = ['a', 'b', 1]; // Not a fixed data type array.
                              // (string | number) type
                              // we can push string or number here.
          
```

# Handle Object:

```typescript
    let user  = {     // this will be a fixed object 
      name: "Sabit",  
      age: 22,
    }
     
    user.name = "sabiul"; // valid ts
    user.name = 123; // will give an error | wrong data type
    
    user.admin = true; // will give an error
                       // can't add new property to this object 
```

# Explicit Types: 

```typescript
  let a: string; // variable a will only allow us to string value. 
 
  let a: number; // variable a will only allow us to number value.
  
  let arr: string[] = [] ; // string array 
  
  let arr: number[] = [] ; // number array 
  
  let obj: object; //object type variable - accept any key and value
                   // will accept array, coz array is one type of object
  
  // another way - fixed key
  let obj: {
    name: string,
    age: number
  }
  
```

# Union type: 

```typescript
    let a: string | number; //variable a will only allow us to string 
                            // or number value. 
                            
    let arr: (string | number)[] = []; //number or string - both valid
```