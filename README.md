# css-starter

## Follow along on this Google doc:

https://docs.google.com/document/d/15t9d-Bk4yKLC30Kzl3Uy-hTq0GudF1lc4g1bCaxYVgQ/edit?usp=sharing

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

### Time to play in the sandbox!

This starter kit includes a very basic React App that you can stylise and play with. To run it, clone this repo locally, navigate to the folder 'my-css-app' within the repo root folder, run 'npm install' and then run 'npm start' in your terminal. To see the associated code, open up the 'my-css-app' in your IDE of choice. When the app is up and running on your browser, you should see 3 menu items ordered in a column.

In App.js, you can observe how each html element corresponds to each visual element you can see on screen. in App.css, you can observe how each chunk of code assigns certain values to properties of an html element, which is selected via its classname.


#### task 1

The main heading (.App h1) isn't centered. Use the CSS property text-align to center the text horizontally. To vertically center it, you might want to adjust the margin property.


#### task 2

Currently, the cards are directly touching each other. Adjust the .menucard to use display: flex; and justify-content: center; to add space around each card.

#### task 3

To give some breathing room inside each card, add padding to the .menucard class. A gap of 1rem will create 16 pixels of space inside the card.

#### task 4

To make the cards align in a row and wrap when there's not enough space, apply flex-wrap: wrap; to the .menucard class. Then, to make each card take up only a third of the width minus some margin, set the .menucard flex to 0 1 30%. 

#### task 5

Let's beautify the cards with shadows and rounded corners. For the .card class, use box-shadow to add a shadow of 0 4px 8px rgba(0,0,0,0.2) and border-radius to make the corners rounded (10px).

#### task 6

Our images are overflowing! To help with this we can use overflow:hidden in our .card class. 

#### task 7

Make the cards interactive by enlarging the image slightly on hover. For the .m-image:hover img selector, add a transform: scale(1.1);. This will scale up the image by 10% when someone hovers over it.

#### task 8

For devices with a width of 600px or less, make the cards stack on top of each other instead of side by side. Inside a @media query, change the .menucard flex direction to column and set the .card width to 100%.

#### task 9

Improve the readability of the text inside the cards by increasing the font size of the headings to 1.5rem and the paragraph text to 1rem. Also, add a margin-bottom of 0.5rem to the h2 to add space between the title and the description. Also you might want to consider aligning the text to the left (change value in .card class); this is completely up to you. If you do, remember to add padding!

#### task 10

Review the cards to ensure the styling is consistent. Verify the font colors are readable against the card backgrounds. Ensure the padding inside the cards is even on all sides by setting padding: 1rem.

The result will be a mesmerizing menu display that any website would be lucky to have! Experiment around and see if you can make it look even nicer (or different).

## resources

General introduction: https://www.w3schools.com/css/ \
Master your flexbox skills: https://flexboxfroggy.com/ \
Docs: https://developer.mozilla.org/en-US/docs/Web/CSS \
CSS Rules (includes how to make and change font styles): https://www.cssportal.com/css-at-rules/ \
CSS Colornames: https://www.cssportal.com/css3-color-names/
Interactive HTML and CSS cheatsheet: https://htmlcheatsheet.com/css/ \






