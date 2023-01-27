# css-starter

## introduction to css

CSS (Cascading Style Sheets) define the styles of HTML elements, ie. the way they are displayed visually on screen, including text, colour, layout, and even animation. CSS was created by the World Wide Web Consortium (W3C) to offer an external file for styles instead of injecting style formatting within html elements as an attribute (which was long, expensive, and difficult to read for large website developers!)

### goal of this starter kit

For hackers new to building websites and would like to build a website from scratch, CSS is essential to creating a website identity beyond the barebone content described by the html elements. In this starter kit, you will learn basic css properties and how to write a css file that stylizes another file with html elements with an interactive React app demo. This demo is React-beginner friendly, but you can check out the React starter-kit for a more in-depth understanding.

### how does css work?

The structure of a css file looks something like:
> selector {
>
>    property: value;
>
>    property: value;
>
>    property: value;
>
>}

What is a selector?
A selector is typically an html element type (ie. h1, a, p, div) or a user-set classname/id of an html element. Classnames are preceded with '.', ex. '.myLogo', and ids are preceded with '#', ex. '#myLogo'.

What are properties and values?
A property describes a certain design component you wish to set/alter, including 'background-color', 'color', 'font-size', 'display', 'height', 'width', and many many more. The value is, as you might expect, the value you wish to set the property to. For example, you might want to set the background color to black, in which case you could write something like 'property: black' or 'property: #000000'. There are many units/forms of values that each property accepts—you can confirm which work with a quick Google search.

For an extensive list of CSS properties and their possible values, you can visit:
https://www.dofactory.com/css/properties#:~:text=A%20CSS%20property%20assign%20a,font%2Dstyle%2C%20and%20transform.

### what is flexbox?

Flexbox is a very powerful layout tool that allows you to display your html items in an organised, responsive way. This source offers a great explanation and cheatsheet of it's capabilities:
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

### time to play in the sandbox!

This starter kit includes a very basic React App that you can stylise and play with. To run it, clone this repo locally, navigate to the folder 'my-css-app' within the repo root folder, run 'npm install' and then run 'npm start' in your terminal. To see the associated code, open up the 'my-css-app' in your IDE of choice. When the app is up and running on your browser, you should see 3 groups of blue rectangles with various flexbox properties. 

In `App.js`, you can observe how each html element corresponds to each visual element you can see on screen. in `App.css`, you can observe how each chunk of code assigns certain values to properties of an html element, which is selected via its classname.

#### task 1

The headers need some pizzaz! Add a property 'background-color' to each of the header elements, h1, h2, and h3, to change the background color of each header to colors of your choice.


#### task 2

Notice how the items in the first group do not wrap/adjust to your window screen size when you shrink it horizontally. How can we make the items wrap around instead of getting cut off? (hint: what value should we set the flex-wrap property of '.flex-container-row' to?)

#### task 3

Experiment with toggling more properties and see what you can make! There are several helpful resources out there for you to explore. We have linked a couple below.

## resources

General introduction: https://www.w3schools.com/css/ \
Master your flexbox skills: https://flexboxfroggy.com/ \
Docs: https://developer.mozilla.org/en-US/docs/Web/CSS \
CSS Rules (includes how to make and change font styles): https://www.cssportal.com/css-at-rules/ \
CSS Colornames: https://www.cssportal.com/css3-color-names/
Interactive HTML and CSS cheatsheet: https://htmlcheatsheet.com/css/ \






