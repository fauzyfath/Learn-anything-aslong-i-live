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


# templates literals and string interpolation 
templates literals and flexible way to work with strings, unlike regural strings, which use (') or double (") quotes, template literals are defined with backtick(`).

they allow for esier string manipulation, including embedding variable directly inside string, a feature string called interpolation

template literals make it esier to create strings that span multiple lines or include expressions (like variable or even codes logic) directly within the string

ex. const name = "james";
    const greeting = `hello, i am ${name}!`;
    console.log(greeting);      //hello, i am james

string interpolation allows you to embed variables and expressions inside a string. this is a significant improvement over the older method(concate string using + operator)

another great feature of template literals is that they support multiline strings. with regural strings, you would use (\n) to create new lines. with template literals you can write strings across multiple lines and the formating is preserved:
ex. let poem = `Roses are red,
            Violets are blue,
            JavaScript is fun,
            And so are you.`;

and also embed algortihm directly within the string:
ex. const song = "bohemian rapsody";
    const score = 9.5;
    const highestScore = 10;
    const output = `one of my favorite song is ${song} with my rating is ${(score / highestScore) *100}%.`;

    console.log(output);    //one of my favorie song is bohemian rapsody with my rating is 95%

# find the position of a substring in a string
a substring is a sequence of characters that appears within a larger string. for example, in the string hello world, hello and world are substring

to locate the position of a substring inside of a string you can use indexOf() method. the indexOf() method in javascript allows you to search for a substring within a string

if the substring is found inside the string, indexOf() returns the index (or position) of the first occurance of the substring, if the substring is not found, indexOf() returns -1 which indicates that the search was unsuccessful.

the indexOf() method takes two arguments: 
    1. the first is substring you want to find within the larger string
    2. is an option starting posisition for the search. if you don't provide a starting position the search will begin at the start of the string

in this context, an argument is a value you give to a function or method when you call it, enabling that function or method to perform its task using a specific information you provide

ex. let sentence  = "javascript is awesome!";
    let position  = sentence.indexOf("awesome!");
    console.log(position); // 14

in this example the word awesome starts at index 14 in the string javasript is awesome!, so the indexOf() method returns 14

now if its not found:
ex. let sentence  = "javascript is awesome!";
    let position  = sentence.indexOf("fantastic!");
    console.log(position); // -1


you can also specify where to begin the searching within a string by providing a second argument to indexOf():
ex. let sentence = "Javascript is awesome, and Javascript is powerful!";
    let position = sentence. indexof("Javascript", 10);
    console.log(position);      //27

in this case the search begins after 10th character and so the second occurance of javascript is found on 27

important: indexOf() is case sensitive

# prompt() method and how does it works?
prompt() method is a pop up or modal is the simplest ways to get user input through small pop up dialog box
the prompt() method takes two arguments: 
    1. message which will appear inside the dialog box
    2. is default value which is optional and will fill the input initially

ex. prompt(message, default);

if the users fill the form and presses "OK" the variable data will be filled with the value of the user input on the prompt, if the user did not provide the value or fill the form the data will be set on null. null signifies the that the user did not provide any input.

keep in mind the prompt() method will halt the execution of the script until the user interacts with the dialog box

prompt() is useful for quick testing and small applications, its generally avoided modern, complex web application due its disruptive nature  and inconsistent behaviour across different browsers

# what is ASCII, and how does it works with charCodeAt() and fromCharCode()?
in programming, understanding how charcaters are represented as numbers is fundamental. there is where ASCII cimes in. 
ASCII, short for American Standard Code for Information Interchange, is a character encoding standard used for in computers to represents text. it assigns a numeric value to each character, which is universally recoginezed by machines.

with that being said, the javascript method to encode data are charCodeAt() and fromCharCode().  while javascript strings is unicode (UTF-16) internally, ASCII values match the first 128 unicode characters, which is why ASCII-based examples work in javascript.

ASCII is a system of encoding characters such as letters, digits, and symbols into numerical values. each characters is mapped to a specific number.

ex. capital letter "A" is represented by the number 65 in ASCII, while the lowercase "a" is 97. this encoding allows computers to store and manipulate text.

THE ASCII STANDARD COVERS 128 CHARACTERS INCLUDING:
    -uppercase and lowercase English Letters (A-Z; a-z).
    -Numbers(0-9);
    -common punctuation mark and symbols(!,&,@, and so on).
    -control charaters (such as newline and tab);

in javaScript, you can access the numeric code of the characters using the charCodeAt() method. this method returns the UTF-16 code unit of the characters at a specific index. for the first 128 characters, this value matches the ASCII Code.

ex. let letter = "A";
    console.log(letter.charCodeAt(0));       //65

in this example, "A" is the first characters of the string, and calling the charCodeAt(0) returns its numeric code (which matches ASCII value for basic latin characters) 65.

you can also use this method for different characters:

ex. let letter = "!";
    console.log(letter.charCodeAt(0))       //33

while charCodeAt() helps you retrived the numeric code of a character, the fromCharCode() method allows you to do the opposite: convert the UTF-16 code unit (which mathces ASCII for basic characters) into their corresponding character.

ex. let char = string.fromCharCode(65);
    console.log(char);       //A

this example fromCharCode(65) converts the numeric code 65 (which matches the ASCII value of A) back to characters "A"

ex. let char = string.fromCharCode(97);
    console.log(char);      //a

the methods useful when you want to compare or manipulate charachters based on their numeric code values.
for instace, you might use charCodeAt() to check if a characters is uppercase, lowecase, or a digit by comparing its ASCII value.
on the other hand, fromCharCode() can be used to dynamically generate characters from their ASCII codes.

# test if a strings contains a substrings
when working on javascript, there are many cases where you wanted to check wether or not the strings contains a specific substrings, which is smaller part of the strings.

for example. you might wanted to check the users input includes a specific word of characters before perfoming some action. one way to achive this is by using the include() method.

the include() method is used for check if strings contains a specific substring. if the substring is found within the string, the method return true otherwise is false.

ex. let phrase = "Javascript is awesome!";
    let result = phrase.include("awesome);
    console.log(result);        //true;

in this example, the word awesome is found within the string "Javascript is awesome!", so the include() method return true.

keep in mind, include() method is case sensitive this means that the exact match of the characters is required, including their case.

ex. let phrase = "Javascript is awesome!";
    let result = "Awesome";
    console.log(result);        //false

since "Awesome" (with a uppercase A) does not match "awesome" (with lowercase a) the result is false.

you can also use the include() method for checking a substrings starting at a specific index in the string by providing a second parameter.

ex. let text = "Hello, Javascript world!";
    let result  = text.include("Javascript", 7);
    console.log(result);        //true

here, the search for the substring Javascript start form the 7th position in the string ensuring it skips any characters before the this position.

the include() method only returns true or false result. it does not provide further information on where the substring is located in the string or how many times it occurs. if you need that level of detail, other method such as indexOf() method  might be more suitable.

# how can you extract a substring from a string
when working in javascript you often might wanted to extract a portion of the substring from a larger string. for example, you may want to extract a part of a word, specific character sequence, or just a fragment of a sentence.

javascript provides several methods for this task, one of the commonly use is slice() method. the slice() method allows you to extract a portion a string and returns a new string, without modifying the original string. it takes two parameters:
    -the starting index
    -optional ending index

here is the syntax:
    string.slice(startingIndex, endingIndex);

startIndex is the position of where the extraction starts. endIndex is where the extraction ends. if not provide the end, the slice() method will extract till the end of the string.

ex. let message = "hello, world";
    let greeting = message.slice(0,5);

    console.log(greeting);      //hello

in this example, slice(0,5) extract characters starting from index 0 up to and no including the index 5. as result, the world "hello" is extracted;

if you omit the second parameter, slice() will extract till the end of the string.

ex. let message = "hello, world!";
    let word = message.slice(7);
    console.log(word);      //world!

you can also use negative numbers as indexes, when you use the negative numbers it counts from backwards form the end of the string:

ex. let message = "hello, its fun!";
    let word = message.slice(-4);   //fun!,

in this case, it extracts the last four characters from the string, giving us fun!

if you wanted to slice from the middle, you can provide the starting index and the end index to precisely control which substring you wanted to extract:

ex. let message = "i love you";
    let word = message.slice(1, 5);

    console.log(word);  //love

the slice method() is powerful tool for extracting parts of the strings in javascript, you specify the start and end indexes, and the method returns a new string that contains the extracted portion. with options for positive, negatives and omited indexes, you can adapt it to various situations without altering the strings.

# how to change casing for a string
in some cases you may faces, where you might need to adjust the text casing, such as transforming all letters into uppercase and lowercase.
javascript make this easy with toUpperCase() method and toLowerCase() method.

toUpperCase() method converts all the text into uppercase letters and returns new strings with all uppercase characters. this useful for emphasize the text or create consistency in the format of string

ex. let message = "hello world";
    let upText = message.toUpperCase();
    console.log(upText);    //HELLO WORLD

on the flip side, the toLowerCase() method converts all the all characters into lowercase letters. this helpful when you need standarlize input such as when comparing user-provided text or making case-insensitive checks.

ex. let message = "HELLo, world";
    let lowText = message.toLowerCase();
    console.log(lowText);       //hello,world

# how to trim whitespace from a string
its common to encounter unwanted whitespace at the beginning or end of a string. whitespace can interfere with operations like comparison, storage or display which is why its important to remove unwanted whitespace

to trim a whitespace you could use trim(), trimStart(), trimEnd() methods to remove whitespace

keep in mind whitespace are spaces,tab or line breaks that occurs in text but not visible to characters

trim() method is commonly used way to remove whitespace from both the beggining and end strings.

ex. let message = "     hello, world       "
    let rmv = message.trim();
    console.log(rmv);       //hello, world

in this case trim() method removes all leading and trailing spaces leaving just text or actual characters (note that any whitespace between the characters are considered as characters and its left untouched by trim() method)

what if you wanted only remove the begining or end of the strings, but not both. thats where trimStart() and trimEnd()come in

ex. let message = "     hello, world       "
    let rmv = message.trimStart();
    console.log(rmv);       //"hello, world     "

this for trim start

ex. let message = "     hello, world       "
    let rmv = message.trimEnd();
    console.log(rmv);       //"     hello, world"

this for trim ends.

in summary trimming whitespace is an essential part for working with strings wether you want to clean up text input data or ensure consistent writing of a strings.

# Replace part of a String with another
there are many case where you wanted to replace a portion of a string with another string. for instance, you might need to update user information in a URLs, update the user formatting of date, or correct the errors in user-generated content.

the replace() method allows you to find a specific value (like a word of character) in a string and replace it with another value. the method returns a new string with the replacement and leaves the original unchanged becuase javascript strings are immutable.

ex syntax.  string.replace(searchValue, newValue);

searchValue is the value you wanted to search for in the strange, it can be either a string or a regular expression(regex) which describes patters in text. this allows you to search for and manipulate strings in a flexible and powerful way. you'll learn more about regular expression in future lessons.

the newvalue is the value that will replace the searchValue. here's and example

ex. let text = "I love JavaScript";
    console.log(text);      //I love JavaScript
    let new text = text.replace("JavaScript","coding");
    console.log(text);      //I love coding

the replace() method is case-sensitive. so if the search not match then the replace would'nt be replaces

ex. let sentence = "I enjoy working with JavaScript";
    console.log(sentence)   //I enjoy working with JavaScript
    let update = sentence.replace("javascript","coding");
    console.log(sentence)   //I enjoy working with JavaScript

j is in javascript is lowercase on search but in actual sentence is J with uppercase, so no change are made

by default, the replace() method will only replace the first occurance of the searchValue. if the value have appears multiple times in the string, only the first one is made to replace.

ex. let phrase = "Hello, world! Welcome to the world of coding.";
    console.log(phrase);        //Hello, world! Welcome to the world of coding.
    let update = phrase.replace("world","universe");
    console.log(update);       //Hello, universe! Welcome to the world of coding.

notice only the first world is replaced with universe

in summary, replace() method is powerful and flexible tool for string manipulation. it lets you replace specific parts of string, wheter you're dealing with individual characters, words or complex patters using regular expressions.

while its ideal for straightforward replacements, understanding its case sensitive and default behaiour (like only replacing the first occurance) can help you use it more effectively

# repeat string x number of times
you may encounter situations where you need to repeat a string a specific number of times. wether you're generating repeated patters or simply duplicating text, the repeat() method provide simply and effective way to achieve this.

the repeat() method is a build-in function in javascript that allows you to repeat a string a specified number of times.

ex. let word = "Hello";
    let rpt = word.repeat(3);
    console.log(rpt);       //HelloHelloHello

while the repeat() method is useful, there are few exceptions and limitations to keep in mind. the count parameter must be a non-negative number. if you pass a negative number, javascript will throw a RangeError.

ex. let word = "test";
    console.log(word.repeat(-1));   // Throws RangeError: invalid count value

the count must be a finite number. if you try to repeat a string an infinite number of times or use infinity as the count, you will also get a rangeError.

in javascript, infinity is a special value that represents an infinite quantity. its used to donate numbers that are larger than any finite number.

ex. let word = "test";
    console.log(word.repeat(infinity));         //throws RangeErro: invalid count value

if the count is not a integer(such as a decimal like 2.5) the repeat() method will round it down to the nearest integer.

ex. let word = "test";
    console.log(word.repeat(2.5));      //testtest

if you pass 0 as the count, the repeat method will return empty string

ex. let word = "test";
    console.log(word.repeat(0));        //""

the repeat() method can simplify task that involve string duplication, making your code more concise and readable. wether or you're generating repeated text patterns or filling a space with characters repeat() can save you from writing loops or more complex code

you are not limited to passing number directly into the repeat() method. you can pass variable that stores number value.

ex. let count =4;
    let word = "test";
    let repeat = word.repeat(count);
    console.log(repeat);        //testtesttesttest

