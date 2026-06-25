# what is an Object in javasript, and how can you access properties from an object?
an object is a fundamental data strucutre that allows you to store and orginize related data and functionality.

you can think of an object as a container that holds various pieces of information, mcuh like a filling cabinet holds different folder and documents.

these pieces of information are called properties, and they consist of a name(or key) and a value.

ex. const exampleObject = {
        propertyName: value;
    }

objects are incredibly versatile and form the backbone of javascript. in fact, almost everthing in javascript is an object or can be treated as one. this includes arrays, functions, and even primiteve data types like strings and numbers when used in certain ways.

this object-centric nature of javascript is one of the reasons it's such a flexible and powerful language. let's look at how you can create an object:

ex. const person = {
        name: "alice",
        age = 30,
        city = "new york"
    } 

in this example, we've created an object called person with three properties: name, age, and city. each property has a name and value, seperated by a colon.

now, let's explore how you can access these proeperties. there are two main ways to access object properties in javascript: dot notation and brakcet notation.

dot notation is the most common and straightforwardd way to access object properties:

ex. objectName.propertyName;

here's how you would use dot notation with our person object:

ex. const person = {
        name: "alice",
        age: 30,
        city: "new york"
    }

    console.log(person.name);   //alice
    console.log(person.age);    //30
    console.log(person.city);   //new york

dot notation is concise and easy to read, making it the preferred choice when you know the exact name of the property you want to access and that name is a valid javascript identifier(meaning it doesn't start with a number and doesn't contain special characters or spaces).

bracket notation, on other hand allows you to access object properties using a string inside square brackets. here's how you would use bracket notation:

ex. const person = {
        name: "alice",
        age: 30,
        city: "new york"
    }

    console.log(person["name"]);        //alice
    console.log(person["age"]);         //30

brakcet notation is more flexible than dot notation because it allows you to use property names that aren't valid javascript identifiers. for example, if you had a property name with spaces or that start with a number, you'd need to use bracket notation:

ex. const oddObject = {
        "1stProperty": "hello",
        "property with spaces": "world"
    }

    console.log(oddObject["1stProperty"]);              //hello
    console.log(oddObject["property with spaces"]);     //world

another advange of bracket notation is that it allows you to use variable to access properties dynamacally:

ex. const person = {
        name: "alice",
        age: 30,
        city: "wonderland"
    }

    let propertyName = "city";
    console.log(person[propertyName]);  //wonderland

this flexibility make bracket notation paricularly useful when you don't know the exact property name at the time you're writing the code, or when you're working with property names that come from user input or some other dynamic source.

it's worth nothing that object in javascript are incredibly powerful and versatile. they can contain not just simple values like strings and numbers, but also arrays, or other objects.

understanding objects and how to work with them is crucial in javascript because they're use extensibely throughout the language and in many javascript libraries and frameworks.

# how can you remove properties from an object?
there are several ways to remove properties from an object, with the delete opeartor being the most straightforward and commonly used method.

when you use delete, it removes the selected property from the object. her's an exammple of how to use the delete operator:

ex. const person = {
        name: "alice",
        age: 30,
        job: "engineer"
    }
    delete person.job;
    console.log(person.job);        //undefined

in this example, we start with a person object that has three properties: name, age, and job. then we use the delete opeartor to remove the job property. aftre the deletion, the person object no longer has the job property.

another way to remove properties is by using destructuring assignment with rest parameters. this approach doesn't actually delete the property, but it creates a new object without the specified properties:

ex. const person = {
        name: "bob",
        age: 25,
        job: "designer",
        city: "new york"
    }

    const {job, city, ...remainingProperties} = person
    console.log(remainingProperties);       //{name: "bob", age: 25}

in this example, we use destructuring to extrat job and city from the person object, and collect the remainning properties into a new obejct called remainingProperties. this creates a new object without the job and city properties.

understanding how to remove properties from objecs is an important skill in javascript programming. it allows you to manipulate objects dynamically, and clean up unncessary data.

# how to check if an object has a property?
in javascript, there are several ways to check if an object has a specific property. understanding these methods is important for working effectively. with objects, especially when you're dealing with data from external sources or when you need to ensure certain properties exist before using them.

we'll explore some common approachs: the hasOwnProperty() method, the Object.hasOwn() method, the in operator, and chcking againts undefined.

let's start with the hasOwnProperty() method. this method returns a boolean indicating whether the object has the specified property as its own property. here's an example:

ex. const person = {
        name: alice,
        age: 30
    }

    console.log(person.hasOwnProperty("name")); //true
    console.log(person.hasOwnProperty("job"));  //false

in this example, the hasOwnProperty() method will return true if  name is a property in the person obejct, but if there is no correct property name in the object like job, it will return false because it does not exist in the object.

Object.hasOwn() is the modern, recommended way to check if an object has a property as its own(not inherited). think of it as an upgraded, safer version of hasOwnProperty(). the syntax is Object.hasOwn(object, propertyName), you pass the object as the first argument and the property name as the second.

ex. const person = {
        name: "alice",
        age: 30
    }

    console.log(Object.hasOwn(person, "name"));     //true
    console.log(Object.hasOwn(person, "job"));      //false

a very important thing to understand is that Object.hasOwn() only checks if the property exists it does not care about the property value. this means it still returns true even when the value is 0, false, null, or undefined.

ex. const user = {
        username: "fauzyfath",
        score: 0,
        isActive: false,
        nickName: null
    }
    
    //Object.hasOwn() correctly reports these all exist
    console.log(Objec.hasOwn(user, "score"));        //true (value is 0, but property exist)
    console.log(Objec.hasOwn(user, "isActive"));     //true (value is false, but property exist)
    console.log(Objec.hasOwn(user, "nickName"));     //true (value is null, but property exist)
    console.log(Objec.hasOwn(user, "email"));       //false (property does not exist)

    //DANGER! using if() directly gives wrong results for falsy values
    if(user.score){
        console.log("has score");       //this will not print even though score is exist
    }

    //safe! object.hasOwn() gives correct result
    if(object.hasOwn(user,"score")){
        console.log("has score:",user.score);
    }

another way to check for the existence of a property in an object is to use the in operator.like hasOwnProperty(), the in opertor will return true if the property exist on the object. here's how you can use it:

ex. const person = {
        name: "bob",
        age:23
    }

    console.log("name" in person);      //true

the third methods involves checking if a property is undefined. this approach can be useful, but it has some limitations. heres an example:

ex. const car = {
        brand: "toyota",
        model: "corola",
        year: 2020
    }

    console.log(car.brand !== undefined);   //true
    console.log(car.color !== undefined);   //false

this works because accessing a non-existent property on an object return undefined. however, this method can give false negative if a property explicityly has the value undefined.

in practive, the choice between these methods often depends on the specific requiremnets of your code. understanding the differences between them will help you make the right choice in different scenarios.

# how do you work with accessing properties from nested objects and arrays in objects?
you'll often encounter complex data structure that involve nested objects and arryas within objects. these structure can respresent rich, hierarchical data, but they also require a clear understanding of how to acccess and manipulate the data within them. let's explore how to navigate these nested structure effectively.

accessing properties from nested objects involves using the dot notation or bracker notation, much like accessing properties from simple objects. however you'll need to chain these accessors to drill down into the nested structure.

le'ts consider a nested object representing a person with contact information:

ex. const person = {
        name: "alice";
        age: 30,
        contact: {
            email: "alice@example.com",
            phone{
                home: "123-132-231312",
                work: "132-411-313132"
            }
        }
    }

to access alice work phone number, you would chain the property accessor like this:

ex. const person = {
        name: "alice";
        age: 30,
        contact: {
            email: "alice@example.com",
            phone{
                home: "123-132-231312",
                work: "132-411-313132"
            }
        }
    }
    console.log(person.contact.phone.work); //"132-411-313132"

you can also use bracket notation, which is particularly useful when property names include spaces or special characters, or when you're using variables to access properties:

ex. const person = {
        name: "alice";
        age: 30,
        contact: {
            email: "alice@example.com",
            phone{
                home: "123-132-231312",
                work: "132-411-313132"
            }
        }
    }
    console.log(person['contact']['phone']['work']);    //"132-411-313132"

now, let's take a look at how we can access data where one of the object properties has the value of an array. here  is a modified person object that includes an array of addresses:

ex. const person = {
        name: "alice";
        age: 30,
        contact: {
            email: "alice@example.com",
            phone{
                home: "123-132-231312",
                work: "132-411-313132"
            }
        }
        addresses: {
            {type: "home", street: "123 main st", city: "mks"}
            {type: "work", street: "312 work st", city: "jakarta"}
        }
    }

here is an example of how to access alice work address city:

ex. const person = {
        name: "alice";
        age: 30,
        contact: {
            email: "alice@example.com",
            phone{
                home: "123-132-231312",
                work: "132-411-313132"
            }
        }
        addresses: {
            {type: "home", street: "123 main st", city: "mks"}
            {type: "work", street: "312 work st", city: "jakarta"}
        }
    }

    console.log(person.addresses[1].city);      //jakarta

in this example, person.addresses refers to the array of addresses. to access the second address in that array, we use bracket notation and index 1. then, we use dot notation to access the city from that addresses object

understanding how to access properties in nested objects and arrays is essential when working with complex data structures.

# what is the difference between primitive and non-primitvie data types?
understanding the difference between primitive and non-primitive data types is important for writing efficient and bug-free code

these two categories of data types behave differently in terms of how they are stored in memeory and how they are manipulated in your programs.

primitive data types are the simplest form of data in javascript. they include number, bigint, string, boolean, null, undefined, and symbol. these types are called "primitive" because they represent single values and are not objects.

when you work with primitive data types, you're dealing direcly with their values. for example, when you create a variable with a primitive value, that value is stored directly in the variable. 

primitive values are immutable, which means once they are created, their value cannot be changed. however, you can reassing a new value to the variable. here's an example of working with primitive data types:

ex. let num1 = 5;
    let num2 = num1;

    num1 = 10;

    console.log(num2);      //5

this creates an independent copy of the value. as a resul, any changes made to the original variable(num1) do not affect the copy(num2).

non-primitive data types, on the other hand, are more complex. in javascript, these are objects, which include regular objects, arrays, and functions. unlike primitives, non-primitive types can hold multiple values as properties or elements.

when you create a variable with a non-primitive value, what's stored in the variable is actually a reference to the location in memeory where the object is stored, not the object itself. this leads to some important differences in behaviour.

ex. const originalPerson = {name: "john", age:23};
    const copiedPerson = originalPerson.

    originalPerson.age = 13;

    console.log(copiedPerson.age);      //13

in this example we have an object called originalPerson with two properties of name and age. we then assigned the originalPerson object to a variable called copiedPerson.

then we update the age value for the originalPerson object. when we log the age property of copiedPerson obeject it shows the updated value.

but why is that happening? this occurs because both original person and copiedPerson are referencing the same object in memeory.

when you assinged an object to another variable, you're copying the reference to the object, not the object itself. this is known as shallow copying by reference. as a result, any changes made to the obejct through one reference are reflected in all refrences to that object.

# what is the difference between functions and object method?
functions and obejct methods are both ways to encapsulate reusable code, but they have some key difference in how they are defined, used, and the context in which they operated. understanding these differences is crucial for writing effective and organized code.

as you learned in earlier modules, functions are reusable blocks of code that perform a specific task:

ex. function greet(num){
        return "hello" + name + "!";
    }
    console.log(greet("alice"));        //Hello,alice

object methods on the other hand, are function that are associated with an object. they are defined as properties of an object and can access and manipulate the objects data.

ex. const person = {
        name: "bob",
        age:12,
        sayHello: function(){
            return "hello, my name is + this.name;    
        }
    }

    console.log(person.sayHello());     //hello, my name is bob

in this example, sayHello() is a method of the person object. the this keyword allows the sayHello method to access the properties of the object named person.

a difference between functions and methods is how they are invoked. functions a re called by their name, while methods are called using dot notion on the object they belong to. for example, we call the greet function as greet("alice"), but we call the sayHello method as person.sayHello().

another important difference is the context in which they operate. regular functions have their own scope, but they don't have a build-in reference to any particular object. methods, however are bound to their object and can access its properties and other methods using the this keyword.

a key point to note is that, methods help in organizing code into logical objects, while functions are used for more general, reusable code. 

understanding the differnece between function and object methods is important as you progress in your journey. while they may seem similiar at first, recognizing when to use each will help you write more organized, efficient and better code.

# what is the object() constructor, and when should you use it?
a constructor is a special type of funciton used to create and initialize objects. it is invoked with the new keyword and can initialize properties and methods on the newly created object.

in this lesson, we will take a look at how to work with the object() constructor. the object() constructor creates a new empty object.

ex. new object();

when you call new object(), it returns a new object that can be used to store values.

the object() constructor can be used with or without the new keyword. when called as a function without new, it behaves differntly depenting on the type of value passed to it. here's an example of using the object() constructor without the new keyword:

ex. const num= 32;
    const numObj = object(num);     //creates an object wrapper for the num

    console.log(numObj);            //{num}
    console.log(typeof numObj);     //object

as you can see in the second console.log, numObj is an object. this is happening because we used the object() constructor to turn that input of a number into an object.

what happens if we try to pass null or undefined to the object() constructor?

ex. const newObj = new Object(undefined);
    console.log(newObj);        //{}

well, the result will be an empty object. another use case for the object() constructor is when you're working with a value of unknown type and you need to ensure it's an object. let's take a look at the following example:

ex. function toObject(value){
        if(value === null || value ===undefined){
            return {};
        }
        if(typeof value === "object"){
            return value;
        }
    }

    console.log(toObject(null));        //{}
    console.log(toObject(true));        //{undefined}
    console.log(toObject([1,2,3]));     //[1,2,3]

in this example, we have a function called toObject. the seocnd condition will check if the value is a type of object and will return the value if the condition is true. this condition will check for object as well as arrays since are special types of objects.

if neither of the conditions is true, the functions returns Object(value), which converts the input into an object. this works for values like numbers, strings and booleans.

most of the time you will not be using the Object() constructor to create a new object because you will be using object literal syntax instead(e.g const objectLiteral = {name: "Beau"}). but it is still good to understand the basic of working with object constructor

# what is JSON, and how do you access values using bracket and dot notation?
JSON stands for javascript object notation. it is a lightweight, text-based data format that is commonly used to exchange data between a server and a web application.

one of the reason why JSON is so popular in web development is because it is both machine-parseable and human-readable

since JSON is language-independent, you can easily semd JSON data form a java application to a python, or from a javascript applicaition to a C# application.

JSOn supports many data types including objects, array, strings, booleans, null, and numbers.

here's an example of a JSON object:
ex. {
        "name": "alice",
        "age": 30,
        "isStudent": false,
        "list of course": ["math", "physics", "computer science"];
    }

as you can see, JSON uses key-value pairs to store information and each pair is seperated by a comma, each key must be wrapped in double quotes, otherwise you will get an error.

to access data from a JSON object, you can either use dot or bracket notaiton. in this example, we are using dot notation to access the age from the JSOn object:

ex. import data from './example.json" with {type: "json"};
    console.log(data.age);

this particular example is using what is known as an import statement, which imports the JSON object into this file so we have access to it. you will learn more about the import statement in a future lesson.

you can also use bracket notaiton to access information from JSON objects. here is an example of accessing the list of course array:

ex. import data from "./example.json" with {type:"json"};
    console.log(data["list of courses"]);

using bracket notation is particularly useful here because the key contains multiple words seperated by spaces. if we tried to use dot notation, it would result in an error.

in summary, JSON is a versatile format that can store many data types, including arrays and nested objects. by using dot notation or bracket notation, you can easily access the value stored within a JSON object.

# how do JSOn.parse() and JSON.stringify() work?
there are two powerful methods in javascript for handling JSON data: JSON.parse() and JSON.stringify(). these methods are commonly used to convert between JSON strings and javascript objects.

JSON.stringify() is used to convert a javascript object into a JSON string. this is useful when you want to store or transmit data in a format that can be easily shared or transfered between systems.

here's how you can use the JSON.stringify() method:

ex. const user = {
        name: "john",
        age: 30,
        isAdmin: true
    };

    const jsonString = JSON. stringify(user);
    console.log(jsonString);     //{name: "john", age: 30, isAdmin: true}

the JSON. stringify() method also accepts an optional parameter called a replacer, which can be a function or an array. here is an example of using an array for the optional replacer parameter:

ex. const developerObj = {
        firstName: "john",
        isAwesome: true,
        isMusician: true,
        country: "USA"
    };
    //result: {"firstName": "john", "country": "USA"}
     console.log(JSON.stringify(developerObj, ["firstName", "country"]));;

in this example, we have a developerObj with four properties. when we use the JSON.stringify() method, we  can pass in an array for the second parameter and specify which properties we want stringified. the result will be a stringified object containing only the firstName and country properties.

another optional parameter for the JSON.stringify() method would be the spacer parameter. this allows you to control the spacing for the stringified result:

ex. const developerObj = {
        firstName: "john",
        isAwesome: true,
        isMusician: true,
        country: "USA"
    };

    console.log(JSON.stringify(developerObj, null, 2));
    
    <!--  result 
        {
            "firstName": "john",
            "isAwesome": true,
            "isMusician": true,
            "country": "USA"
        }
     -->

most of the time you will not be using either of these optional paramenetrs for the JSON.stringify() method but it is still helpful to be aware of them.

another method you will be using a lot in your programming is the JSON.parse() method. JSON.parse() converts JSON string back into a javascript object. this is useful when you retrieve JSON data from a web server or from localStorage and you need to manipulate the data in you application. you will learn more about localStorage in the future lesson.

here's an example on how to work with the JSON.parse() method:

ex. const jsonString = '{"firstName": "john", "isAwesome": true, "isMusician": true, "country": "USA"}';

    const userObject = JSON.parse(jsonString);
    console.log(userObject);

    <!-- 
        Result:
        {
            firstName: "john",
            isAwesome: true,
            isMusician: true,
            country: "USA"
        }
     -->

this allows you to work with the data in your programs as a normal javascript object, making it easier to manipulate and use.

# what is the optional chaining operator, and how does it work?
the optional chaining operator(?.) is a useful tool in a javascript that lets you safely access object properties or call methods without worrying wheter they exist. it's like a safety net for working with objects that might have missing parts:

ex. const person = {
        name: "alice",
        age: 30
    };

    console.log(person.name);       //"alice",
    console.log(person.job);        //undefined

in this example, person.name exist, so it logs value. but person.job doesn't exist so it logs undefined.

now, lets' say we want to access a property of an object that might not exist:

ex. const person = {
        name: "alice",
        age: 50
    }

    console.log(person.address.street); //this will throw error

this example will throw an uncaught typeError. since person.address is undefined, we are not able to access the street property. this is where the optional chaining operator comes in handy. here is an example of using the optional chaining operator:

ex. const user = {
        name: "john",
        profile: {
            email: "john@example.com"
            address: {
                street: "123 main st",
                city: "somewhere"
            }
        }
    }

    console.log(user?.profile?.address?.street);        //"123 main st"
    console.log(user?.profile?.phone?.number);          //undefined

by using the optional chaining operator, we are telling javascript to only continue with the operation if the object(or the value before the ?.) exists and is not null or undefined.

if the value before the ?. is null or undefined, javascript returns undefined rather than attempting to proceed with the operations and throwing an error.

remember, the optional chaining operator is most useful when you're not use if a property or method exist. it helps prevent errors and makes your code more robust.

# what is object destructuring, and how does it work?
object destructuring is a powerful in javascript that allows you to extract values from objects and assign them to variables in a more concise and readable way.

it's part of the ES6 specification and has become an essential tool for many javascript developer.

destructuing can simplify your code, especially when working with complex objects or when you need to extract multiple values at once.

at its core, object destructuring is about unpacking values from objects into distinct varaible. instead of accessing object properties one by one, you can extract multiple properties in a single statement. this can make your code cleaner and more efficient.

let's start with an example to illustrate how object destructuring works:

ex. const person = { name: "john", age: 40, city: "new york"};
    const {name, age} = person

    console.log(name); //john
    console.log(age);  //40

in this example, we're extracting the name and age properties from the person object and assigning them to variables with the same names.

one of the powerful aspects of objects destructuring is that you can assign the extracted values to variable with different names. this is particularly useful when you're working with objects that have property names that might conflict with existing variables or when you want to use different names:

ex. let person = { name: "john", age: 40, city: "new york"};
    let {name: personName, age: personAge} = person;

    console.log(personName);        //alice
    console.log(personAge);         //30

in this case, we're extracting the name property and assigning it to a variable called personName, and doing the same with age and personAge.

Object destructuring also allows you to set default values. if a property doesn't exist in the object you're destructuring, you can specify a fallback value:

ex. let person = { name: "john", age: 40, city: "new york"};
    lat {name, age, country = "unknown"} = person

    console.log(country);       //unknown

here, since country doesn't exist in our person object, it gets the default value unknown

another common case is nested object destructuring. you can destrucure properties nested inside other objects by using another set of braces:

ex. const recipe = {
        name: "chocolate cake",
        ingredients: {
            flour: "2 cups",
            sugar: "1 cup"
        }
    }

    const {ingredients: {flour}} = recipe;

    console.log(flour);     //"2 cups"

this is equivalent to accessing the property directyly:

ex. const flour = recipe.ingredients.flour;
    console.log(flour);

Now, let's talk about the shorthand notation in object destructuring. when you're creating objects, especially when the property names match variable names, you can use a shorthand syntax:

ex. let name = "bob;
    let age = 25;

    let person = {name, age};

    console.log(person);    //{name: "bob", age: 25};

the code above takes the properties with the same name as our variables and assings them the values of those variables.

this shorthand notation is particularly useful when you're returning object from functions or creating objects with multiple properties:

ex. function createPerson(name, age){
        return {name, age};
    }

    let person = createPerson("charlie", 35);
    console,log(person);        //{name: "charlie", age: 35};

object destructuring and the shorthand object notation are powerful features that can make concise and easier to read.

they're espicially useful when working with complex data strucutre, or when you need to pass multiple parameters to function

as you continue to work with javascript, you'll find many situatuins where these technique your code and make it more expressive.

