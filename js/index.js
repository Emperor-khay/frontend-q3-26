
// Characteristics of programming languages:
// 1. variables: memory locations for storing data
// let
// var
// const
// automatic

// 	Declarative variable operator data
// 	statement    name	=
name = 'Andrew';
age = 50

// 2. Data Types
// String: "", ''
text = 'John said "dfkfg"';

// Number: 

// Boolean: true/false

// null: empty data

// undefined: data that doesn't exist

// Array: []	0     1  2    3       4
const cars = ["Saab", 2, 4, "Volvo", "BMW"];

// Object: {}
// key:value pairs or key:function pairs
// {
// 	key:value;
// 	key:function;
// }

function printDisplayMessage() {
    text = 'Laptop display works'
    console.log(text);
    // return text;
}


const Laptop = {
    company:"HP",
    model: "latitude 5480",
    colour: "silver",
    storage: 512,
    diskType: "SSD",
    ports: ["USB2", "HDMI", "USBC", "VGA", "thunderbolt", "microphone", "SDCard", "SIMSlot", "CD ROM"],
    keyboardLight: true,
    fingerprintScanner: false,
    webcam: true,

    display: function () {
    text = 'Laptop display works'
    console.log(text);
    // return text;
}

}


// Object.poperty

Laptop.display();
console.log(Laptop.model);



// 3. functions: ()

function greet(title, name){
   console.log("Good Morning "+ title + " " + name);
//    return;
}
// console.log(result);
greet("Mr","Andrew");
greet("Mrs", "Joy");



// parameters: variables defined while creating a function

// Argument: value of a parameter

// *Concatenation: joining strings together

// functionName()

// 4. Operators:
    // a. Arithemetic operators
    // b. Logical operators e.g AND, NOT, OR
    // c. Comparison Operators e.g <,>,<=,>=,!=,==,===
    // d. Assignment Operators e.g =, +=, -=
    
    // = for assignment
    // == comparison with string conversion
    // === comparison without string conversion

  
// 5. Conditional Statements
// declarative  condition expression 
// statement

// if (condition){
//     expression
// }

// a. single condition
// b. multi condition
// c. conditions with logical operators

let num = -2
if(num > 0 || num == 5){
    console.log(true);
// }else if(){

}
else{
    console.log(false);
}

// 6. Loops
// a. For loops
// for (startingPoint, endPoint, degreeChange){
//     expression
// }

// for(i = 0; i < 10; i++){
//     console.log(i);
// }

// b. dowhile loop

// let i = 0;
// do{
//     console.log(i);
//     i++;
// }
// while(i < 10);

// c. while loop
// let i = 0;
// while(i < 10) {
//     console.log(i);
//     i++;
// }