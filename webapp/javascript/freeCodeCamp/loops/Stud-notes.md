# How do loops and iteration work in javascript?
loops in programming are used to repeat a block of code multiple time.

an example of a loop would be you're designing a program that needs to print out a list of items. you could use a loop to print out each of the items in the list.

another example would be when you are designing a game and you want to move a character across the screen. you could use a loop to move the character a certain number of pixels each time the loop runs. 

in javascript there are several types of loops that you can use. in this lessom, we will cover the for loop. here is basic syntax for a for loop:

ex. for(initialization; condition; increment or decrement){
    //code block to be executed
}

the initialization statement is evaluated before each iteration of the loop. an iteration is a single pass through the loop.

if the condition is true, the code block inside the loop is executed. if the condition is false, the loop stops and you move on to the next block of code.

the last part of the loop is the increment/decrement statement. this statement is executed after each iteration of the loop. it is typically used to increment or decrement the counter variable.

ex. for(int i = 0; i<5; i++){
    console.log(i);     //1+
}

in the first part of the example above, we initialize a counter variable i to 0. it is common convertion to use i as the counter variable in a for loop.

the next part is to check if the condition. in this case, the condition is checking if i is less than 5. since i is 0, the condition is true, and the code block inside the loop is executed.

the code block inside the loop is to log the value of i to the console. the value of i is 0, so the console will show the value of 0;

the the increment statement is executed. in this case, we are incrementing i by 1. so i is now 1.

then we check if the condition again which is to check if i is less than 5. since i is now 1, the condition is still true, and the code block inside the loop is executed again.

we keep repeating this process until the condition is false. in this case, when i is 5 the condition is false, and the loop stops.

when you're working with loops you should be careful not to create a condition that is always true. if you do, the loop will run forever and your program will crash. this is known as an infinite loop.

it is possible to create nested for loops. a nested loop is when you place one loop inside of another. we will see example of when you might to do this later on.

loops can be beneficial in programming when you need to repeat a block of code a certain number of times. even though working with for loops can be tricky at firs, with practice you will get the hang of it.

# how does the for... of loop work, and when should you use it?
a for...of loop is used when you need to loop over values from an iterable. examples of iterable would be arrays, and strings.

here is the basic syntax for a for...of loop:

ex. for(variable of iterable){
    //code block to be executed
}

the variable in the example represents the current value of the iterable that is being looped over.

if you have an array of numbers, the variable would be the current number in the array. if you have a string, the variable would be the current character in the string.

let's take a look at a few examples so you can better understand how the for...of loop works.

in this first example we have an array of numbers and we want to loop over each number and log it to the console.

ex. const number = [1,2,3,4,5];
    for (const num of number){
        console.log(num); /1+
    }

we have created a variable called num that will represent the current number in the array. for iteration 1, num will be 1, for the iteration 2, num will be 2, and so on

inside the loop, we  are logging the current number to the console.

here is another example where we have a string and we want to loop over each character and log it to the console.

ex. const str = "freecodecamp"
    
    for(let char of str){
        console.log(char);      //"f" and then "r" and so on...
    }

in this example, we have created a variable called char that will represent the current character in the string.

for each iteration, the loop will log the current character to the console.

it is important to note that you can use let, or const when declaring the variable in a for...of loop.

if you're going to use const though, make sure that the value of the variable does not change inside the loop. if it does, you will get an error.

here is an example of using const that results in an error:

ex. const number = [1,2,3,4];

    for (const num of number){
        console.log(num);
        num = num +1;       //this will cause an error
    }

in this example, we are trying to change the value of num inside the loop. since we declared num with const, we will get an error. so if you need to change the value of the variable inside the loop, use let instead.

let's take a look at one last example dealing with an array of objects.

ex. const people =[
        {name: 'john', age:30},
        {name: 'ellie', age:20},
        {name: 'dan', age:14},
        {name: 'jim', age:34}
    ]

    for(const person of people){
        console.log(`${person.name} is ${person.age} years old`);
    }

in this example, we have an array of object called people. each object has a name and age property.

when we loop through the array, we create a variable called person that will represent the current object in the array.

inside the loop, we are outputing a message to the console.

the first message will be "john is 30 years old", the second message will be "ellie is 20 years old", and the third message will be "dan is 14 years old" and so on

for...of loops are really useful when you need to loop over values from an iterable like an array or a string. they are also easy to read and can make your code more concise.

# what is the for...in loop, and when should you use it?
a for...in loop is best used when you need to loop over the properties of an object. this loop will iterate over all enumerable properties of an object, including inherited properties and non-numeric properties.

and inherited property is property that is inherited form an object's prototype chain. a non numeric property is a property that is not a number or a string that can be converted to a number.

here is the basic syntax of a for...in loop:

ex. for(variable in object){
        //code block to be executed
    }

the variable in the example represent the current property of the object that is being looped over.

let's take a look at a few example so you can better understand how the for...in loop works.

in this first example we have a fruit object and we want to loop over each property and log the value to the console.

ex. const fruit = {
        name: 'apple',
        color: 'red',
        price:  0.99
    }

    for(const prop in fruit){
        console.log(fruit[prop]);
    }

the prop variable represents the current property of the object. fruit[prop] is used to access the value of each property.

for the first iteration, prop will be name. for the second iteration, prop will be color, and so on.

the result logged to the console will be apple, red, and 0.99.

in this second example, we have a nested object and we want to loop over each property and log the value to the console.

ex. const person = {
        name: "john",
        age: 30,
        address: {
            street: '123 main st',
            city: 'anytown',
            state: 'CA',
        }
    };

    for(const prop in person){
        console.log(person[prop]);
    }

the address property is an object itself. the for...in loop will also loop over the properties of the person object and log the entire address object to the console.

here is the result will look like in the console:

ex. john
    30
    {street: '123 main st', city: 'anytown', state: 'CA',}

if you want to loop over the properties of the address object, you can nest another for...in loop inside the first one.

ex. const person = {
        name: "john",
        age: 30,
        address: {
            street: '123 main st',
            city: 'anytown',
            state: 'CA',
        }
    }

    const isObject = obj => {
        return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
    }

    for(const prop in person){
        if (isObject(person[prop])){
            for(const nestedProp in person[prop]){
                console.log(person[prop][nestedProp]);
            }
        }
        else{
            console.log(person[prop]);
        }
    }

in this example, we have a custom function isObject that checks if the value is an object.

the Array.isArray() method is used to check if the value is an array. by placing th logical Not operator(!) in front of the method, we are checking if the value is not an array.

the reason why we can't just use typeof equals 'object' is because arrays are also considered objects in javascript, we want to exclued arrays form the check.

also, due to a historical bug in javascript, typeof null returns 'object'. so we want to also exclude null values from the check.

if the condition is true, we nest another for...in loop that will loop over the properties of the nested object and log the value to the console.

the nestedProp variable represents the current property of the nested object.

here is what the modified result will look like in the console:

ex. "john"
    30
    "123 main st"
    "anytown"
    "CA"

a for...in loop is useful when you need to loop over the properties of an object.

it is not recommended to use for...in loop to loop over the elements of an array instead, use for...of loop or other array methods like forEach, map, filter and reduce which we will learn in the future lesson.

# what is a while loop, and how does it differ fromt he do..while loop?
in previous lessons, you learned how to work with for loops, for...in loops and for...of loops. in this lesson, you will learn about the while loop and the do...while loop.

a while loop will run a block of code as long as the condition is true. here is the basic syntax for a while loop.

ex. while(condition){
    //code block to be executed
}

the condition is checked before the block of code is executed. if the condition is false, the block code will not be executed

while loop are useful when you do not know how many time you need to run the block of code. here is an example of using while loop:

ex. let counter = 0;
    while(counter<3){
        console.log(counter);
        counter++
    }

in this example, we have a variable called counter that is initialized to 0. then while loop will continue to run as long the value of counter is less than 3. inside the loop we log the value of counter to the console and then increment counter by 1.

another similiar to the while loop would be the do...while loop. here is the basic syntax:

ex. do{
        //code block to be executed
    } while(condition);

one key different between a do...while loop and while loop is that the do...while loop will be executed the block of code at least once before checking the condition.

if the condition is true, the block of code will continue to execute. if the condition is false, the block of code will be stop.

here is an example of using do...while loop:

ex. let counter = 0;
    do{
        console.log(counter);
        counter++;
    }
    while(counter<5);

in this example, we have a variable called counter that is initilized to 0, the do...while loop will log the value of counter to the console and then increment counter by 1. after executing the block of code, it check if the value of counter is less than 5. if it is, the loop will continue to run. if not, the loop stop.

in most cases, you will probably use the while loop more often than the do...while loop. however, it is good to know both types of loops and when to use them

# what are break and continue statement used for in loops?
a break statement is used to exit loop earlu, while continue statement is used to skip the current iteration of loop and move to the next one.

here is an example of using break statement in a for loop:

ex. for(let i=0; i<10; i++){
    if(i ===5 ){
        break;
    }

    console.log(i); //1,2,3,4
}

in the example above, the loop start counting at 0  and while i is less than 10, the loop will continue to run.

inside the loop, we check if i is equal to 5. if it is, we use the break statement to exit the loop early. if not, we log the value of i to the console.log. so the output of the code will print number 0,1,2,3,4

the break statement is useful when you want to exit a loop early based on a certian condition. for example, if you are searching for a specific value in an array, you can use a break statement to exit the loop once you find the value.

sometimes you may want to skip a particularly iteration of a loop without exiting the loop entirely. this where the continue statement comes in. here is an example of using a continue statement in a for loop:

ex. for (let i = 0; i<10; i++){
        if(i ===5){
            continue;
        }
        console.log(i);
    }

just like before, we have initialized i ot 0 and have condition that will run the loop as long as i is less than 10.

inside the loop, when i is equal to 5, we use the continue statemnt to skip the current iteration and move to the next one.

the output of this code will print the number 0,1,2,3,4,6,7,8,9 the number of 5 is skipped because of the continue statement.

another thing you can do with both the break and continue statement is to use labels to specify which loop you want to break or continue.

this is useful when you have nested loops and you want to control the flow of the outer loop from within the inner loop.

here is an example of using labels with the break statement:

ex. outerLoop: for(let i=0; i<3; i++){
        innerLoop: for(let j = 0; j<3; j++){
            if (i===1 && j===1){
                break outerLoop;
            }
            console.log(`i: ${i}, j:${j}`)
        }
    }

in this example, we have an outer loop for loop labeled outerLoop and inner for loop labeled innerLoop.

when i is equal to 1 and j is equal to 1, we use the break statement with the outer loop label to exit the outer loop early. this will exit both the inner and outer loops.

the output of this code will log the following to the console:

ex. "i: 0, j:0"
    "i: 0, j:1"
    "i: 0, j:2"
    "i: 1, j:0"

most of the time you will not find the need to use labels with the break and continue statement, but is good to know that you have that option if you ever needed it.

