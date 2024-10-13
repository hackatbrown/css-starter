# css-starter

## Follow along with this Google Doc:

https://docs.google.com/document/d/1IAbBMriGt-8pn0G8n6Aa8gZsZYMRPZGLaC-Y1lJhl3s/edit?usp=sharing or just keep reading!

## Introduction to CSS 👋

CSS (Cascading Style Sheets) define the styles of HTML elements, ie. the way they are displayed visually on screen, including text, color, layout, and even animation. CSS was created by the World Wide Web Consortium (W3C) to offer an external file for styles instead of injecting style formatting within HTML elements as an attribute (which was long, expensive, and difficult to read for large website developers!)

### Goal of this Starter Kit

For hackers new to building websites and would like to build a website from scratch, CSS is essential to creating a website identity beyond the barebone content described by the HTML elements. In this starter kit, you will learn basic CSS properties and how to write a CSS file that stylizes another file with HTML elements with an interactive React app demo. This demo is React-beginner friendly, but you can check out the React starter-kit for a more in-depth understanding.

### How does CSS Work?

The structure of a CSS file looks something like:
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
A selector is typically an html element type (ie. h1, a, p, div) or a user-set classname/id of an HTML element. Classnames are preceded with '.', ex. '.myLogo', and ids are preceded with '#', ex. '#myLogo'.

What are properties and values?
A property describes a certain design component you wish to set/alter, including 'background-color', 'color', 'font-size', 'display', 'height', 'width', and many many more. The value is, as you might expect, the value you wish to set the property to. For example, you might want to set the background color to black, in which case you could write something like 'property: black' or 'property: #000000'. There are many units/forms of values that each property accepts—you can confirm which work with a quick Google search.


For an extensive list of CSS properties and their possible values, you can visit:
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference


### What is flexbox?

Flexbox is a very powerful layout tool that allows you to display your HTML items in an organized, responsive way. This source offers a great explanation and cheatsheet of its capabilities: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

### Time to play in the sandbox!

This starter kit includes a very basic React App that you can stylise and play with. To run it, clone this repo locally, navigate to the folder 'my-css-app' within the repo root folder, run 'npm install' and then run 'npm start' in your terminal. To see the associated code, open up the 'my-css-app' in your IDE of choice. When the app is up and running on your browser, you should see 3 menu items ordered in a column.

In App.js, you can observe how each HTML element corresponds to each visual element you can see on screen. in App.css, you can observe how each chunk of code assigns certain values to properties of an HTML element, which is selected via its classname.
If you are lost on where to implement these take a look at the App.css file!


#### Task 1: Centering the Main Heading

The main heading (.App h1) isn't centered. Use the CSS property text-align to center the text horizontally. To vertically center it, you might want to adjust the margin property.


#### Task 2: Card Spacing

Currently, the cards are directly touching each other. Adjust the .menucard to use display: flex; and justify-content: center; to add space around each card.

#### Task 3: Card Padding

To give some breathing room inside each card, add padding to the .menucard class. A gap of 1rem will create 16 pixels of space inside the card.

#### Task 4: Responsive Cards with Flexbox

To make the cards align in a row and wrap when there's not enough space, apply flex-wrap: wrap; to the .menucard class. Then, to make each card take up only a third of the width minus some margin, set the .menucard flex to 0 1 30%.

#### Task 5: Adding Card Shadows and Rounded Corners

Let's beautify the cards with shadows and rounded corners. For the .card class, use box-shadow to add a shadow of 0 4px 8px rgba(0,0,0,0.2) and border-radius to make the corners rounded (10px).

#### Task 6: Styling Images to Fit Cards

Our images are overflowing! To help with this we can use overflow:hidden in our .card class.

#### Task 7: Interactive Hover Effects

Make the cards interactive by enlarging the image slightly on hover. For the .m-image:hover img selector, add a transform: scale(1.1);. This will scale up the image by 10% when someone hovers over it.

#### Task 8: Making the Layout Stack on Small Screens

For devices with a width of 600px or less, make the cards stack on top of each other instead of side by side. Inside a @media query, change the .menucard flex direction to column and set the .card width to 100%.

#### Task 9: Refining Card Typography

Improve the readability of the text inside the cards by increasing the font size of the headings to 1.5rem and the paragraph text to 1rem. Also, add a margin-bottom of 0.5rem to the h2 to add space between the title and the description. Also you might want to consider aligning the text to the left (change value in .card class); this is completely up to you. If you do, remember to add padding!

#### Task 10: Consistent Styling

Review the cards to ensure the styling is consistent. Verify the font colors are readable against the card backgrounds. Ensure the padding inside the cards is even on all sides by setting padding: 1rem.

The result will be a mesmerizing menu display that any website would be lucky to have! Experiment around and see if you can make it look even nicer (or different).

#### Task 11: Accessibility

Add aria-labels to all of your interactive elements within App.js. This will just look like a tag, for example here is an aria-label on a button: <button aria-label="Close" onclick="myDialog.close()">. See more documentation on aria-labels here: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label.

## Resources

General introduction: https://www.w3schools.com/css/ \
Master your flexbox skills: https://flexboxfroggy.com/ \
Docs: https://developer.mozilla.org/en-US/docs/Web/CSS \
CSS Rules (includes how to make and change font styles): https://www.cssportal.com/css-at-rules/ \
CSS Colornames: https://www.cssportal.com/css3-color-names/
Interactive HTML and CSS cheatsheet: https://htmlcheatsheet.com/css/ \






