# Data Types 
-string: sequence of characters or text, enclosed in quoutes
-boolean: represent one of two value -> true or false. so basically it checked state of the values of the statement wether or not its true or false
-undefined: a variable has been declared but hasn't given a value yet
-null: a variable intentionally set to "nothing"
-bigInt: values represent integer values which are too high to be repressent bye number primitive
    by adding n the end of the number, you can create bigInt data types
    -> 1234567890123456789012345678901234567890n;
Object: a collection of key-value pairs = 
    -> {
        name: "alice",
        age: 30
    }
symbol: special type of value that is always unique and cannot be change. its often to create unique labels or idenfiers for properties =
    ->  symbol('mySymbol')

    in this example below, two symbol are created but with same description but they are not the same
    -> const cyrpticKey1 = symbol("saltNpepper");
       const cyrpticKey2 = symbol("saltNpepper");
        console.log(crypticKey1 === crypticKey2);  //false

# variables
variable is a containers that hold a data you can aceess and modify
-let: coould be used for declare variables and updated/reassigned the valued anytime
        
let value could be change like this
-> let age = 1;
   age = 2;          //valid

best practice naming variable
-> variables needed to be started with letter, underscore(_), or dollar sign($), its bad with number
    ex. let age;            //valid variables
        let _score;
        let $total;

        let 1stplace;        //invalid variable name

   variables are case-sensitive, meaning where the both variable have the same name, but the case are different the variable are different
    ex. let age = 2;
        let Age = 4;

        console.log(age);    //2
        console.log(age);    //4

    if name variable name are two words variable,always do camelCase variable naming convention, it applied with also in function 
    ex. let thisIsNameCasingVariable;

    always avoid special character when naming the variable like (!) or (@) ect

-const: ideal for values that you don't wanted to change accidntlly during execution
    ex. 
    ```
        const maxScore = 100;
        console.log(maxScore);  //100
        maxScore = 200;
        console.log(maxScore); //Error as const variables cannot be updated
    ```
        declared are not suitbale for values that are changeable for example PI or max_size

you can initialize the variables name first and without needed to add a value
-> ex. 
```
let age;
console.log(age) //undefiend
age = 25;
console.log(age) //25
```

but when const are be defined, you cannot initialized the const without any values
-> ex. const age;   //Error: missing initialized in const declaration

should use let when want to declare variables when the values still arguable or on future declares

should use const when the values is unchangeable or remain constant

there is also var variables, but it's not recommended anymore. the var is kind of like let, except it has a wider scope, which is more likely could cause problems in program

# String concantenation in JavaScript
String  concantenation are needed to join multiple text pieces together into single string of text
ex. operator is (+, +=, concant() )

- (+) opearator in string: combine multiple string into one with variable that hold the text
```
    let firstName = "John";
    let lastName = "Doe";

    let fullName = firstName + " " + lastName;
    console.log(fullName); //John Doe

    if no space " " it wil be this

    let firstName = "John";
    let lastName = "Doe";

    let fullName = firstName + lastName;
    console.log(fullName); //JohnDoe
```
  (+=) operator in string: use this when need to add or append to an existing string, helpful when build upon string by adding more text
```
    let greeting = "hello";
    console.log(greeting);      //hello

    greeting += ", john!";
    console.log(greeting);      //hello, John"
```
  (concat()) function:  is a function that concatenate multiple string without needed to use an operator  
```
    let str1 = "hello";
    let str2 = "world";

    let result = str1.concat(" ", str2);
    console.log(result);                //hello world
```
# console.log()
console.log() is used to display ouput to the browser. used for debugging and inspect code while working the program

use console.log() to log result on the conosle ensure code running 

ex. of use
->
```
    console.log("hello world); //hello world
    
    let num = 5;
    console.log(num);  //5

    let name = "fath";
    console.log("hello i am" +name); //hello i am fath

    let name = "fath";
    let age = 24;

    console.log("name: ",name," ,age:", age);       //name:fath ,age:24
```

# variable data types in javascript
javascript is dynamically typed language meaning you don't need to specify the data types of variable when declaring it. the types is determine based on the value it assigned to the variable
but it may caused bugs since it dynamially it making it unsafe for prolong programming. 
ex. let data = 100      //initially a number
    data  = "new data"  //dynamicaly change to string
this changes are not allowed as the data type would be fixed
but since javascript is dynamically programming language it allowed the change. this may caused issue on the prolong run if there is more strict rules of data are needed to have

type of operator in javascript is a simple yet powerful tool that help you determined the data type based on the value. it will return a string of the data types

ex. 
```
    let num = 23;
    console.log(typeof num); //number

    let isUserLoggedIn = true;
    console.log(typeof isUserLoggedIn); //boolean
```
using typeof help you for debugging process for trying to understand the data type of the variable

however, when it comes to null, the data types will be returning a "object" as the variable are not assigned any value

ex. let example = null;
    console.log(typeof example); // "object"

this widely considered a bug in javascript dating back to its early days. the reason it return object because null are specified as a special type of object, leading to this unexpeted result

# variable name conventions
- variable name should be descriptive and meaningful
- variable name should be camelCase like cityName, isLoggedIn and veryBigNumber
-variable names should no start with number, if it needed number they must begin with letter, _, $
- variable names should not contain spaces or special characters except for _ and $
- variable names should not be reserverd keywords
- variable names are case-Sensitive. age and Age are different variables

# bracket notation
in javascript, string are treated as sequence of characters, each character in string can be accessed using bracket notation. this allow to retrieve a specific character from string based position, which is called index

an index is a position of character within string, and it zero-based. it means it start from 0,1,2,3 
ex. hello -> h,e,l,l,o -> 0,1,2,3,4

bracket notation "[]" and inside the bracket are the index of character you want to access.
ex. let greeting = "hello";
    console.log(greeting[3]); // "e"

to get the last character of a string, you could use "length" property of a string tellss you how many characters it containts. so to access the last character, you would substract of from the length:
ex. let greetingt = "hello";
    console.log(greeting[greeting.length - 1]); //0
in this case length of hello is 5 words, and the last character (o) is at index 4 which is 5 -1;

lenght return the length of the word without following the index rules so if the length of the words is 5 then its 5

if you want to get mutliple characters, you can do this:
ex. let greeting = "hello";
    let firstTwo = greeting[0] + greeting[1]; //"he"
    console.log(firsTwo); //"he"

bracket notation is useful when yu need to access a specific characters in string, such as extracting initials from a name or checking a specific letter for validation

