# What is TypeScript?
	=> TypeScript is a superset of JavaScript created by Microsoft.
	=> Include static strict typing in variable 
	=> Add Interfaces, enums, tuples, generics
	=> Based on .NET

# Benefit of TypeScript
    => Compiles to JS
    => Familiar to OOP
    => Support Mordern JS Features.

## Install TypeScript 

Run this command in terminal: 
```js
    npm install -g node
    npm install -g typesript    
```

## Convert first ts file to js

Run this command in terminal: 
```
 tsc script.ts
```
It will create a `script.js` in the same file location. 

*** If you get an error like `tsc.ps1 cannot be loaded because running scripts is disabled on this system.`  while converting the file 

The Run Windows PowerShell as Administrator and run

```
    Set-ExecutionPolicy RemoteSigned 
```

## Configure a TypeScript File

Run this command in terminal: 
```
  tsc --init
```
It will create a `tsconfig.json` file. In this file you will find all the configuration for  typescript file. 

### Some Common Configuration 

"rootDir": `This is the root directory location for our ts file. We can change this as we want.`

"outDir": `This is the outout dir, where the converted js file will be saved.`

### Enable Watch Mode

```
   tsc -w
```
It will automatically convert a ts file to js when we save a ts file.  