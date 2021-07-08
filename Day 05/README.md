#  Access Modifiers:

```typescript
   class User{
     private name: string,  // this is a private property   
     age: number            // this is a public property
     readonly role: string  // set this data using constructor
     ...
     ...
   }
   
   let u = new User(.....);
   
   u.name // this will show an error coz name is a private data, we can't access it from outside
   
   u.age // this is valid coz its a public data.
   
   u.role // we can read data using this but can't update
   
   
```


# Module System: (Not Supported in Older Browser)

** Change the  "target" value `es5` to `es6` in tsconfig.json file.
** To use in browser side  Change the  "module" value `commonjs` to `es2015` in tsconfig.json file. 
  Then link the js file as `type="module"`
  ```html
    <script type="module" path="fileLocation"></script>
  ```


### Export file: 
 File Name: `test.ts`
```typescript
   export class User{
     name: string,   
     age: number           
     role: string
     ...
     ...
   }
```

### Import file:

File Name: `use.ts`
```typescript
   
   import { User } from './test.js'  // same folder loaction 
                                     // we have to import the .js file
    
  //now we can use this User class in this file. 
  
```

# Interfaces: 

```typescript
interface User { // create a interface 
  name: string;
  age: number
}

function fn(data: User) { // use the interface like this
  ...
  ...
}

fn({name: "Sabit", age: 15}); // pass parametar like this

```

