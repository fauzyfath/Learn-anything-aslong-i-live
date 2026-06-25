# what is the purpoose of functions, and how do they work?
functions are reusable pieces of code that perform a specific task or calculate a value. think of functions as a machines that takes some input, does some operations on it, and then produces an output. here is an example of declaring a function:

ex. function greet(){
        console.log("hello, jessica!");
    }

in this example, we have declared a function called greet. inside that function, we have a console.log that logs the message "hello, jessica!". if we tried to run this code, we would not see the message appear in the console. this because we need to call the function.

a function call, or invocation, is when we actually use or execute the function. to call a function will need to reference the function name followed by a set of parentheses:

ex. function greet(){
        console.log("hello, jessica!");
    }
    greet();        //hello, jessica

parameters act as placholders for the values that will passed to the function when it is called. they allow functions to accept input and work with that input. arguments are the actual values passed to the function when it is called. here is an updated version of the greet function that uses parameters and arguments:

ex. function greet(name){
        console.log("hello, " + name + "!");
    }

    greet("alice");      //hello, alice!;
    greet("ethan");      //hello, ethan!;

the name serves as the parameter while the strings alice and ethan server as the arguments. now we have a reasable function that can be used dozens of times throughout our code with different arguments.

whena a function finishes its execution, it will always return a value. by default the return value will be undefined. here is an example:

ex. function doSomething(){
        console.log("Doing something...");
    }
    let result = doSomething();
    console.log(result);        //undefined

if you need your function return a specific value, then you will need to use the return statement. here is an example of using a return statement to return the sum of two value:

ex. function calculationSum(num1, num2){
        return sum1+sum2;
    }

    console.log(calculationSum(3,4));       //7

in this example, we have a const variable called sum and we are assigning it an anonymous function that returns the sum of num1 and num2. we are then able to call sum and pass in the numbers 3 and 3 to get the result of 7

function support default parameters, allowing you to set defaul values for parameters. these default values are used if the function is called without an argument for that parameter:

ex. function greetings(name = "guest"){
        console.log("hello, "+name+"!");
    }
    greetings();        //hello, guest!
    greetings("anna");  //hello, anna!

in this example, if no argument is provided for name it defaults to guest

# what are arrows functions, and how do they work?
in the previous lesson, you learned how to work with functions, which are reuasble pieces of code that help make your code more modular, easier to maintain, and more efficient. all previous example used the regular function syntax, like this:

ex. function greetings(name){
        console.log("hello, "+name+"!");
    }

but another way to write functions in javascript is to create an arrow function expression. here is how you can refactor the previous example to use arrow function syntax instead:

ex. const greetings = (name) =>{
        console.log("hello, " + name + "!");
    }

in this revised example, we are creating a const variable called greetings and assinged it an anonymous function. most of the syntax wil look familiar to you except for the missing function keywordd and the addition of the arrow (=>) between the name parameter and the function body. if your parameter list only has one parameter in it, then you can remove parenthesses like this:

ex. const greetings = name => {
        console.log("hello, " + name + "!");
    }

if your arrow function has no parameters, the you must use the parentheses like this:

ex. const greetings = () => {
        console.log("hello");  
    }

when first learning about functions, you had to wrap the function body in curly braces. but if your function body only contains a single line of code, you can remove the curly braces like this:

ex. const greetings = name => console.log("hello, " + name + "!");

it is important to note that removing the parentheses and curly braces for regular function syntax will not work. you will get errors if you tried to do something like this:

ex. function greetings name console.log("hello, " + name + "!");    //this will produce syntax errors

these type of one line functions only work if your are using the arrow function syntax. another key concept is the return statement. here is an exaxmple of using the arrow function syntax to calculate the area:

ex. const calculateArea = (width, height) => {
        const area = width * height;
        return area;
    }

    console.log(calculateArea(5,4));    //20

we are creating a variable inside the function called area and then returning that variable. but we could clean up our code a bit and return the calculation itself:

ex. const calculateArea = (width,height) => {
        return area = width * height;
    }

    console.log(calculateArea(2,6));        //12

if you tried to remove the curly braces and place the calculation on the same line, then you would get an uncaught syntaxError: unexpeted token 'return' message:

ex. const calculateArea = (width, height) => return width * height;

the reason why you are getting this error, is because you need to remove the return statement. when you remove the return statement, the error will disappear and the function will still implicityly return the calculation.

ex. const calculateArea = (width, height) => width*height;

so when should you use the arrow function syntax? well, it depends. many developer use it constantly in their personal projects. however, when working on a team, the choice usually depends on wheter the existing codebase use regular functions or arrow function. in future lessons, we'll cover when to use arrow function and when yo avoid them.

# what is scope in programming, and how does global, local, and block scope work?
scope in programming refers to the visibility and accessbility of variables in different parts of the code. it determines where variables can be accessed or modified. understanding scope is crucial for writing clean, efficient, and bug-free code. there are three main types of scope: global, local and block scope.

global scope is the outermost scope in program. variables declared in the global scope are accesible from anywhere in your code, including within functions and blocks. these variables are often called global variables. while global variables can be convenient, they should be used spraingly as they can lead to naming conflicts and make your code harder to maintain. here's an example:

ex. let globalVar = "I'am a global variables"

    functions printGlobalVar(){
        console.log(globalVar);
    }

    printGlobalVar();

in this example, globalVar is declared in the global scope and can be accessed inside the printGlobalVar function.

local scope, on the other hand, refers to variables that are only accessible within a function. here's an example:

ex. function greet(){
        let message = "hello, local scope!";
        console.log(message)
    }
    greet();                //"hello local scope"
    console.log(message);   //this will throw error syntax error 

the message is a local variable within the greet function. it can be used inside the function, but trying to access outside the function will result in  an error.

Block scope, is a concept introduced with the let and cosnt keywords in ES6. a block is any code section within curly braces, {}, such as in if statement, for loops, or while loops.

variables decalred with let or const inside a block are only accessible within the block. here's an example:

ex. if (true){
        let blockVar = "this is blockVar";
        console.log(blockVar);      /"this is blockvar"
    }
    console.log(blockVar);  //this will throws an error

block var is only accesible withih the if block. trying to access it outside the block will result in an error. understanding these different types of scope is essential for managing variable accesibility and avoiding unintended side effects in your code. 

global variables should be used sparingly, as they can lead to naming conflicts and make your code harder to maintain. local variables help to keep different parts of your code isolated, whihc is especially useful in larger programs. block scoping wiht let and const provides even finer control over variable accessiblity, helping to prevent errors and make your code more predictable. masteing these basic concepts of global, local, and block scope will provide a solid foundation for understanding more advance topics.

