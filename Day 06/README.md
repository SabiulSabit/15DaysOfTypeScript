#  Generics:

```typescript
// this function recive a number then return it. 
function fn(n: number): number {  
  return n;
}
 
// we can make this generic by make the type `any`

function fn(n: any): any {  
  return n;
}

// but here we have some problem in this way
// we lost the data type here 
// If we passed in a number, the only information we have is that any type could be returned.

// to solve this we have `Generics` in TS
// this function will also accept any type data
// then return the exact data type value. 
function fn<Type>(n: Type): Type {
  return n;
}

```
** We can do many things using this Generic option, Follow this link for more: [Official Doc: Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)



# Tuples:

> Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same.

```typescript
  
  // Declare a tuple type
  let x: [string, number]; // order is fixed and size is also fixed
  
  // Initialize it
  x = ["hello", 10]; // valid
  x = [10, "hello"]; // invalid
  
```


# Enum: 

> Enums allow a developer to define a set of named constants.

```typescript
enum Direction {  // defult value start from  0 
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right, // 3
}

// we can use it like this
Direction.Up // it will return 0

//we can set any value if we don't want to use defult one
enum Direction {
  Up = "A",
  Down = "B",
  Left = "C",
  Right = "D",
}

```




