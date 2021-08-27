# Naevner.js — color descriptions from hex codes
 Javascript plugin that provides natural language descriptions of hex color codes.
 
 # Why we made this
 We made this to have screenreader support for reading out color names on [remembertostand.com](https://remembertostand.com/) (Turn on screenreader and press C when on the site to hear it in action)
 
 # Credits
 * The hexToRGB and RGBToHSL functions used as part of this plugin are from https://css-tricks.com/converting-color-spaces-in-javascript/
 
 # Demo
 * Interactive demo of Naevner.js: [Nævner (naevner.com)](https://naevner.com/)
 * Naevner.js in use on a website — interactive demo: [Naevner.js in use on remembertostand.com](https://remembertostand.com/)
 * Naevner.js in use on a website — video demonstration of screenreader usage: [Naevner.js screenreader demo video](https://youtu.be/8kn6D_BuHYg)
 
 # Getting started
 Include the [minified code](https://github.com/samhaeng/naevner/blob/main/naevner-min.js)
 
 # How to use
 ```javascript
 naevner(color);
 // Color input should be a string containing a
 // hex 3-digit or 6-digit hex color code, with
 // or without a preceding #-sign.
 ```
 
 # Examples
 ```javascript
 //Examples:
 naevner("#000000"); //Returns: “black”
 naevner("#0000ff"); //Returns: “vivid blue”
 naevner("#D6365C"); //Returns: “clear red”
 naevner("#2F5651"); //Returns: “dark, faded turquoise”
 naevner("#3F0548"); //Returns: “dark, clear, purpleish magenta”
 ```

 # Questions or advice
 If you have questions or advice, feel free to open an issue on this repo. Thank you!
