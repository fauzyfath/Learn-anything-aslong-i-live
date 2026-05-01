# what is number type and what are the different
number type is one of the most used data types in javascript and other programming languages. numbers might simple but there's a lot to explore when it comes to numbers.
unlike many other programming languages that seperates integers and floating point numbers into different types. javascript uses one unified number type to account for numbers. this means you can work with whole numbers, decimals, and even special numeric values all under the same number data type

here example of integers, float, and negative.
    const wholeNumber = 50;
    const decimalNumber = 5.6;
    const negativeNumber = -8;

    console.log(typeof wholeNumber);        //number
    console.log(typeof decimalNumber);      //number
    console.log(typeof negativeNumber);     //number

javascript number type includes various kinds of numeric values, ranging from simple integers and floating-point numbers to special cases like infinity and NaN, or "Not a Number". lets break down the main types you'll encounter. integers are whole numbers without any fractional or decimal part. they can be positive, negative, or zero. 

ex. const positiveInteger = 100;
    const negativeInteger = -25
    const zero = 0;

    console.log(typeof positiveInteger); //number
    console.log(typeof negativeInteger); //number
    console.log(typeof zero); //number

floating point numbers are numbers with decimal points. floats are useful when you need more precision, such as when you're dealing with measurements or currencies.

ex. const floatingPointNumber = 4.5;
    const anotherFloat = 89.56;
    const oneMoreFloat = 16.3242;

    console.log(typeof floatingPointNumber);    //number
    console.log(typeof anotherFloat);    //number
    console.log(typeof oneMoreFloat);    //number

javascript can represent numbers that are beyond the maximum limit with infinity. you'll encounter this when you try to divide a number by zero or on rare occasions, exceed the upper boundary of the number type.

ex. const infiniteNumber = 1/0;
    console.log(infiniteNumber);
    console.log(typeof infiniteNumber);

sometimes in javascript, some mathematical operations don't result in a valid number, for instance mathematical operations meets something that not number like string, you'll get NaN which stands for "Not a Number"

ex. const notANumber = "hello world"/2;
    console.log(typeof notANumber);         //NaN

suprisingly, NaN is also number

appart from standard decimal system (Base 10), javascript also support numbers in different bases such as binary, octal, and hexadecimal. binary is a base-2 system that uses only digits 1 and 0, octal is base-8 system that uses only digits 0 to 7. hexadecimal is a base 16 system uses digits 0 to 9 and letters a to f like you see on css hex colors

# what are the different arithmatic operators
basic arithmatic operations on numbers such as addition, substraction, multipication, and division. javascript also includes operators for more complex arithmatics operations such as reaminder and exponentiation

all these tools are called arithmatic operations. let's look at these operators in detail

addition operator is plus sign "+" the addition operators allows you to find total of two or more number, the order of the numbers doesn't matter:
ex. const num1 = 2;
    const num2 = 3;
    const num3 = 13;

    const result1 = num1 + num2;
    const result2 = num2 + num1;
    const result3 = num2+num1+num3;

    console.log(result1);   //5
    console.log(result2);   //5
    console.log(result3);   //18

the subtraction operator is a minus sign "-" it allows you to find the difference between two numbers:
ex. const difference = 10 -5;
    console.log(difference);    //5

    const diff = 5 - 10;
    console.log(diff);      //-5

you can also assign the numbers to variables and do the subtraction with the variable names:

ex. const num1 = 10;
    const num2 = 2;
    const result = num1-num2;

    console.log(result);    //8

multiplication operator is represented by an asterisk "*" and is used to find the product of two or more numbers. the order doesn't matters:

ex. const num1 = 10;
    const num2 = 2;
    const num3 = 15;

    const result1 = num1 * num2;
    const result2 = num2 * num1;
    const result3 = num3 * num1 * num2;

    console.log(result1);       //20
    console.log(result2);       //20
    console.log(result3);       //300

division operator is a slash "/" wich differs from the division symbol used in traditional math "÷" you perform division operations with the division operator, the order of the numbers matters in this case:

ex. const num1 = 10;
    const num2 = 2;
    const num3 = 15;

    const result1 = num1 / num2;
    const result2 = num2 / num1;
    const result3 = num3 / num1 / num2;

    console.log(result1);       //5
    console.log(result2);       //0.2
    console.log(result3);       //0.75 

    const result = 10/0;
    console.log(result);    //infinity

its important to note dividing by zero will lead to ininity so make sure to avoid those types of calculations

the remainder operator, represented by a precentage sign "%", returns remainder of a division. the remainder in math is the lefover value after performing division:

ex. const num1 = 10;
    const num2 = 3;

    const result = num1 % num2; 
    console.log(result);    //1

exponentatial operator, represented by a double asterisk "**" raises one number to the power of another:

ex. const num1 = 10;
    const num2 = 2;

    const exponent = num1 ** num2;

    console.log(20);

its possible to mix operators in a single operations or expression:

ex. const result = 10 + 5 * 2 - 8 / 4 
    consol.log(result); //18

# when try to do calculations with numbers and strings
in javascript, the "+" operator does double duty. it handles both addition and string concatenation, which is a way to join two strings together.
when you use "+" with a number and a string, javascript decide to treat them both as strings and joins them together. if you check the type of the result with the typeof operator you'd see its return string:

ex. const result = 5 +"10";
    console.log(result);    // 510
    console.log(typeof result);     //string

javascript sees a strings in "10" and a number in 5 so it converts the number to string and concatenates them. this known as coercion. type coercion is when value from one data type is converted into another

when doe other arithmetic operations like substraction, multiplication, or division with string and number, javascript tries to convert the string into a number before doing the math, another type of coercion but the opposite

ex. const substraction = "10" -5;
    console.log(substraction);          //5
    console.log(typeof subtraction);    //number

    const multiplication = "10" * 5;
    console.log(multiplication);          //50
    console.log(typeof multiplication);    //number
    
    const division = "10" / 5;
    console.log(division);          //2
    console.log(typeof division);    //number
    
it converts all the string number into number data type and resulted in number value type

but what if the strings is not number

ex. const substraction = "adsa" -5;
    console.log(substraction);          //NaN
    console.log(typeof subtraction);    //number

    const multiplication = "sada" * 5;
    console.log(multiplication);          //NaN
    console.log(typeof multiplication);    //number
    
    const division = "dasda" / 5;
    console.log(division);          //NaN
    console.log(typeof division);    //number

"abc" or does not repsent a valid numeric value, so js cannot convert it into meaningful number. when such conversion fails, js will return NaN 

what if you perform artihmatic operations wiht boolean (true or false)? javascript treats boolean as number in mathmetatical operation: true  = 1 and false = 0

ex. const result1 = true + 1;
    console.log(result1);          //2
    console.log(typeof result1);    //number

    const result2 = false + 1;
    console.log(result2);          //1
    console.log(typeof result2);    //number
    
    const result3 = "hello" + true;
    console.log(result3);          //"hellotrue"
    console.log(typeof result3);    //string

for a null and undefined, js treats null as 0 and undefined as NaN:

ex. const result1 = null + 1;
    console.log(result1);          //5
    console.log(typeof result1);    //number

    const result2 = undefined + 1;
    console.log(result2);          //NaN
    console.log(typeof result2);    //number
    
javascript performs type coercion, automatically converting data types such as number, strings, and booleans in sometime unexpected ways.

# how does operator precedence work
operator precedence determine the order in which operations are evalueated in an expression. operators wiht higher precedence are evalueated before those with lower precedence. this of operator precedence like in math, where division and multiplication happen before addition and subtraction.

ex. const result = 2 + 3 * 4;
    console.log(result);    //14

you'd might expect 2 + 3 = 5 then 5 * 4 = 20 but because multiplication has higher precedence javascript evalueates the 3 * 4 first and then 2 + 12 = 14.

sometimes you may want certain parts of your expression run first, regardless of precedence rules. you can use parenthesess () to do this. anything inside parenthesess is evalueated firs. 

ex. const result = (2 + 3) * 4;
    console.log(result);         //20

the paranthesess force javascript to evaluate 2 + 3 first and then multiply it by 4 this gives you 20 instead 14;

lets do division:

ex. const result = 2 + 6 / 3;
    console.log(result);        //4

so in both multiplication and division both operations will always take the place before addition and substraction, unless you use parentheses to change the order. so what happens if the operators have the same precedence ? js uses associativity to figure out the order to evaluate them.

asociativity is what tell js whether to evaluate operators from left to right or right to left. for most operators like addition and multiplication, associaitivity is left to right. so javascript process these from the leftmost side to of the expression to the right

ex. result = 10 - 2 + 3;
    console.log(result);        //11


some opearators, like assignment  (=) are right to left assosiative. this means the right side of the expression gets evaluated first:

ex. let a, b;
    a = b = 5;

    console.log(a);     //5
    console.log(b);     //5
    console.log(a+b);   //10

this example 5 assignt to b then b (which is now 5) assign to a;

the exponent operator is also right to left associative:

ex. const result = 2 ** 3 ** 2;
    console.log(result)  //512

first evaluates 3 ** 2 = 9 then 2 ** 9 = 512. if the exponent operator had to goe from left to right associativity, js would calculate 2 ** 3 first and get 8 then 8 ** 2 to get 64

# how do the increment and decrement operators work
the incerement and decrement operators are represented by the ++ and -- respectively. they both allows you to adjust value of a variable by 1.

instead of writing x = x + 1 or x = x -1, you can simply use x++ to add 1 or x-- to subtract 1 its faster and cleaner and easier to read.

there's twist to how the increment and decrement operatos work: they come in two forms, prefix and postfix, with the difference being when the value gets updated. for the increment prefix is ++x and postfix is x++

prefix (++x) increase the value of the variable first, then returns a new value postfix x++ returns the current value of the variable first then increase it:

ex. let x = 5;
    console.log(++x);       //6
    console.log(x)          //6

in the code above ++x means increment x first then use it, so when you log ++x, you immediately get the incremented value which is 6

now lets take look how postfix:

ex. let x = 5;
    console.log(x++);       //5
    console.log(x)          //6

in this example y++ means use y first then increment it. when you log y++ you get 5 but y becomes 6 after that line of code.

decrement is the oppsite same principle is used but instead of increasing like increment its decresse the value.


ex. let x = 5;
    console.log(--x);       //4
    console.log(x)          //4

    
    let x = 5;
    console.log(x--);       //5
    console.log(x)          //4

so which should you use: prefix or postfix? in manycases, it doesn't matter which one you use. both get the job done. however, if you're using the value immediately in an expression the difference become important. lets take look of the example:

ex. let a = 5;
    let b = ++a;

    console.log(b);     //6 a was inceremented before assignment

    let c = 5;
    let d = ++c;

    console.log(b);     //5 c was inceremented after assignment

# why are compound assignment operators in js and how do they work?
all arithmatic operatos have a compound assignment form. compound assignment provide a concise shorthand for an operation on a variable followed by storing the result in the same variable. they combine the operation and assignment into shorter from x += y, which is equivalent to writing x = x + y but without repeating the variable name, instead writing like this:

ex. let num = 5;
    num  = num + 2;

    console.log(num);       //7

you can write like this:

ex. let num = 5;
    num +=2;

    console.log(num);       //7

notice how num += 2 combines both the addition and assignment steps into one, this saves times and reduces clutter in your code. 

as you've already seen, the += operators lets you add a value to an existing variable. it is known as the addition assignemnt operator. the addition assignment operator takes the current value of the varibale, adds the specified number to it, and then assings the result back to variable.

as you might guess. theres subtraction assignment operator denoted by -=. the substraction assignment operator substract the specified value from the current value of the variable and assigns the new value back to the variable:

ex. let score = 20;
    score -= 7;

    console.log(score);         //13

the multiplication assignment operator is represented by *=. it multiplies the current value of the variable by the specified number and reassings it back to the varibale:

ex. let points = 5;
    points *= 3;

    console.log(points);        //15

lastly, there's division assignemnet operator denoted by /=. jut like others before it, it lets you divide the current value of variable by a number you specify, the assign the result back to the variable:

ex. let balance = 100;
    balance /= 4;
    
    console.log(balance);       //25

remeber there's a compound assignemnd operator for every operator in javascript. so apart from the four already mentioned, js also have:
    - remainder assignment operator (%=), which dividea variable by 
        sppecified number and assigns the remainder to the variable.

    - assignment operator (**=), which raises a variable to the power
        of the specified number and reassigns the result to the variable

    - bitwise AND assignemt operator (&=), which performs a bitwire and 
        operation with the specified number and reassings the results to the variable

    - bitwise OR assignement operator (|=), which perform a bitwise OR 
        operation with the specified number and reassigns the result to the variable

# what are booleans, and how do they work with equality and inequality operators
booleans are data type with only true and false values. booleans are essential when you want to evaluate whether something should happen or not, like deciding if someone can access a certain feature in your app. 

ex. let isOldEnoughToDrive = true;
    console.log(isOldEnoughToDrive);    //true;

you can use this variable inside a conditional like this:

ex. let isOldEnoughToDrive = true;

    if(isOldEnoughToDrive){
        console.log("you're old enough to drive");
    } else{
        console.log(sorry, you're not allowed to drive)
    }

to compare two values, you can use either the equility or strict equality operator. the result of the comparison will be a boolean of either true or false. here is an example os using the equality operator to compare a string and number. the equality operator is represented by a double equals sign (==):

ex. console.log(5 == "5");      //true

in this example javascript converts string "5" into number 5 and then check if they are equal. since both values are now the same, the result is true. the equality operator uses type coercion before checking if each values is equal

this differs from the strict equality operator, which does not perform type coercion. the strict equality operator will check if the types are the same and if the values are the same. here is an example of using strict equality operator to compare a number and string. this operator is represented by a triple equals sign (===):

ex. console.log(5 === "5");     //false

the following comparison will be false, because a string data type is not the same as number data types. if you need to check if something is not equal to another value, then you can use the inequality or strict inequality operators. here is an example using inequality operator (!=) to compare a number with a string.

ex. console.log(5 != "5");      //false

in this example, the result would be false because the inequality operator first converts the string value to a number and then compares the values. since the values would be the same it will return false. if you tried to use the strict inequality operator, the you would get different result. the strict inequality operator is represented by an exclamation mark followed by two equal signs (!==).

ex. console.log(5 !== "5");      //true

the result would be ture because the strict inequality operator does not perform any type coercion. since the number 5 is not equal to the string "5" the the result is true.

it is considered best practice to use strict inequality and equality operators whenever possible, as they do not perform type coercion. most of the time in profesional projects, you will see codebases that usually prefer these two operatos over the inequality and equality operators

# what are comparison operators, and how do they work
comparison operators allow you to compare two values and return a true or false result. you can the use the result to make a decision or control the flow of your program. you can use comparison in "if" statement, loops, and many other situations where you need to make decisions based on certain conditions.

the greater than operator, represented by a ">" bracket, checks if th value on the left is greater than the one on the right:

ex. let a = 6;
    let b = 9;
    
    console.log(a>b);       //false
    console.log(b>a);       //true

the greater than or equal operator, represented by a bracket and the equals sign ">=". checks if the value on the left is either greater or equal to the one on the right:

ex. let a = 4;
    let b = 3;
    let c = 4;

    console.log(a >= b);    //true
    console.log(b >= a);    //false
    console.log(a >= c);    //true

the lesser than operator, represented by "<" bracket. works similiarly to ">" bracket but in reverse. check if the values is smaller than the right one:

ex. let a = 3;
    let b = 5;

    console.log(a < b);     //true
    console.log(b < a);     //false

same goes for the lesse than or equals:

ex. let a = 3;
    let b = 6;
    let c = 3;

    console.log(a <= b);        //true
    console.log(b <= a);        //false
    console.log(a <= c)        //true

# what are unary operators, and how do they work?
unary operator act ona single operant to perfom operations like type conversion value manipulation, or checking certain conditions. lets see a common unary operators and how they work.

the unary plus operator converts its operand into a number. if the operand is already a number, it remains unchanged.

ex. const str = '42';
    const strToNUm = +str;

    console.log(strToNum);          //42
    console.log(typeof str);        //string
    console.log(typeof strToNum);   //number

unary plus is handy when you want to make sure you're working with a numeric value. as you might guess, there's unary negation operator. it negates the value of the operand. it works similiarly to the unary plus, except it flips the sign.

ex. const str = '42';
    const strToNegativeNum = -str;

    console.log(strToNegativeNumber);           //-42
    console.log(typeof str);                    //sring
    console.log(typeof strToNegativeNumber);    //number

the logical NOT operator is a less commonly used unary operator. represented by a tilde, "~", it inverts the binary representation of a number. computers store numbers in binary format (1s and 0s). the "~" operatos flips every bit, meaning it changes all 1s and 0s and all 0s and 1s. you will learn binary and bits in the future lesson.

ex. const num = 5;      //binary for 5 00000101
    console.log(~num);  //-6

in this example, 5 became -6 because by applying the "~" operator to 5, you get -(5 + 1), which equals to -6 due to two's complement representation. two's complement is a way computers represent negative numbers in binary. you probably won't use the bitwise NOT often unless you're working with low-level programming task like manipulating bits directly.

the void keyword is a unary operator that evauluates an expression and returns undefined.

ex. const result = void (2 + 2);
    console.log(result);            //undefined

void is also commonly used in hyperlinks to prevent navigation:

ex. <a href="javascript::void(0);">CLick ME</a>

finnaly, there is the typeof operator which you learn in previous lesson. this returns the type of its opperand as a string.

ex. const value = "hello world";
    console.log(typeof value);      //string

# what are Bitwise operators, and how do they work?
bitwise operators in javascript are special operators that work on the binary representations of numbers. to understand bitwise operators, we first need to grasp the concept of bits and binary numbers. in computing,a bit is the most basic unit of information. it can have only two values 1 and 0. binary is a number system that use only these two digits to represent all numbers.

for example, the binary representation of the decimal number 10 is 1010. in this system, each digit represents a power of 2, starting from the rightmost digit and increasing as we move left

ex. 
---------------------------------
|   1   |   0   |   1   |   0   |
| 1.2^3 | 0.2^2 | 1.2^1 | 0.2^0 |
|   8   |   0   |   2   |   0   |
---------------------------------
in the table above, the first shows the binary number 1010, the second row shows the power of 2 represented by each binary position, and the third row shows the result of each multiplication. if you add the values in the third row, they total 10.

now, lets dive into bitwise operators. these operators preform operations on the binary representations of numbers. javascript provides several operators, including AND(&), OR(|), XOR(^), NOT(~), leftshift(<<), and right shift(>>).

the bitwise AND(&) operator returns a 1 in each bit position for which the corresponding bits of both operands are 1. here's an example:

ex. let a = 5;      //binary: 101
    let b = 3;      //binary: 011

    console.log(a & b);     //1 (binary: 001) 0 + 0 + 1

in this example, we perform a bitwise AND operations on 5 (101 in binary) and 3 (011 in binary). the results is 1 (001 in binary) because only the rightmost bit is 1 in both numbers.

the bitwise OR(|) operator return a 1 in each bit position for which the corresponding bits of either or both operands are 1. for example:

ex. let a = 5;      //binary: 101
    let b = 3;      //binary::011

    console.log(a | b);     //7 (binary: 111) 4 + 2 + 1

    

here, the reuslt is 7 (111 in binary) because at least one of the bits is 1 in each position.

the bitwise XOR(^) operator returns a 1 in each bit position for which the corresponding bits of either, but not both, operands are 1. for instance:

ex. let a = 5;      //binary: 101
    let b = 3;      //binary: 011

    console.log(a & b);     //6 (binary: 110)  4 + 2 + 0

the result is 6 (110 in binary) because the first and second bits from the right are different in the two numbers.

the bitwise NOT(~) operator inverts all the bits of its operand. for example:

ex. let a = 5;      //binary: 101
    console.log(~a);     //-6

this might seems surprising, but its because of how negative numbers are represented in binary using two's complement

the right shift(>>) operator shifts all bits to the right. for example:

ex. let a = 5;      //binary: 101
    console.log(a >> 1);     //2 (binary: 10) 2 + 0

here, all bits are shifted one position to the right, effectively dividing the number by 2 and rounding down

the left shift(<<) operators shifts all bits to the left by specified number of position for example:

ex. let a = 5;      //binary: 101
    console.log(a << 1);     //10 (binary: 1010) 8 + 0 + 2 + 0

bitwise operators are often used in low-level programming and cryptography. while they may not be as common used in everyday javascript programming, understanding them can be beneficial for certain specialized tasks and can deepn your understanding of how computers work at a fundamental level.


# what are conditional statement, and how do if/else if/else statement work?
conditional statement let you make decision in you js code. they allow your program to flow in a particular way based on certain conditions. lets take a look at how if, else if, else, and the ternary operator work to let you control the flow of your code.

an if statement take condition and runs a block of code if that condition is truthy. truthy values are any values that result in true when evaluated in a boolean context like an if statement. here are examples of truthy values:
    - non empty strings, for example, "hello"
    - any number other than 0 and -0, for example, 4, -5, and others.
    - arrays
    - objects
    - the boolean true

on the other hand, falsy values are values that evaulate to false in a boolean context. javascript few falsy values, which make them easy to remember. here are a few falsy values:
    - boolean false
    - 0 (zero)
    - "" (empty string)
    - null
    - undefined
    - NaN (not a number)

now, that we have basic understanding of truthy and falsy values, let's see how it works with "if" statements.

ex. if(null){
        console.log("this will not run");
    }
    if("freeCodeCamp"){
        console.log("this will run");
    }

since null is a falsy value, the message inside the block will never be logged or running. but for the second if statement, the string is truthy value, and will be considered as true in this boolean context of the "if" statement. as result the second message is logged.

let's take a look at few more examples on how if statement work with different comparison operators. here is an example of using an if statement to check if the user is eligible to vote:

ex. const age = 22;
    
    if(age>=18){
        console.log("you're eligible to votee");        //age is eliguble
    }

in this example, since age is currently 22, this means the condition will evaluate to true because 22 is greater than or equal to 18, so the message will be logged to console. if we change the age to under 18 then the condition will evaluate to false and message will not be logged

ex. const age = 12;
    
    if(age>=18){
        console.log("you're eligible to votee");        //code not running
    }

when a condition is false, then you can use an else clause:

ex. const age = 12;
    
    if(age>=18){
        console.log("you're eligible to votee");        //age is eliguble
    }
    else{
        console.log("you're not eligible to vote");    //this log will run 
    }

in this example, 15 is not greater than and equal to 18 so the condition is false, so the else blok is running.

if you want to check multiple condition you can use an "else if" block. this allows to add statement if the first "if" not return true. program will choose between more than two paths.

ex. const score = 87;
    
    if(score >=90){
        console.log("you got A");        
    }
    else if(score >= 80){
        console.log("you got B");       //this will run 
    }
    else if(score >= 7){
        console.log("you got C");
    }
    else {
        console.log("you got D, failed failed");
    }

since the score is currently 87, then the 2nd message will logged

the ternary operator is compact way to write simple if/else statements. it has three parts: a condition, a result if the condition is true and a result if it is false. here's the basic syntax:

ex. condition ? expressionIfTrue : expressionIfFalse;

here's an examples dealing with weather tempreture in celcius:

ex. const temperature = 30;
    const weather = temperature > 25 ? "sunny" : "cool";

    console.log(`it's a ${weather} day!);       //cool

if temperature is greater than 25, the code above will logs "its a sunny day". if the temperature is under 25 the logs will print "its a cool day!".

so which should you use between an if statement and ternary? use a ternary while dealing with a single condition or single expressions, or when you want to compact syntax for simple logic. use if/else statement when you're dealing with complex condition and multiple statements, as things become unreadable if you nest ternaries

# what are binary logical operators, and how do they work?
binary logical operators help you evaluate two expression and return a result based on their truthiness. the three most common binary logical are: logical AND, logical OR, and the nullish coalescing operator

the logical AND operator is represented by a double ampersand(&&). it checks if both operands are true and returns a result. if both operands are truthy, it returns the seconds value, that is the one on the right:

ex. const result = true && 'hello';
    console.log(result);    //hello

in the example above the text hello is logged to the console because both operands are true. if either operand is false, it return false value:

ex. const result = 0 && 3;
    console.log(result);        //0

since 0 is false value, the number 0 is loggerd to the console. and if both opperands are false, it return the first false value:

ex. const result = false && 0;
    console.log(result);        //false

since false is a falsy value, the false is logged to the console. the logical AND operator is useful when you want to check multiple condiiton and ensure that all are true before proceeding. here is an example:

ex. if (2 < 3 && 3 < 4){
        console.log('the if block runs');    
    }

    else{
        console.log('the else block runs')
    }

if the condition, since 2 is less than 3 AND 3 is less than 4, then the sentence 'the block if is run' will be logged.

the logical OR operator checks if at least one of the operands is truthy. if the first operand is truthy, it returns that value:

ex. const result = 'this is true' || false;
    console.log(result);        //this is truth

if the first operand is falsy but the second is truthy the second value will be logged:

ex. const result = 0 || 'this is true';
    console.log(result);        //this is true

it is common to usethe logical OR operator in if/false statement like this:

ex. let userInput;

    if(userInput || 'guest'){
        console.log('user is present');
    }
    else{
        console.log('no user is present');
    }

since we didn't assign a value to the userInput variable, it is currently undefined. the condition in the if statement checks if either the userInput variable or the string 'guest' are truthy. since the string 'guest' is true in boolean context, the string 'user is present' will be logged.

the nullish coalescing operator is more sophisticated than logical OR and AND. represented by a double question mark(??), it helps in scenario where you want to return a value only if the first one is null or undefined. here is an example:

ex. const result = null ?? 'defaul';
    console.log(result);        //default

since null is nullish value, the string default would be logged to the console. the nullish coalescing operator is incredibly useful in situation where null or undefined are the only values that should trigger a fallback or default value. here is an example of dealing with user preference settings:

ex. const userSettings = {
        theme: null,
        volume: 0,
        notification: false,
    }

    let theme = userSettings.theme ?? 'light';
    console.log(theme);     //light

in the example above, we have an object called userSettings that contains theme, volume, and notifications properties. we are accessing the theme using dot notation like userSettings.theme. since the user's theme is currently set to null, then the string light will be logged to the console.

# what is the math object in javascript, and what are some common methods?
when diving into javascript, you'll quickly discover that performing mathematical operations is a common task. while basic arithmetic operators can handle simple calculations, javascript offers a built-in math object to tackle more complex math challenges.

this handy tool provides a variety of methods that make it easier to perform advanced calculations and manipulate numbers. 

the Math.random() method generates a random floating-point number between 0(inclusivle) and 1(exclusivle). this mean the possible ouput can be 0, but it will never react 1. here is an example:

ex. const randomNum = Math.random();
    console.log(randomNum);     //0.9322

Math.min() and Math.max() both takes a set of numbers and return the minimum and maximum value, respectively. here is an example:

ex. const smallest = Math.min(4,1,5,10,3,8);
    console.log(smallest);      //1

    const largest = Math.max(2,1,14,5,3,7);
    console.log(largest);           //14

the first console.log() will log the number 1, since 1 is the smallest in that list of number. and the second console.log() will log number 14, since 14 is the largest number in the list.

if you wanted to round numbers up or down to the nearest whole integer, you could use Math.ceil() and Math.floor() methods. here is an example of working with Math.ceil():

ex. console.log(Math.ceil(4.6));        //5

Math.ceil() will round up the floating number up, which lead to 5 in this case. lets take a look on Math.floor():

ex. console.log(Math.floor(5.8));       //4

the opposite of the Math.ceil(), the Math.floor() will round the number down wether if the number is .1 closer to rounding it up, it will still lead to rounded down, like the case above.

Math.round() is the hybrid of Math.ceil() and Math.floor(), it rounds a numbers to its nearest integer, taking the decimal point into account:

ex. console.log(Math.floor(5.8));       //6
    console.log(Math.floor(2.1));       //2
    console.log(Math.floor(7.6));       //8

so if the decimal point is less than 5, the number will rounded down and if the decimal is greater than 5, the number will rounded up. the practical application of Math.floor() and Math.random() is to generate a random number between two whole numbers. here an example:

ex. const max = 10;
    const min = 2;
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomNum);

generating a random number between 20 and 1 look like this:

ex. const randomNumBtw1And20 = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumBtw1And20);

another helpful Math method would be Math.truc() method. Math.trunc() removes the decimal part of the number, returning only the integer portion, without rounding:

ex. console.log(Math.trunc(4.21));  //4
    console.log(Math.trunc(5.15));  //5

if tou need to get the square root or cube root of a number, you can use the Math,sqrt() and Math.cbrt() method:

ex. console.log(Math.sqrt(81));      //9
    console.log(Math.cbrt(27));      //3

the first statement, will be log 9 because the square root of 81 is 9, while the second log will log 3 because the cube root of 27 is 3. if you need to get the absolute value of a number, you can use the Math.abs() method:

ex. console.log(Math.abs(-5));      //5
    console.log(Math.abs(5));       /5

Math.abs() returns the absolute value of a number, turning negatives into positive the last method we will look at will be the Math.pow() method:

ex. console.log(Math.pow(2, 3));     //8        (2^3)
    console.log(Math.pow(8, 2));     //64       (8^2)

Math.pow() takes two numbers and raise the first to the power of the second. there are many more methods that belongs to the Math object, however these are just a few of the more commonly used ones found in javascript codebase.

# How does isNaN work?
NaN stands for "Not a Number". it's a special value that represents an unrepresentable or undefined numerical result. NaN is propertu of the global object conterintuitive at first.

NaN is typically the result of operations that should return a number but can't produce a meaningful numerical value.

ex. let result = 0 / 0;
    console.log(result);            //NaN

in this case, dividing zero by zero is mathematically undefined, so javascript return NaN. one peculliar property of NaN is that it's not equal to anything, including itself:

ex. console.log(NaN == NaN);        //false

this unique behaviour makes it challenging to check if a value is NaN using standard comparison operators. to address this, javascript provides the isNaN() function. the isNaN() function property is used to determine whether a value is NaN or not. however, it's important to understand how isNaN() works, as it can sometimes produce unexpected result.

ex. console.log(isNaN(NaN));            //true
    console.log(isNaN(undefined));      //true
    console.log(isNaN({}));             //true

    console.log(isNaN(true));           //false
    console.log(isNaN(null));           //false
    console.log(isNaN(37));             //false

    console.log(isNaN("37"));           //false: "37" string is converted to 37 number
    console.log(isNaN("37.37"));        //false: "37.37" string is converted to 37.37 float number
    console.log(isNaN(""));             //false: empty string is converted to 0
    console.log(isNaN(" "));            //false: empty string with space  is converted to 0

    console.log(isNaN("blabla"));       //true: "blabla" string is is not a number
    
as you can see, isNaN() first attempts to convert the parameter to a number. if it can't be converted, it return true. this behaviour can lead to some surprising result. especially when dealing with strings that can be coerced into number.

due to these potential inconsistencies, ES6 (the sixth edition of javascript) introduce Number.isNan(). this method does not attempt to convert the parameter to a number before testing. it only returns true if the value is exactly NaN:

ex. console.log(Number.isNaN(NaN));             //true
    console.log(Number.isNaN(Number.NaN));      //true
    console.log(Number.isNaN(0/0));             //trueN
    console.log(Number.isNaN("NaN"));           //true
    console.log(Number.isNaN(undefined));       //true
    console.log(Number.isNaN({}));              //true
    console.log(Number.isNaN("blabla"));        //true

number.isNaN() provides a more reliable way to check for NaN values, especially in cases where type coercion might lead to unexpected results with the global isNaN() function. in practice, when dealing with numerical operations or user inputs that shoud be numbers, if its often necessary to check for NaN to handle errors or unexpected inputs gracefully. for example:

ex. let a = 0;
    let b = 0;
    let result = a / b;

    if(Number.isNaN(result)){
        result  = "Error: division resulted to NaN";
    }

    console.log(result);        //"Error: division resulted to NaN"

in this example, we're using Number.isNaN() to catch cases where the division operation results in NaN, allowing us to handle this scenario appropriately. understanding NaN and how to properly check if it is crucial for writing robust javascript code, especially with mathematical operations or parsing user inputs.

# how do the parsFloat() and parseInt() methods work?
parseFloat() and parseInt() are two essential methods in javascript for converting strings to numbers. these methods are particulary useful when dealing with user input or processing data that comes in string format but needs to be treated as numerical values. 

let's start with parseFloat(). this method parses a string argument and returns a floating-point number. it's designed to extract a number from the beginning of a string, even if the string contains non-numeric characters later on. remember that floats are numbers with decimal points. heres how parseFloat() works:

ex. console.log(parseFloat("3.14"));        //3.14
    console.log(parseFloat("3.14 abc"))     //3.14
    console.log(parseFloat("3.14.5"))       //3.14
    console.log(parseFloat("abc 3.14"))     //NaN

as you can see, parseFloat() starts parsing from the beginning of the string and continues until it encounters a character that can't be part of a floating-point number. if it can't find a valid number at the start of the string, it returns NaN.

ParseInt(), on the other hand, parses a string argument and returns an integer. like parseFloat(), it starts from the beginning of the string, but it stops at the first non-digit character. here's how parseInt() works:

ex. console.log(parseFloat("3.14"));        //3.14
    console.log(parseFloat("3.14 abc"))     //3.14
    console.log(parseFloat("3.14.5"))       //3.14
    console.log(parseFloat("abc 3.14"))     //NaN