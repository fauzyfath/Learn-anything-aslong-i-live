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

