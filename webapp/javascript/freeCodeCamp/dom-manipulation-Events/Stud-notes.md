# what is an API and what are web APIs?
let's learn about API's and why they're essential for web development. APi stands for Application Programming Interface. APIs establish a set of rules and protocols that allow software application to communicate with each other and exchange data efficiently.

you can think of them as construct that allow developers to create more complex functionality based on simpler building blocks that are already implemented.

there are various types of APIs. Web APIs are specifically designed for web applications. there are different types of web APIs for client-side javascript developemnt. they are not part of javascript itself.

these types of APIs are often divided into two main categories: browser APIs and third-party APIs.

browser APIs expose data from the browser. as a web developer, you can access and manipulate this data using javascript.

they also provide access to various functionalites, such as manipulating the structure of the website, handling events, working with storage, and communicating with the network.

some example of commonly used browsers APIs include:

The DOM API, which you can use to manipulate HTML elements, their styles, and attribute. you will learn much more about the DOM in the comming lessons. its  a core concept in web development.

the storage API, to store data locally on the user's device.

and more.

there are various browser APIs that you can use to handle user interactions and to get more information from the browser, like the users, current location.

you can alos work with other types of elements, such as video and audio.

browser APIs can be helpful tools for building powerful web applications. they already come built into the browser.

but you can also use third-party APIs, which are not build into the browser by default. to use them, you need to retrieve their code in some way, typically, they come with detailed documentation explaining how to use their services.

an example is the google maps API, which you can use to display interactive maps on your website.

there are various types of third-party web APIs, including weather APIs, social media APIs, payment APIs, data APIs, translation APIs, and more. you just need to find the API that fits your needs.

web APIs  are essential tools for building modern web applications that can interact with various service and data sources. by learning how to leverage their power, you will expand your toolset for creating dynamic and engaging websites.

# what is the DOM, and how do you access elements?
let's learn about the dom and why it's so important for we developement. DOM stands for Document Object Method. it's a programming interface that lets us interact with HTML documents.

with the DOM, you can add, modify, or delete elements on a webpage. you can even make your website interactive by making elements listen to and respont to events.

in the DOM, an HTML document is repsented as a tree of nodes. each element node represent an HTML element from the HTML document:

ex. 

<!DOCTYPE HTML>
<html lang = "en">
    <head>
        <title>DOM EXAMPLE </title>
    <head>
    <body>
        <h1>what is the dom?</h1>
        <h2>let's learn about the dom</h2>
    </body>
</html>

this is a diagram representing the basic DOM structure of our example:

ex. 

Document
========

html
--------

- head
    -title
-body
    -h1
    -h2

of course, this can be more detailed and complex based on the structure of the HTML markup of a webpage.

the HTML document is the root node in the DOM hierarchy. it has one child node, the html element. this is the root element of the html document, since all other nodes descend from it.

the html element has two children: head and body

the head element contains metadata about the document. it provides essential information about the webpage.

the body element contains the visible content of the webpage.

you can access these elements with javascript, work with them in your code, and even modify them dynamacally. that's the power of the DOM and web APIs.

to access these elements in javascript, you can use the getElementById() and querySelecetor() methods. these methods are web APIs because they provide standardized ways to interact with DOm using Javascript.

with getElementById() you can get an object that represents the HTML element with the specified id. remember that ids must be unique in every HTML document, so this method will only return one element object. here you can see an example:

ex. const container = document.getElementById("container");

this line of javascript code gets an element with the id value of container and assigns that object to a javascript constant. you must pass the id within quotation marks as an argument. if you log this object to the console, you will see it in the output:

ex. 

<div id="container">
    <h1>hello,worl</h1>
    <p>welcome to learning about the DOM.</p>
</div>
<script src = "index.cs"></script>

const container = document.getElementById("container");
console.log(container);

querySelecetor() is broader that getElementById. with querySelecetor() you can get the first Element in the html document that matches the CSS selector passes as argument.

in this example, you will get the element that matches the sections selector:

ex. 

<section>
    <h2>section Title</h2>
    <p>this is a section of the webpage</p>
</section>
<script src = "index.js"></script>

const sectionEL = document.querySelecetor("section")
console.log(sectionEL);

if you want to select an element by its class name using querySelecetor(), you need to prefix the class name with a dot(.). here's an example:

<link rel= "stylesheet" href="style.css">
<div class="highlight">
    <p>this content is highlighted</p>
</div>
<script src = "index.js"></script>

body{
    background-color: lightgray;
}
.highlight{
    background-color: yellow;
}

const highlightEl = document.querySelecetor(".highlight");
console.log(highlightEl);

you also have other methods to match multiple elemets, like getElementsByClassName() and querySelectorAll(). you'll learn more about them in future lessons.

by understanding how to use web APIs to manipulate the DOM efficiently, you can create powerful and interactive web applications.

# how do DOM nodes exist relative to each other in the DOM tree?
let's learn about DOM nodes and thier relationships in the DOM tree.

just as a real tree has large and small brances connected in hierarchical structure, DOM nodes also have direct and indirect relationships with one another. we will use this example to illustrate these realtionships.

ex. 
<!DOCTYPE html>
<html>
    <head>
        <title>DOM Tree Example</title>
    </head>
    <body>
        <h1>heading 1</h1>
        <p>paragraphs 1 </p>
        <ul>
            <li>list 1</li>
            <li>list 2</li>
        </ul>
    </body>
</html>

let's start at the top. the root of the DOM tree is the html element. it's the top-level container for all the content of an HTML document. all other nodes are descendant of this root node.

then, below the root node, we find other nodes in the hierarchy. A parent node is an element that contains other elements.  a child node is an element that is contained within another element.

in this example, the body elements is the parent of the paragraph  element while the paragraph element is a child of the body element. these elements are represented as nodes in the DOM tree with the same relationships.

just liek we have parent nodes and child nodes, we alsoe have sibling nodes. sibling nodes are elements that share the same parent. in our example, two list item elements share the same unordered list parent, so they are siblings.

similiarly the h1 and paragraphs elements are siblings because they share the same parent, the body element.

we also have indirect relationships across different levels in the hierarchy. descendant nodes are elements that are contained within another element, either directly or indirectly. an elements is considered a descended of another one if it can be reached by going through the DOM tree downwards from its ancestor.

in our example, the list item li elements are descendants of the body element, since they are indirectly contained within it.

an ancestor node is an element that is higher up in the DOM tree hierarchly than another element. in our example, the body elements is an ancestor of the list item li elements.

understanding these relationships is essential for manipulating and navigating the DOM tree using javascript.

# what is the querySelectorAll() method, and when should you use it?
let's learn about the querySelectoAll() method. you can use this method to get a list of all the DOM elements that match a specific CSS selector.

this is how you can call the querySelectorAll() method:

ex. document.querySelectorAll(selectors);

call it on the document object and pass a string with the css selectors as an argument. the argument must be a valid css selector string. otherwise, a syntaxError exception will be thrown.

call it on the document object and pass a string with the css selectors as an argument. the argument must be a valid CSS selector string. otherwise, a syntaxError exception will be thrown.

querySelectorAll() returns a NodeList object, a collection of nodes that match the specified CSS Selector.

the list will contain one element object for each element that matches the CSS selectors. if no matches are found, the list will be empty.

the elements will be in the order in which they appear in the HTML document. for example, you can match all elements of a specific type:

ex. document.querySelectorAll("div");

all elements with a specific class:

ex. document.querySelectorAll(".rounded");

all elements with a specific ID:

ex. document.querySelectorAll("#logo");

or all elements with a specific attribute, like all links that take users to a specific URL:

ex. document.querySelectorALL("a[href='https://www.freecodecamp.org/']")

you can also use more complex css selectors, like this one, which matches all list items within an unordered list elements with the class ingredients:

ex. documents.querySelectorAll("ul.ingredients li")

since the method will return a collection of nodes, you can assign this collection to a variable and use it in your programs to work with the individual elements, like you can see in this example with the general syntax:

ex. const matches = document.querySelectoAll(selectors);

for Example, if you have this unordered list with three list items:

ex.
    <ul class="ingredients">
        <li>flour</li>
        <li>cheese</li>
        <li>water</li>
    </ul>

you can call the querySelectorAll() method to match all list items within the unordered list with the class ingredients and assigns the return value to the matches constant:

ex. const matches = document.querySelectorAll("ul.ingredients li)

this will return a collection of three nodes. each node represents a list item element:

ex. //nodeList(3)
    {
        0: `<li>flour</li>`,
        1: `<li>cheese</li>`,
        2: `<li>water</li>`,
        length:3
    }

you can work with this collection exactly like you would work with any other javascript array.

for example, you can show it in the console with console.log():

ex. console.log(matches);

you can also check the length of the collection with the length prorperty:

ex. console.log(matches.length);

the outpur will be an integer representing the number of nodes in the collection:

output: 3

you can also access the individual elements of the collection with their corresponding indices. the first element will be at index 0:

ex. console.log(matches[0]);
    console.log(matches[1]);
    console.log(matches[2]);

this is the output:

output:
    <li>flour</li>
    <li>cheese</li>
    <li>water</li>

the elemetns are printed one by one on the console.

you can also iterate over the elements with a for loop:

ex. for(let i = 0; i<matches.length; i++){
        console.log(matches[i])
    }

the output will be exactly the same in this case. but this can be very powerful for working with all the elements of the collection.

the querySelectorAll() method in javascript is a powerful tool for selecting multiple elements based on their CSS selectors. with this method, you can select specifict elements within your web pages and manipulate them as needed

# how do you create new nodes using innerHTML and createElement()?
let's see how you can create nodes with innerHTML and createElement().

we'll start with innerHTML.

innerHTML is a property of Element objects that you can use to set their HTML markup. with innerHTML, you can set the HTML structure of an existing element with a string, creating all the necessary nodes.

this is an example. we have an empty div and we'll add some elements within it using the innerHTML property:

ex. 
    <div id="container">
        <!-- add new elements here -->
    </div>

first we need to select the element by its ID:

ex. const container = document.getElementById("container");

then we set the innerHTML property of the container to a string. this string has to have all the markup necessary to represent the nodes and the structure that you want to create. you can think of it as writing HTML within a string.

ex. 
    <div id="container"></div>;
    <script src="index.js"></script>

    const container = document.getElementById("contianer");
    container.innerHTML = "<ul><li>cheese</li><li>tomato</li></ul>"

we will set the innerHTML of this element to an unordered list of pizza ingredients (cheese and tomato)

you can also write the string on multiple lines if it makes the markup easier to understand. the important thin is that the markup accurately represents the HTML structure you want to create.

after running this code, you will see the following HTML structure if you inspect your markup.

output.
    <div id="container">
        <ul>
            <li>cheese</li>
            <li>tomato</li>
        </ul>
    </div>

this new nodes were created and added dynamically to the DOM after the string was parsed.

innerHTML can be very helpful for certain scenarios. however, it does have some security risks that you should be familliar with. you shouldn't use it if you won't have full control over the string.

for example, if the string will be entered by the user, you shouldn't use innerHTML because the user might insert malicious content into your website. because of this, it's usually recommended to use textContent instead, to insert plain text.

another way to create a new node is by using the createElement() method. with this new method, you can create a new element by specifying its tag name.

for example, if you want to create an image element, you would pass the img tag as a string when calling this method:

ex. document.createElement("img");

and you can assign this new object to a variable:

ex. const img = document.createElement("img");

the createElement() method returns a new HTMLElement object if the document is an HTMLDocument. else it returns an element Object.

once you have this new element ready, you can add it to the DOM as a child of another existing element using the appendChild() method, or you can insert it at a specific location using other methods. choose the one tha tbest fits your needs.

ex. 

<div id="container"></div>
<script src="index.js"></script>

const container = document.getElementById("container");
const img = document.createElement("img");
img.src = "https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg";
img.alt = "A slice of lasagna on a plate";
container.appendChild(img);

creating nodes with innerHTML and createElement() allows you to dynamically manipulate the structure and content of your website. by combining these techniques, you can build interactive web applications.

# what is the difference between innerTExt, textContent, and innerHTML?

let's learn about innerText, textContent, and innerHTML.

these are properties that you can access in javascript to get or change the content of an HTML element. even if they may look very similiar at first, they do have key differences. choosing the right one depends on your specific use case, so let's dive in.

let's start with innerText.

innerText represents the visible text content of the HTML element and its desencdants. this property doesn't include hidden text or HTML tags, only rendered text. 

for exampe, here you can see a div element that contains two paragraphs:

ex. 
<div id="container">
    <p>Hello, World</p>
    <p>i'm learning JS</p>
</div>

if we get a reference to this HTML element in our javascript code using getElementById(), we can acces the innerText property of this element:

ex. 
<div id="container">
    <p>Hello, World</p>
    <p>i'm learning JS</p>
</div>
<script src="index.js"></script>

const container = document.getElementById("container");
console.log(container.innerText);

this is the inner text of this element:

output:
Hello, World
i'm learning JS

the property returns a string with the text contained within the element, including text from its descenddants. 

you should know that innerText only returns the text that is visible at the particularly moment when the string is requested. if a child element is hidden, its text won't be visible.

this is an example where the second paragraph is hidden:

ex. 
<div id="container">
    <p>Hello, World</p>
    <p hidden>i'm learning JS</p>
</div>

if we try to log the innerText again, now the output won't have the text of the second paragraph:

ex.
<div id="container">
    <p>Hello, World</p>
    <p hidden>i'm learning JS</p>
</div>
<script src="index.js"></script>

const container = document.getElementById(container);
console.log(container.innerText);

you can set the innerText of an HTML element like this, but this will replace the existing text and add a line break element(br) element for every line break:

ex. 

<div id="container">
    <p>Hello, World</p>
    <p>i'm learning JS</p>
</div>
<script src="index.js"></script>

const container = document.getElementById("container");
container.innerText = "javascript is awesome"

since innerText takes visibility into account, getting its value triggers a process called "reflow", tha recalculates the position of certain elements on the website. this process can be computationally intensive, so you should avoid triggering it if possible.

great. now lets' talk about textContent

textContent return the plain text content of an element, including all the text within its descendants.

the most important difference between innerText and textContent is that textContent always returns the full text content of an HTML element and its descendants, regardless of whether its visible or hidden.

here we have the same example in HTML:

ex. 

<div id="container">
    <p>Hello, World</p>
    <p>i'm learning JS</p>
</div>

if you try to access this property, you'll see the text of the element and its descendant as the output, keeping the indetation and spacing:

ex.
<div id="container">
    <p>Hello, World</p>
    <p>i'm learning JS</p>
</div>
<script src="index.js"></script>

const container = getElementById(container);
console.log(container.textContent);

if an HTML element is not visible, like you can see over here, where we've hidden the second paragraph, its text will still be included in this property:

ex. 

<div id="container">
    <p>Hello, World</p>
    <p hidden>i'm learning JS</p>
</div>
<script src="index.js"></script>

const containe = document.getElementById(container);
console.log(container.textContent);

textContent will also included the content of elements like script and style.

if you try to replcae the value of textContent on a node, it will remove all its child nodes and replace them with a single text node containing the new string:

ex. 

<div id="container">
    <p>Hello, World</p>
    <p>i'm learning JS</p>
</div>
<script src="index.js"></script>

const container = document.getElementById("container");
container.textContent = "new content"

and finally, let's talk about how textContent and innerText differs from innerHTML

remember that with innerHTML you can set the innerHTML content of an element. this is helpful for injecting new HTML into the DOM dynamically

however, remember that his poses a security risk if you don't have control over the string, such as strings containing data entered by the user. if the data is malicious, it can lead to serious security issues.

to avoid this, it's recommended to use the textContent property to insert plain text instead.

the innerText, textContent, and innerHTML properties in javascript provide different ways to access and manipulate the content of HTML elements. you should understand the difference between these properties if your goal is to work with HTML content in javascript effectively.

# how do you add and remove nodes from the DOM with appendChild() and removeChild()

there will be times where you will need to add or remove nodes from the DOM and there are a couple of WEB APIs you can use.

in this lesson, we will cover the appendChild() and removeChild() methods.

the appendChild() method is used to add a node to the end of the list of children of a specified parent node.

here is the basic syntax for the appendChild() method:

ex. parentNode.appendChild(newNode);

let's take a look at an example to better understanding how to use the appendChild() method.

in this example, we have an unordered list element with an ID of desserts inside the HTML. this list contains two list items of cake and pie:

ex. 
<ul id="desserts">
    <li>cakse</li>
    <li>pie</li>
</ul>

to access that list inside the javascript file, we can use the getElementById() method:

const dessertList = document.getElementById("desserts");

we have a variable called dessertList that store the reference to the ul element with the ID of desserts.

then we need to create a new list item element using the createElement() method:

ex.
const dessertList = document.getElementById("desserts");
const listItem = document.createElement("li")

the following code will create a new list item element and store it in a variable called listItem.

to add that node to the end of the list of childeren of the ul element, we can use the appendChild() method:

ex.
const dessertList = document.getElementById("desserts");
const listItem = document.createElement("li")

dessertList.appendChild(listItem);

if you were to run this code, you will see that a new list item element is added to the end of the list of childeren of the ul element.

ex. 
<ul id="desserts">
    <li>cakse</li>
    <li>pie</li>
</ul>
<script src="index.js"></script>

const dessertList = document.getElementById("desserts");
const listItem = document.createElement("li")

dessertList.appendChild(listItem);

the problem is that the new list item element is empty. to add text content to the new list item element, you can use the textContent property:

ex. 
<ul id="desserts">
    <li>cakse</li>
    <li>pie</li>
</ul>
<script src="index.js"></script>

const dessertList = document.getElementById("desserts");
const listItem = document.createElement("li")

listItem.textContent = "coookies";
dessertList.appendChild(listItem);

now the list will show cake, pie, and cookies.

to remove a node from the DOM, you can use the removeChild() method.

here is the basic syntax for the removeChild() method:

ex. parentNode.removeChild(childNode);

let's take a look at an example where we want to remove that last paragraph element from this section element:

ex. 
<section id="example-section">
    <h2>example sub heading</h2>
    <p>first P</p>
    <p>second P</p>
</section>

we can access the section element inside of the javascript file using the getElementByID() method:

ex. const sectionEl = document.getElementByID("example-section");

once we have the reference to the section element, we can then access that last paragraph using the querySelecetor() method:

ex. const sectionEL = document.getElementByID("example-section")
    const lastParag = document.querySelecetor("#example-section p:last-of-type");

we are using the :last-of-type pseudo-class to select the last paragraph element inside the section element.

now that we have the parent and child nodes, we can remove the last paragraph element from the section element using the removeChild() method:

ex.
<section id="example-section">
    <h2>example sub heading</h2>
    <p>first P</p>
    <p>second P</p>
</section>

const sectionEL = document.getElementByID("example-section")
const lastParag = document.querySelecetor("#example-section p:last-of-type");

sectionEl.removeChild(lastParag);

so, when might you want to add or remove nodes from the DOM? 

if you're working with dynamic content, you might need to add or remove nodes from the DOM. real world example included shopping carts, to-do-list, and social media feeds.

# how do the navigator, window, and document work?
when working with the DOM, you will often come across the navigator, window and document interface. an interface is a collection of methods and properties that define a particularly object.

in this lesson, we will explore how these interface work and how you can use them in your web applications.

let's start by looking at the navigator intergace.

the navigator interface provides information about the browser environment, such as the user agent string, the platform, and the version of the browser. A user agent string is a text string that indetifies the browser and operating system being used.

here is an example of how to access the user agent string using the navigator interface:

ex. console.log(navigator.userAgent);

the result will be a string that contains information about the browser and operating system being used.

here is an example string that you might see:

ex. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36

this could be helpful if you want to display different content based on the user's browser or operating system.

another useful property of the navigator interface is the language property, which returns the language of the browser. you can use this property to display content in the user's preferred language.

here is an example of using the language property:

ex. console.log(navigator.langauge);

the result will be a string that contains the language code of the browser. if your preferred langauge is english, it will return en-US.

next, let's look at the window interface.

the window interface represents the browser window that contains the DOM document. it provides methods and properties for interface witht the browser window, such as resizing the window, opening new windows, and navigating to different URLs.

here is an example of working with the innerWidth property of the window interface:

ex. console.log(window.innerWidth);

the result will be the width of the browser window in pixels. for example, if the browser window 800 pixels wide, it will return 800.

another example would be the location property of the window interface, which provides information about the current URL of the browser window:

ex. console.log(window.location);

the result will be an object that contains information about the current URL,, such as the protocol, hostName, and pathName.

most of the time you won't need to interact with the window interface directly, as it is automatically available in the global scope of your javascript code.

for example, you can acces the location property directly without using the window objec:

ex. console.log(location);

you will see the same results as before when you were using window.location.

finally let's look at the document interface.

the document interface represents the DOM document that is displayed in the browser window. it provides methods and properties for interacting with the DOM, such as selecting elements, creating new elements, and modifying the content of elements.

here is an example of using the document. children property:

ex.
<p>hello, world</p>
<script src="index.js"></script>

console.log(document.children);

the result will be an HTMLCollection object that contains all the child elements of the document.

there are many more properties and methods available on the document, window, and navigator interface. however this lesson has provided you with a basic understanding of how these interface work and how to use them in your web applications.

# how do you add attributes with setAttribute()?
you may be familiar with working with attribute in your HTML and css project, but did you know that you can add attribute to you HTML element  in your javascript file?

in this lesson, you will learn how to work with the setAttribute() method to add attributes to your HTML elements.

here is the basic syntax:

ex. setAttribute(attribute, value);

let's take a look at a few example to better understand how to use the setAttribute() method.

in this first example, we have a p element inside the HTML:

ex. <p id="para">i am a parag</p>

to add a class attribute we first need to access that p element using the getElementById() method. then we can use the setAttribute() method to add the class attribute and set the value my-class.

we are using outerHTML to log the entire HTMl element including its attributes.

ex. 
<p id="para">i am a parag</p>
<script src="index.js"><script>

const para = document.getElementById("para");
para.setAttribute("class","my-class");

console.log(`${para.outerHTML}`);

if you have an existing attribute on an html element, you can update its value using the setAttribute() method.

in this example we have a div element with a class attribute set to my-class:

ex. <div class = "my-class"></div>

to update the class attribute value to example, we can use the setAttribute() method again:

ex. 
<div class = "my-class"></div>
<script src="index.js"><script>

const divEl = document.querySelecetor(".my-class");
divEl.setAttribute("class", "example");

console.log(`${divEl.outerHTML}`);

so what are soem real-worl example of when to use the setAttribute() method?

if you were building a dynamic image gallery, you might need to update the src attribute of an image element when a user clicks on a thumbnail.

another example would be if you're dealing with form validation and need to add certain attributes like required or minlenght to an input element.

# what is the event object?
the event object is a payload that triggers when a user interacts with your web page in some way. these interactions can be anything from clicking on a button or focusing an input to shaking their mobile device.

like all javascript object, the event object has a number of properties that might be helpful. the properties available depend on the event that triggered this payload.

all event objects will have the type property. this property reveals the type of event that triggered the payload, such as "keydown" or "click". these values will correspond to the same values you might pass to addEventListener() where you can capture and utilize the event object.

event object will always have the target property. the target property is a reference to whatever object triggered the event. most commonly, this will be some sort of HTMLElement object, or the document or window objects. but it can also be something more specific, like audioContext.

event also have methods, which are functions exposed as properties on the object. one commonly used method is preventDefault(), which prevents the default behaviour of the event when called. 

if you want to handle from submission yourself, for example, you might call preventDefault() to keep the browser fromt trying to submit the form data as a POST request. you will learn more about POST request in future lessons.

you'll also likely run into the stopPropagation() method. this method prevents the event from bubbling up or propagating to parent elements. you'll learn more about what this means in a future lesson.

there are also a large number of properties that are specific to certain implementations of the event object. for example, a fetchEvent will have a request property to contain the request that triggered the event.

if you are ever unsure of what properties are available, you can log the event object in question or even check the documentation

# how does the addEventListener method work?
when the user clicks on a button or there is a change in a form, this is known as an event in your programs, you will need to have a way to listen for these events and respond to them.

the addEventListener() method is used to listen for events. it takes two arguments: the event you want to listen for and a function that will be called when the event occurs.

here is the basic syntax:

ex. element.addEventListener("event", listener);

the element is the HTML element to monitor for events, and event specifies the type of event to listen for, such as "click".

the listner is an object tha will receive the notification when the event occrus. most of the time, this will be a function that you define to handle the event.

here is an example:

ex. 

element.addEventListener("click", ()=>{
    //code to run when the click event occurs
})

you can also choose to pass in a function reference like this:

ex. 

function handleClick(){
    //code to run when click event occrus
}

element.addEventListener("click",handleClick());

sometimes you may want to create a sepeate function to handle the event. this can make your code easier to read and maintain.

the listened argument can also be null, or it can be an object that use the eventListener interface. the eventListener interface defines a single method called handleEvent(). tis method is automatically called whenever the event you're listening for occurs. using this interface allows the same object to handle multiple events if needed.

most of the time, you won't need to use this interface, and you can instead pass in a function that will be called when the event occurs.

now, let's take a look at an example to better undestand how this works:

in this example, we have a button element with the id of btn:

ex. <button id="btn">show allert</button>

we want to listen for the "click" event on this button and show an alert when the button is clicked.

we first need to access that button element in our javascript code. then we need to add an event listener to listen for the click event and show an alert whent he button is clicked:

ex. 
<button id="btn">show allert</button>
<script src="index.js"></script>

const btn = document.getElementByid("btn");
btn.addEventListener("click",()=>alert("you clicked the button"));

now each time the button is clicked, the user will see an alert message displayed on the screen like this:

output:
you clicked the button

another type of event that you can listen for is the "input" event. this event is triggered when the value of an input elements changes.

here is an Example:

ex.
<input type="text" id="input" placeholder="type something"/>

we want to listen for the input event on this input element and log the value of the input to the console each time the user types something.

we first need to access that input element in out javascript code. then we need to add an event listener to listen for the input event and log the value of the input to the console each time the user types something.

ex. 
<input type="text" id="input" placeholder="type something"/>
<script src="index.js"></script>

const input = document.getElementById("input");
input.addEventListener("input", ()=>{
    console.log(input.value)
})

there are many more events that you can listen for using the addEventListener() method. some common events included  mouseover, mouseout, keydown, keyup and submit.

in future lesson, we will cover more events and how to use the addEventListener() method to listen for them.

# how does the removeEventListener method work?
in the previous lesson, you learned how to work with "click" and "input" events by using the addEventListener() method, in this lesson, you will learn how to remove event listener using  the removeEventListener() method.

the removeEventListener() method is used to remove an event listener that was previously added to an element using the addEventListener() method. this is useful when you want to stop listening for particularly event on an element.

here is the basic syntax for the removeEventListener() method:

ex. element.removeEventListener("event", listener)

just like the addEventListener() method, the removeEventListener() method take two arguments: the event you want to remove and the listener function that was previously added.

there is also an additional optional third argument that can be passed to the removeEventListener() method. this argument can either be the options or useCapture.

the options argument is an object that specifies the options for the evenet liestener, such as whether the event listener should be passive or once.

the useCapture argument is a boolean value that specifies wheteher the event should be captured during the event propagation phase.

most of the time, you will only need to pass the event and listener arguments to the removeEventListener() method.

let's take a look at an example to better undestand how the removeEventListener() method works:

here is an example with some HTML:

<link rel="stylesheet" href="style.css"/>
<h1>event listener example</h1>
<button id="btn">change background color</button>

button{
    background: linear-gradient(135deg, #4da3ff, #007bff);
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.25 ease;
    box-shadow: 0 4px 10px rgba(0,123,255,0.2)
}

if we want to toggle the background color between grey and blue, then we can use an event listener for that.

we first need to access the button element alomg with the body element:

const bodyEL = document.querySelecetor("body");
const btn = document.getElementById("btn");

then we need to create the function responsible for toggling between the grey and blue colors:

let isBgColorGrey = true;

const toggleBgColor = () =>{
    bodyEL.style.backgroundColor = isBgColorGrey? "blue": "grey"
    isBgColorGrey = !isBgColorGrey;
}

we are using a boolean variable isBgColorGrey to keep track of the current background color. if the background color is grey, then we change it to blue and vice versa.

then we need to add an event listener to the button element to call the toggleBgColor function when the button is clicked:

btn.addEventListener("click",toggleBgColor);

here is the full example so far:

<link rel="stylesheet" href="style.css"/>
<h1>event listener example</h1>
<button id="btn">change background color</button>
<script src="index.js"></script>

button{
    background: linear-gradient(135deg, #4da3ff, #007bff);
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.25 ease;
    box-shadow: 0 4px 10px rgba(0,123,255,0.2)
}
button:hover{
    background: linear-gradient(135deg, #66b3ff, #3399ff)
    box-shadow: 0 6px 14px rgba(0,123,255,0.3);
    transform: translateY(-2px);
}

const bodyEL = document.querySelecetor("body");
const btn = document.getElementById("btn");

let isBgColorGrey = true;

const toggleBgColor = () =>{
    bodyEl.style.backgroundColor = isBgColorGrey? "blue" : "grey";
    isBgColorGrey = !isBgColorGrey;
}

btn.addEventListener("click",toggleBgColor);

each time the button is clicked, the backgroudn color of the body will change between grey and blue.

we can update the HTML to include a paragraph element that will be used to remove the event listener when hovered over:

<link rel="stylesheet" src="styles.css"/>
<h1>Event listener examples</h1>
<p id="para">mouseover this text to remove the event listner</p>
<button id="btn">change background color</button>
<script src="index.js"></script>

to remove the event listener when the paragraph is hover over, we can add an event listener to the paragraph element. we are using the mouseover event and passing in a function that removes the event listener from the button element:

const para = document.getElementById("para");
const btn = document.getElementById("btn");

para.addEventListener("mouseover", () =>{
    btn.removeEventListener("click",toggleBgColor);
})

when the paragraph is hovered over, the event listener for the button click event is removed, and the background color will no longer change when the button is clicked.

here is the full example with the removeEventListener() method:

<link rel="stylesheet" src="styles.css"/>
<h1>Event listener examples</h1>
<p id="para">mouseover this text to remove the event listner</p>
<button id="btn">change background color</button>
<script src="index.js"></script>

button{
    background: linear-gradient(135deg, #4da3ff, #007bff);
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.25 ease;
    box-shadow: 0 4px 10px rgba(0,123,255,0.2)
}
button:hover{
    background: linear-gradient(135deg, #66b3ff, #3399ff)
    box-shadow: 0 6px 14px rgba(0,123,255,0.3);
    transform: translateY(-2px);
}

const bodyEl = document.querySelecetor("body");
const para = document.getElementById("para");
const btn = document.getElementById("btn");

const isBgColorGrey = true;

const toggleBgColor = () => {
    bodyEl.style.backgroundColor = isBgColorGrey? "blue" : "grey";
    isBgColorGrey = !isBgColorGrey
}

btn.addEventListener("click",toggleBgColor)

para.addEventListener("mouseover", () => {
    btn.removeEventListener("click", toggleBgColor)
})

real world example of when to use the removeEventListener() method include removing event listeners when a modal is closed in a web application or when a user logs out of an application

# what are inlide event handlers, and why is it best to practice to use addEventListener instead?
in the previous lessons, you learned how to work with events by using addEventListener() method. but there is another, not recommended way to work with events in javascript.

inline event handlers are special attributes on an HTMl element that are used to execute javascript ode when an event occurs.

here is an example of a button element with an inline click event handler:

ex. <button onclick="alert('hello world')">show alert </button>

when the user clicks on the button, the alert function is called and an alert dialog is displayed with the message Hello world!.

another way to use inline event handlers is to call a function that is defined in a script tag in the HTML document.

here is an example of defining a function called changeBgColor and calling it from an inline click event handler:

<script>
    const changeBgColor = () =>{
        document.body.style.background = "lightblue";
    }
</script>

<button onclick="changeBgColor()"> change background color</button>

when the user clicks on the button, the changeBgColor function is called and the background color of the page is changed to light blue, while it is possible to use inline event handlers like this, it is not considered a best practice.

for one reason, inline event handlers can only be used to attach one event listener to an element. if you want to attach multiple event listeners to the same element, you will need to use addEventListener(). another reason is that inline event handlers mix HTML and javascript code together, which can make your code harder to read and maintain. it is better to keep your HTML code and javascript code seperate by using addEventListener() to attach event listeners to elements

inline events handlers are not recommended for use in modern javascript. so it is best practice to stick with the addEventListener() method when working with events in javascript

# how do you manipulate styles using element.style and element.classList?
there will be times when you will need to manipulate the styles of an HTML element inside your javascript file. an example of this would be when you need to hide or show a menu when a user click on a button.

in this lesson, you will learn how to manipulate styles using the Element.style and Element.classList properties.

the Element.style property is a read-only property that represents the inline style of an element. you can use this property to get or set the style of an element.

here is an example of a paragraph element with an ID of para:

<p id="para">this is a paragraph</p>

you can use the style property to change the color of the paragraph element to red:

<p id="para">this is a paragraph</p>
<script src="index.js"></script>

const parEl = document.getElementById("para");
paraEl.style.color = "red";

the style property can be used to set many CSS properties, such as color, background-color, font-size, font-weight, and so on.

another way to manipulate styles is by using the Element.classList property. the classList property is a read-only property that can be used to add, remove, or toggle classes on an element. let's take a look at a couple of example.

in this example, you are going to add a class called highlight to a paragraph element with an ID of para. in the CSS, we will set the highlight class to change the background color of the paragraph element to yellow. in the javacript, we will add the hightlight class to the paragraph element using the classList.add() method.

<link rel="stylesheet" src="styles.css"/>
<p id="para">this is a paragprah</p>
<script src="index.js"></script>

.highlight{
    background-color:yellow;
}

const paraEl = document.getElementById("para");
paraEl.classList.add("highlight");

you can also add multiple classes to an element by passing them as arguments tot he classList.add() method:

classList.add("class1","class2","class3");

if you need to remove a class from an element, you can use the classList.remove() method like this:

classList.remove("highlight");

to toggle a class on an element, you can use the classList.toggle() method. in this example, we have a button element with an ID of toggle-btn and a nav element with an ID of menu. inside the CSS, we have added some styles for the menu and a class called show that will change the display property of the .menu to block. inside the javascript, we are accessing the menu element and the button element using the getElementById() method. then, we are adding event listener to the button element that will toggle the show class on the .menu element when the button is clicked:

<link rel="stylesheet" src="styles.css"/>
<button id="toggle-btn">toggle menu</button>

<nav id="menu" class="menu">
    <ul>
        <li>home</li>
        <li>about</li>
        <li>products</li>
    </ul>
</nav>
<script src="index.js"></script>

.menu {
    display: none;
    background-color: lightgray;
    width: 50%;
    padding: 10px;
}

.menu.show{
    display:block
}

const menu = document.getElementById("menu");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => menu.classList.toggle("show"));

when a user clicks on the button, the show class will be added to the .menu element, and the menu will be displayed. if the user clicks on the button again, the show class will be removed from the .menu element, and the menu will be hidden.

by using methods and properties such as style, add(), remove(), and toggle(), you can easily manipulate an element styles with javascript, creating dynamic and interactive web pages.

# what is DOMContentLoaded event, and how does it work?
the DOMContentLoaded event is fired when everything in the HTML document has been loaded and paresd. if you have external stylesheets, or images, the DOMContentLoaded event will not wait for those to be loaded. it will only wait for the HTML to be loaded.

this differs from the load event, which waits for everything to be loaded, including external stylesheets, images, and so on.

here is an example syntax for using the DOMContentLoaded event:

document.addEventListener("DOMContentLoaded",()=>{
    console.log("DOM is loaded.");
})

once the DOM is loaded, the function will be executed and the message DOM is LOADED will be logged to the console.

now, lets take a look at another example using teh DOMCOntentLoaded event. in this example, we have an image insde the HTML. to update the imagem we can create a function that changes the src and alt attributes for the image:

<h1>image change on DOM Loaded</h1>
<img 
    id="example-img"
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
    alt="cat relaxing"
/>

<script src="index.js"></script>

const changeImg = () =>{
    const img = document.getElementById("example-img");
    img.src = "https://cdn.freecodecamp.org/curriculum/responsive-web-design-principles/FCCStickers-CamperBot200x200.jpg";

    img.alt = "camperBot sticker";
    console.log("image has been changed");
}

changeImg();

we can then check if the DOm is still loading and add an Event lister for the DOMCOntentLoaded event. if the DOMCOntentLoaded event has already fired, we can call the changeIMG function directly:

if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded",changeImg);
} else{
    console.log("DOMCOntentLoaded has already fired");
    changeImg();
}

if you were to run this code, and refresh the page, you would see the image change to the new image after the DOM has loaded. it happens pretty quickly, but you will see a slight flicker as the image changes.

the DOMContentLoaded event is useful when you want to run some Javascript code as soon as the DOM is loaded, but before all the external resources like images and stylesheet are loaded.

# how do the setTimeout and setInterval methods work?
when building your program, you'll often want something to happen after a delay, or repeat at regular intervals. that's where the setTimeout() and setInterval() methods come in handy. both methods accept two parameters: a function and a delay.

let's take a look at each of the method in more detail so you can start using them in your web projects.

setTimeout() lets you delay an action for a specified time. here's the basic syntax of the setTimeout() method:

setTimeout(functionToRun, delay);

functionToRun is the code you want to execute after a specified delay and delay is the time(in milliseconds) to wait before running the function. here's an example:

setTimeout(function () {
    console.log(("this run after 3 seconds"));
}, 3000);

you can alsoe use an arrow function for the callback like this:

setTimeout(() => {
    console.log(("this run after 3 seconds"));
}, 3000);

setInterval() keeps repeating a function at a set interval. it's like having an alarm that goes off every few seconds. setInterval() is perfect when you want something to happen over and over again, like refreshing data or creating an animation that moves continuously.

just like setTimeout(), it takes function and delay:

setInterval(functionToRun, delay);

functionToRUn is the code you want to run repeatedly, while delay is the time in milliseconds between each execution of that function. here's an example:

setInterval(()=>{
    console.log("this runs every 2 seconds");
},2000);

//result:
//this runs every 2 seconds
//this runs every 2 seconds
//this runs every 2 seconds
//this runs every 2 seconds
//...

since setInterval() keeps executing the provided function at the specified interval, you might want to stop it. to do this, you have to use the clearInterval() method. 

to do the work, clearInterval() takes the Id of the setInterval() you want to stop. this could be a variable you assign the interval to. one way to stop the intervals is inside a setTimeout(), as that will stop the interval after a certain time:

const intervalID = setInterval(()=>{
    console.log("this will stop after 5 seconds");
}1000);

setTimeout(() =>{
    clearInterval(intervalID);
},5000);


you can also stop a timeout with the clearTimeout() method:

let timeoutID = setTimeout(()=>{
    console.log("this will not run");
},5000);

clearTimeout(timeoutID);

with that code, the setTimeout() will not run at all. so, a more elegant way to do it is through the DOM, by adding a click event listener to a button to stop the timeout:

<h1>cancel timeout example</h1>
<button id="cancleBtn">cancel timeout</button>
<script src="index.js"></script>

let timeoutID = setTimeout(()=>{
    console.log("this will run if not canceled");
},5000);

document
.querySelecetor("#cancleBtn")
.addEventListener("click",()=>{
    clearTimeout(timeoutID);
    console.log("timeout canceled!");
});

# what is the requestAnimationFramer() API, and How can it be used to set up an animation loop?
creating smooth animations on a web page can be tricky, especially if you're not sure how to handle timing properly. the great news is that the requestAnimationFramer() API makes it easier.

requestAnimationFramer() is a method that allows you to schedule the next step of your animation before the next screen repaint, resulting in a fluid and visually appealing experience.

the next screen repaint refers to the moment when the browser refreshes the visual display of the web page. this happens multiple times per second, typically around 60 times(or 60 frames per second) on most displays.

to use the requestAnimationFramer() method, all you need to do is to call it and pass a callback function into it:

ex. requestAnimationFramer()

calling requestAnimationFramer() must first occur inside a function that handles the animation, such as animate(), along with a function to update the animation, traditionally called update():

function animate(){
    //update the animation...
    //for example, move an element, change a style, and more.
    update();
    //request the next framer
    requestAnimationFramer(animate);
}

the update() function is where the magic happens. inside it, you get to change whatever you want to animate. for example, updating a style or changing the position of an element:

function update(){
    element.style.transfrom = `translateX(${position}px)`;
    element +=2
}

what finally kicks off the animation is calling requestAnimationFrame() and passing in the animate function, this time outside the animate function:

requestAnimationFrame(aniamte);

the loop will continue until you stop it.

now, let's take a look at another example. the HTML for this example is a div element with the text freecodecamp is awesome. the css makes the div a rectangle and hides anything that goes out of the viewport on the left or right. the javascript code moves the rectangle 2px to the right at every call of requestAnimationFrame(animate) with the animate function as a callback:

<link rel="stylesheet" src="style.css"/>
<div id="rect" class="rect">freecodecamp is awesome</div>
<script src="index.js"></script>

body{
    overflow-x:hidden;
}

.rect{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 250px;
    border-radius: 5px;
    background-color: #1b1b32;
    color: #f5f6f7;
    font-size: 2rem;
    position: absolute;
}

const rect = document.getElementById("rect");

let position = 0;

const update = () =>{
    rect.style.left = postion + "px";
    position += 2;

    if (position>window.innerWidth){
        position = -rect.offsetWidth;
    }
}

const animate = () =>{
    update();

    //request the next fram
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

the result in browser will be an animated title card floating across the screen

# what is the web animation API, and how does it relate to css animation properties?
the web animation API (WAAPI) allows you to create and control aniamtion directly within javascript. with WAAPI, you can work with aniamtion more dynamacally, makking it easier to manipulate them.

let's take a look at WAAPI in more detail, so you can start working with animations directly inside your javascript code. at the core of WAAPI is the animation constructor, whcih provides several instance methods and properties that allow you to dynamically animate elements.

a significant method in the aniamtion constructor is aniamte(). it allows your to create an aniamtion by specifying keyframes and options like duration, direction, easing and iterations.

here's the basic syntax of the aniamte() method:

ex. element aniamte(keyframes, options);

let's take a look at an example.

<link rel="stylesheet" src="style.css"/>
<div class="square" id="square"></div>
<scritp src="index.js"></script>

body{
    background: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.square{
    background: #1b1b32
    width: 10rem;
    aspect-ratio: 1/1;
}

const square = document.querySelecetor(#square);

cosnt animation = square.animate(
    [{transform: "translateX(0px)}
    ,{transform: "translateX(100px)}
    ],
    {
        duration: 200,          //makes animation lasts 2 seconds
        iterations: infinity,   //loops indefinetly
        direction: "alternate", //moves back and fort
        easing: "ease-in-out"   //smooth easing
    }
)

the result in the browser will be a blue square moving back and forth horizontally.

the instance methods of the aniamtion constructor include:

play()
pause()
reverse()
finish()
cancle()

and the instance properties include:

playbackRate
currentTime
startTime
effect
timeline
playState
finished
onfinish
oncancle

let's modify the example to use the play(), pause() methods and the onfinish property. here is new version:

<link rel="stylesheet" src="style.css"/>
<div class="square" id="square"></div>

<button id="playBtn">play</button>
<button id="pauseBtn">pause</button>
<scritp src="index.js"></script>

body{
    background: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.square{
    background: #1b1b32
    width: 10rem;
    aspect-ratio: 1/1;
    margin-bottom: 20px;
}

button{
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
}

const square = document.querySelecetor("#square");
const playBtn = document.querySelecetor("#playBtn");
const pauseBtn = document.querySelecetor("#pauseBtn");

const animation = square.animate(
    [{transform: "translateX(0px)},
     {transform: "translateX(100px)}
    ],
    {
        duration: 5000, //animation lasts 5 seconds
        //iteration: infinity,  //loops indefinetly
        direction: "alternate", //moves back and forth
        easing: "ease-in-out"   //smoth easing function
    }
)

// set the onfinish property to log a message when the animation ends
animation.onfinish = () =>{
    console.log("animation finished")
}

playBtn.addEventListener("click", ()=>{
    animation.play();
    console.log("you start the animation");
})

pauseBtn.addEventListener("click", () => {
    aniamtion.pause();
    console.log("you pause the animation");
})

the result in the browser will show the blue box moving from left to right when the play button is clicked.

WAAPI extends the capabilties of CSS animations by providing more dynamic control over animations right inside javascript.

with  CSS animations, you define animations declaratively using properties like animation-name, animation-duration, and animation-timing-function. you also have the opportunity to do the same thing using the animate() method of WAAPI.

the differance is that you can control the animations you create with the animate() method more directl and dynamically, but with CSS animations, you need to do way more by defining custom styles  and triggering them inside your javascript file.

CSS animation is ideal for simple and declarative animations that run automatically. those include hover effects, transitio or animations that don't need much interaction once triggered. if your animation needs to respond to user interaction like clicks, and scrolls, or you want the user to be able to pause, reverse, or change speed dynamically, WAAPI is the better choice.

you can consider combining both WAAPi and CSS animations when you want the simplicity of CSS for basic setup but need to control animations at runtime.

# what is the canvas API, and how does it work?
the canvas API is a powerful tool that lets you manipulate graphics right inside your javascript file. everything begins with a canvas elements in HTML. this element serves as a drawing surface that you can manipulate using the instace methods and properties of the canvas API.

the canvas API provides everything you need to create amazing visuals, including shapes, text animations, and even complex games. it has interfaces like HTMLCanvasElement, CanvasRenderingContext2D, CanvasGradient, CanvasPattern, TextMetrics which provide methods and properties you can use to create graphics in your javascript file.

let's look at how the canvas API works so you can start creating graphics with javascript

first, you need to create a canvas element in your element in you HTML file:

<canvas id="my-canvas"></canvas>

the canvas element is represented by the HTMLCanvasElement interface, which provideds methods and properties for manipulating it. additionally, you can use methods and properties from other interfaces in the canvas API.

you can give your canvas a width and height inside the HTML:

<canvas id="my-canvas" widht="400" height="400"></canvas>

or you can use the width and height properties of the HTMLCanvasElement interface:

const canvas = document.getElementById("my-canvas");
canvas.width = 400;
canvas.height = 400;

for now you can't see anything on the screen yet, after creating your canvas element, the next hing to do is to get access to the drawing context of the canvas with the getContext() method of the HTMLCanvasElement interface.

the most common context is 2d, which allows you to draw in two dimensions:

const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext('2d');

if you log the ctx variable to the console, you'll see the methods and properties of canvasRenderingContext2D that you can use to create shapes, colors, lines, and more, along with their default values:

console.log(ctx);

once you have the 2D context, you can start drawing on the canvas.

the canvas API provides several methods and properties for drawing shapes, lines, and text. one of those is the fillStyle property, which you can combine with the fillRect() method to draw a rectangle or square:

<html>
    <head></head>
    <body>
        <canvas id="my-canvas" width="400" height="400"></canvas>
        <script src="index.js"></script>
    </body>
</html>

const canvas = document.getElementById("my-canvs");
cosnt ctx = canvas.getContext("2d");

// set the background color
ctx.fillStyle = "crimson";

ctx.fillRect(1,1,150,100);

fill react takes 4 number values which represent the x axis, y axis, width, and height, respectively.

there's something on the screen now. you can also draw text or even create an animation. here's a canvas to represent text:

<canvas id="my-text-canvas" width="300" height="70"></canvas>

to finally draw the text, pass the text into the fillText() method as the first argument, followed by the values for the x and y axis:

<html>
    <head></head>
    <body>
        <canvas id="my-text-canvas" width="300" height="70"></canvas>
        <script src="index.js"></script>
    </body>
</html>

const textCanvas = document.getElementById("my-text-canvas");
const textCanvasCtx = textCanvas.getContext("2d");

//set font family and size
textCanvasCtx.font = "30px Arial";

//set text color
textCanvasCtx.fillStyle = "crimson";

//draw the text
textCanvasCtx.fillText("hello HTML canvas!", 1,50)

the result in the browser will be the red text hello HTML canvas!.

these much more you can do with the canvas API. for example, you can combine it with requestAnimationFrame() to create custom animations, visualization, games, and more.

# how do you open and close dialog elements using javascript?
dialogs let you display important information or actions to users. with HTML's built-in dialog element, you can easily crate these dialogs(both modal and non-modal dialogs) in your web apps.

a modal dialog is a type of dialog that forces the user to interact with it before they can access the rest of the application or webpage. it effectively blocks interaction with other content until the user completes an action, such as closing the dialog or submitting a form.

in contrast, a non-modal dialog allows the user to continue interacting with other parts of the page or application even when the dialog is open. it doesn't prevent access to the rest of the content.

in this lesson, you will learn how to open and close modals using the shoModal() and close() methods.

when you want to make sure the user focuses on specific action or message of a modal you can open the modal dialog using the showModal() method. this will add backdrop to the other on the page and disable them. this is ideal for modals that display forms, confirmations, and critical that requires user action.

here's the HTML for the modal dialog:

<dialog id="my-modal">
    <p> this is a modal dialog</p>
</dialog>

for now, you can't see anything on the page because the modal is closed on the initial render. you can automatically open the modal by using the showModal() method:

<dialog id="modal">
    <p>this is a modal dialog</p>
</dialog>
<script src="index.js"></script>

const dialog = document.getElementById("modal");
dialog.showModal();

the result will show a modal with the text this is a modal dialog.

it's best to give control to the user. to achieve this, you can add a click event listener to a button and use the showModal() method:

<dialog id="modal">
    <p>this is a modal dialog.</p>
</dialog>
<button id="open-modal-btn">open modal dialog</button>
<script src="index.js"></script>

const dialog = document.getElementById("modal");
const openButton = document.getElementById("open-modal-btn");

openButton.addEventListener("click", () =>{
    dialog.showModal()
})

if you needed to show a dialog while still allowing interaction with content outside of the dialog, then you can use the show() method:

<dialog id="modal">
    <p>this is a modal dialog.</p>
</dialog>
<button id="open-modal-btn">open modal dialog</button>
<script src="index.js"></script>

const dialog = document.getElementById("modal");
const openButton = document.getElementById("open-modal-btn");

openButton.addEventListener("click", () =>{
    dialog.show()
})

to close a modal, you can add a button to the modal inside the dialog element and use the close() method:

<dialog id="modal">
    <p>this is a modal dialog.</p>
    <button id="close-modal-btn">close modal</button>
</dialog>
<button id="open-modal-btn">open modal dialog</button>
<script src="index.js"></script>

const dialog = document.getElementById("modal");
const openButton = document.getElementById("open-modal-btn");
const closeButton = document.getElementById("close-modal-btn");

openButton.addEventListener("click", () =>{
    dialog.show();
})

closeButton.addEventListener("click", ()=>{
    dialog.close();
})