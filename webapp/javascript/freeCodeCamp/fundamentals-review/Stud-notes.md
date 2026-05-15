# What is string object, and how does it differ from string primitive?
in previous modules, you have been used to working with strings literals like this:

ex. const greeting = "hello, world";

but javascript also has string objects. both string object and string primitives are used to handle text but they function differently under the hood. a string object is string created using the string constructor function, which wraps the primitive value in an object. here is how you would create a string object.

ex. const greetingObject = new String("hello,world");
    console.log(typeof greetingObject);     // object;

when we use the typeof operator we can see that the result is of type object instead of type string. one of the things that you might have been wondering about is how you can use properties like the .length property on string primitive.

when you use the length property on a sring primitive, javascript temporarly wraps the string primitive in a strings object, to perform the operations. this is why you can use the length property and the different methods like repeat(), concat(), and slice(). these types of methods and properties are referred to as instance methods, instance properties, and static methods. you will learn about how that works in detail in the future.

one key difference between a string object and a string primitive is how it relates to memory and peformance. string primitive are usually more memory efficient and faster compared to string object. although you will primarily work with string primitive in your code, it's still useful to understand how string objects works.

# what is the toString() method and how does it works?
the toString() method is a fundamental feature in javascript that converts a value to itsstring representation. it's a method you can use for number, booleans, arrays, and objects. one of the most common uses of toString() is to convert a number to it's string representation. here's an example:

ex. const num = 10;
    console.log(num.toString());        //"10"

this method accepts an optional radix which number from 2 to 36. this radix represents the base, such as base 2 for binary or base 8 for octal. if the radix is not specified it defaults to base 10, which is decimal. here's an example of passing 2 as an argument to the toString() method:

ex. const num = 10;
    console.log(num.toString(2));       //"1010"

the result will be 1010 which is the binary representation for the decimal number 10.

you can also use the toString() method to convert arrays and objects to strings. arrays have a custom implementation of toString() that converts each element to a string and joins them wiht commas. here's an example:

ex. const arr = [1,2,3];
    console.log(arr.toString());        //"1,2,3,"

in this example all the elements of the array are joined together to form the string 1,2,3

when toString() method is used with objects, the result will not be a stringified version of the object properties.

ex. const person = {
        name: "john",
        age: 30,
        isStudent: true
    }
    console.log(person.toString());     //"[object Object]"

in this example, the result will be the default string representation for the object which is [object Object]. to get a stringified version of the person object properties you'll need to use JSON.stringify() which you will learn about more in the future.

# what is the number constructor, and how does it work for type coercion?
the Number() constructor is used to create a number object. the number object contains a few helpful properties and methods like the isNaN and the toFixed method. here's an example using the Number() constructor with the new keyword:

ex. const myNum = new Number("24");
    console.log(typeof myNum);  //object

in this example we pass in a string literal to the Number() constructor and the return type is of type object instead of a string.

when the Number() constructor is called as a function without the new keyword, the the return value will be primitive number type. most of the time you will be using the Number() constructor to convert other data types to the number data type. here's an example of converting a string to a number

ex. const myNum = Number("100");
    console.log(myNum);     //100
    
    console.log(typeof myNum);      //number

this is helpful when you are getting input from the user and you need to convert that string input to a number so you can perform mathematical calculation.

if you try to call the Number() constructor thorugh an empty string then the result will be number 0:

ex. const myNum = Number("");
    console.log(myNum);     //0

this is because javascript will try to parse the string and since it doesn't contain any digits, the result will be zero.

if you try to pass in a string with random characters then the result will be NaN or "Not a number"

ex. const num = Number("random");  
    console.log(num);       //NaN

when working with booleans, true returns 1 and false returns 0.

ex. const boolTrue = number(true);
    const boolFalse = number(false);
    
    console.log(boolTrue);       //1
    console.log(boolFalse);      //0

if you pass in null, the result will be 0 and if you pass undefined the result will be NaN.

ex. const undefinedNum = Number(undefined);
    const nullNum= Number(null);

    console.log(undefinedNum);  //NaN
    console.log(nullNum);       //0

when working with arrays there are a few things to consider.

an empty array will return 0. an array with a single number will return that number. an array with multiple number return NaN. and an array with String(s) will also return NaN

ex. const emptyArr = Number([]);
    const arrOneNum = Number ([5]);
    const arrMultiNum = Number([1,5,3]);
    const arrStr = Number(["str1"]);
    const multiArrStr = Number(["str1", "str3"]);

    console.log(emptyArr);          //0
    console.log(arrOneNum);         //5
    console.log(arrMultiNum);       //NaN
    console.log(arrStr);            //NaN
    console.log(multiArrStr);       //NaN

when working with objects the result is always NaN:

ex. const obj1 = Number({});
    const obj2 = Number ({5: 5});
    const obj3 = Number({key: "str1"});
    const obj4 = Number({key: true});

    console.log(obj1);       //NaN
    console.log(obj2);       //NaN
    console.log(obj3);       //NaN
    console.log(obj4);       //NaN

# what are some common practices for naming variable and functons?
naming variable and functions is an important aspect of writing clean, readable and maintainable code. good naming practices makes your code self-documenting reducing the need for extensive comments and making it esier for other developers including your future self to understand you code.

let's start with general naming convention in javascript. in previous lesson you learned about using camel case for variable names. for boolean variables, it's a common practive to use prefixes such as is, has, or can. this immedietly tells the reader that the variable is a boolean:

ex. let isLoading = true;
    let hasPremission = false;
    let canEdit = true;

for function the name should clearly indicate what the function does. it's often helful to start with a verb:

ex. function getUserData(){
        <!--  -->
    }
    function calculateTotal(){
        <!--  -->
    }
    function validateInput(){
        <!--  -->
    }

for function that return a boolean often called predicates, you can use the same is, has or can prefixes:

ex. function isValidEmail(email){
        <!--  -->
    }

    function hasRequiredField(form){
        <!--  -->
    }

when you have function that retrieve data it's common to start with the word get:

ex. function getProductDetail(productID){
        <!--  -->
    }
    function getEmailUser(userId){
        <!--  -->
    }

when you have function that set data it's common to start with the word set:

ex. function setUserPreferences(preferences){
        <!--  -->
    }
    function setPageTitle(title){
        <!--  -->
    }

for event handler functions, you might prefix with handle or suffic with handler:

ex. function handleClicl(){
        <!--  -->
    }
    function onSubmit(){
        <!--  -->
    }
    function KeyPressHandler(){
        <!--  -->
    }

an event handler is an action that happens after an event has happened like a button click. you will learn about that in future lesson.

when naming iterator variables and loops, it's common to use single letters like i,j, or k, but nested loops or more complex iterations more descriptive names can be helpful:

ex. for(let i = 0; i<array.length; i++>){
        <!--  -->
    }
    for(let studentIndex = 0; studentIndex < student.length; studentIndex++ ){
        <!--  -->
    }

for array names consider using plural nouns to indicate that the varaible contains multiple items:

ex. const colors = ["white", "red", "black"];
    cosnt userNmaes = ["john123", "davidCOksr", "iridileLocis"];

remember the goal is to make your code as self explanetory as possible. a good rule of thumb is that if you need to add a comment to explain what a variable or function does, you might want to consider renaming it to something more descriptive.

lastly, be consistent with you codebase or team. if your team has established naming conventions, stick to them consistency makes the code more readable and maintainable for everyone involved.

# how do you get the length for an array, and how can you create an empty array of fixed length?
in prior lessons you were first introduced to the length property, this property returns the number of elements in an array. so here is quick reminder on how it works:

ex. const frutis = ["apple", "grape", "rape"];
    console.length(fruits);         //3

it's possible to have arrays with empty slots. empty slots are defined as slots with nothing in them. this is different than an array with the value of undefined. these types of arrays are known as sparse arrays. here is an example:

ex. const spareseArray = [1, , ,4];
    console.log(sparseArray.length);        //4

in this case even though we only have two defined elements, 1 and 4, the length is 4 because the highest index (3) plus 1 gives us a length of 4

now let's disscuss how to create an empty array of fixed length. there are few ways to do this in javascript but one common method is to use the Array() constructor with a numeric argument. the Array() constructor can be used with the new keyword to create a new array:

ex. const emptyArray = new Array(5);
    console.log(emptyArray.length);     //5
    console.log(emptyArray);        //[ , , , , ]

in this example we create a new array using Array(5). this creates a sparse array with a length of 5 where all the slots are empty.

another way to create an empty array of fixed length is to use the Array.from() method with a length argument. unlike new Array(n), this method crate an array of specified length where all elements exist and have a value of undefined:

ex. const fixedLenghtArray = Array.from({length: 5});
    console.log(fixedLengthArray.length);       //5
    console.log(fixedLenghtArray);      //[undefined, undefined, undefined, undefined, undefined]

if you want to create an array of specific length and fill it with a default value, you can use the Array.fill() method:

ex. const filledArray = new Array(3).fill(0);
    console.log(filledArray);       //[0,0,0]

this creates an array of length three and fills all elements with the value 0. note: when filling with objects, all slots reference the same object; if you need independent copies, use a callback or Array.form() instead.

understanding how to get the length of an array and create arrays of fixed length is important for many programming tasks especially when you need to initialize arrays for specific algortihm or data structures.

# whar are linters and formatters, and how can they help you with code consistency?
in the world of software developement maintaining clean, consistent and error-free code is important. this is where linters and formatters come into play. these tools are essential for developers to ensure code quality and consistency across projects and teams.

let's start with linters. a linter is a static ode analysis tool that flags programming errors, bugs, stylistics errors, and suspicious constructs. the term lint comes from a unix utility that examines C languages sources code.

today linters exist for most programming languages including javascript. linters help in several ways. first they catch potential erros before runtime. for example a linter might flag the use of undefined variable or a function being called with the wrong number of arguments. they alsoe enforce coding standards being called with the wrong number of arguments. they alsoe enforce coding standards and best practices. this might include rules about indetation, the use of semicolons, or the maximum allowed line lenght. lastly, they help maintain consistency across a codebase especially when multiple developers are working on the same project.

a popular linter of javascript is ESLint. here is an example ESLINT might flag:

ex. function doSomething(x){
        return x+z;
    }
in this code variable z is not declared, so ESLint would flag the error z is not defined. also, the last statement is missing semicolon which ESLint might also flag in the code editor.

formatters on the other hand are tools that automatically format your code to adhere to a specific style guide. while linters can often autofix some issue, formatters are specifically desingned to rewrite your code to match a predetermined style.

formatters ensure consistent code style across an entire project or team regardless of individual developer preferences. they also save time and mental energy that would otherwise be spent on manual formatting. lastly they can make code reviews more efficient by eliminating discussions about code style.

a popular formatter for javascript is prettier. here is an example of how prettier might format code. here's before foramatting:

ex. function longFunction(
    argument1,
    argument2,
    argument3,
){return argument1 + argument2 + argument3;}

and then after the prettier formatting:

ex. function longFunction(argument1,argument2,argument3){
    return argument1+argument2+argument3;
}

both linters and formatters can be integrated into you developemnt workflow in various ways. they can be included in your blind process or added as pluggins to your text editor or IDE providing real-time feedback as you code. using linters and formatters together can significantlly improve code quality and consistency. for example, you might use ESLint to catch potential errors and enforece certain coding practices, and then use prettier to handle all formatting tasks.

many development teams set up these tools as part of their configuration often with pre-commit hooks that run the linter and formatter before allowing code to be commited. this ensure that all code in the repository meets the teams standards for quality and style.

# what is memory management, and how does it work in javascript?
memory management is an essential concept in programming, but it can be a bit confusing for beginners, let's break it down in simple terms.

when you run program, including javascript in a web browser, it needs memory to store all the information its working with. this includes variables, functions, objects, basically everything your code creates and uses. memory management is the process of controlling this memory, allocating it when needed, and freeing it up when it's no longer needed. in some programming languages, developers have to manually manage memory. they need to explicityly tell the computer when to allocate memory for new things and when to free up memory that's no longer needed. this can be powerful but also tricky as forgetting to free memory can lead to memory leaks.

javascript however uses automatic memory management. this means that javascript(more specifically the javascript engine in your web browser) takes care of memory allocating and deallocating for you. you don't have to explicityly free memory in your code. this automatic process is often called garbage collection

heres how it works in simple terms. first allocation happens when you create a variable, objects or function in you javascript code, memory is automatically allocated to store them. then you use this allocated memeory when you work with these variables, objecst or functions in your code.

the javascript engine has clever ways to figure out when something in memory is no longer needed. generally if theres is now way for your program to access or use a piece of data any more it's considered no longer needed. periodically the garbage collector runs, it finds a memory that's no longer needed and frees it up, making it available for future use. this process happens automatically which is great because it means you don't have to worry about managing memory yourself.

however, its still important to understand this concepts because you can sometimes accidentally keep references to things you don't need anymore preventing the garbage collector from freeing that memory for example:

ex. function createLargeArray(){
        let largeArray = new array(1000);
        return function(){
            console.log(largeArray.length);
        }
    }
    let printArrayLength = createLengthArray();
    printArrayLength

in this code even after createLargeArray finises running, largeArray can't be garbage collected because the returned function still has access to it. this is a closure, and while closures are useful they can sometimes lead to more memory usage than you might expect. you will learn more about closures in the future lesson.

as a beginner, you don't need to worry too much about the inricacies of memory management. javascript automatic garbage collection takes care of most things for you. however, as you advance in you javascript journey, understanding these concepts can help you write more efficient code, especially for larger applications or when working with limited resources.

remembers, good coding practices, likes avoiding global variables when possible and being mindful of what your function are closing over, can help the javascript engine manage memory more efficiently.

# what are closures, and how do they work?
closures are one of the most powerful and often misuderstood features in javascript. at its core, a closure is a function that has access to variables in its outer enclosing lexical scope, even after the outer function has returned. this might sound complex but it's a fundamental concept that enables many advanced programming patters in javascript.

to understand closures, let's start with an example:

ex. function outerFunction(x){
        let y = 10;
        function innerFunction(){
            console.log(x + y);
        }
        return innerFunction;
    }

    let closure = outerFunction(5);
    console.log(closure()); //15

in this example, outerFunction takes a parameter x and defines a local variable y. it then dfines an innerFunction that uses both x and y finally it returns innerFunction. when we call outerFunction(5) it returns innerFunction which we assign to the variable closure. when we later call closure() it still has access to x and y from outerFunction even though outerFunction has already finished executing. this is the essence of a closure.

the inner function maintains a reference to its outer lexical environment, preserving access to the variables in that environment even after the outer function has completed.

closures are particularly useful for creating private variables and functions. consider this example:

ex. function createCounter(){
        let count = 0;
        return function (){
            count++;
            return count;
        }
    }

    let counter = createCounter();
    console.log(counter());     //1
    console.log(counter());     //2

in this case, createCounter returns a function that increments and returns a count variable. the count variable is not directly accessible from outside createCounter, but the returned function(ourClosure) has access to it. each time we call counter(), it increments and returns the count.

closure can also capture multiple variables from their outer scope. for example:

ex. function multiply(x){
        return function (y){
            return x * y
        };
    }

    let double = multiply(2);
    console.log(double(5));

here the inner function captures the x parameter from multiply. when we crate double by calling multiply(2) it returns a function that always multiplies its argument by 2.

one important thing to note about closures is that they capture variables, by reference not by value. this means if the value of captured variable changes, the closure will see the new value. for example:

ex. function createIncrement(){
        let count = 0;
        return function(){
            count++;
            console.log(count);
        };
    }

    let increment  = createIncrement();
    increment(); //1
    increment(); //2

each time we call increment its working with the same count variable, not a copu of its initial value. closures are a powerful tool in javascript. as you continue to work with javascript you'll find that understanding and using closures effectively can greatly enchance you ability to write clean, efficient and powerful code.

# what is the var keyword, and why is it no longer suggested to use it?
the var keyword in javascript is one of the original ways to declare variables. it has been part of the language since its inception and for many years it remained the primary method for creating variables. however as javasript evolved and developers gained more experience with the language, certain drawbacks of using var became apparent leading to the introduction of let and const in 2015.

when you declare a variable with var, it becomes function-scoped or globally-scoped. this means that if you declare a variabale isnide a function using var it's only accesible within that function. however if you declare it outside any function, it becomes global variable accessible throughout your entire script. this behaviour can sometimes lead to unexpected results and make your code harder to understand.

a problem with var is that it allows you to redeclare the same variable multiple times without throwing an error. this can lead to accidental overwrites and make debugging more difficult.

ex. var num = 45;
    console.log(num);   //45

    //this allowed and don't throw any error
    var num = 12;
    console.log(num);   //12

the most significant issue with var is its lack of blocking scooping. variables declared with var inside a block like an if statement or for loop are still accessible outside that block.

ex. if(true){
        var num = 2;
    }
    console.log(num);   //2

this behaviour can lead to unintended variable leaks and make your code more prone to bugs. 

due to these issue, modern javascript development has largely moved away from var in favor of let and const. these keywords provide block scoping which alings more closely with how scoping works in many other programming languages.

they also don't allow redeclaration within the same scope helping to prevent accidental overrides.

while var is still part of javascript and works in all browsers, it's generally recommended to use let and const in modern javascript development. they provide clear scoping rules, help prevent common pitfalls, and make your code behaviour more predictable.

# what is hoisting?
hoisting is a behaviour in javascript that often confuses beginners, but understanding it can help you avoid subtle bugs in your code. in simple terms hoisting is javascript default behaviour of moving declarations to the top of their respective scope during the compilation phase before the code is executed.

to understanding hoisting, it's important to know that javascript runs in two phases: the compilatin phase and the execution phase. during the compilation phase, javascript engine goes through your code and sets up memory space for variables and function. this is where hoisting comes into play.

let's start with variables hoisting, when you declare a variable using the var keyword, javascript hoists the declaration to the top of its scope. however it's crucial to note that only the declaration is hoisted, not the inilialization. this means you can use a variable in your code before you have declared it, but its value will be undefined until you actually assign a value to it.

ex. console.log(x);     //undefined
    var x = 2;
    console.log(x);     //2

function hoisting works a bit differently. when you declare a function using the function declaration syntax both the function name and the function body are hoisted. this means you can call a function before you've declared it in your code. here's an example of function hoisting.

ex. sayhello();     //"hello,world"
    function sayHello(){
        console.log("hello,world");
    }

in this case, we can call sayHello() before its declaration because the entire functions is hoisted to the top of its scope.

it's important to note that hoisting works differently with let and const declaration introduced in ES6.

ex. console.log(y);     //throws a refereceError
    let y = 10;

these declarations are hoisted but they are not initialied and you can't access them before the actual declaration in your code. this is often referred to as the temporal dead zone.

understanding hoisting can helo you write cleaner, more predictable code. however, relying on hoisting can make your code harder to read and maintain. as a best practice, it's recommend to declare your variables at the top of theier scope and your functions before you use them regardless of hoisting. this make your codes behaviour more explicit and easier for others including your future self to understand.

