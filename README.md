# Naevner.js
 ## Color descriptions generated from hex color codes
 Javascript plugin that provides natural language descriptions of hex color codes.
 
 ## Why we made this
 We made this to have screenreader support for reading out color names on [remembertostand.com](https://remembertostand.com/) (Turn on screenreader and press C when on the site to hear it in action)
 
 ## Credits
 * The hexToRGB and RGBToHSL functions used as part of this plugin are from https://css-tricks.com/converting-color-spaces-in-javascript/
 
 ## Demo
 * Interactive demo of Naevner.js: [Nævner (naevner.com)](https://naevner.com/)
 * Naevner.js in use on a website — interactive demo: [Naevner.js in use on remembertostand.com](https://remembertostand.com/) (Turn on screenreader and press C to change interface colors to hear it in action)
 * Naevner.js in use on a website — video demonstration of screenreader usage: [Naevner.js screenreader demo video](https://youtu.be/8kn6D_BuHYg)
 
 ## Getting started
 Include the [minified code](https://github.com/samhaeng/naevner/blob/main/naevner-min.js)
 
 ## How to use
 ```javascript
 naevner(color);
 ```
 
 ## Examples
 ```javascript
 //Examples:
 naevner("#000000"); //Returns: “black”
 naevner("#0000ff"); //Returns: “vivid blue”
 naevner("#D6365C"); //Returns: “clear red”
 naevner("#2F5651"); //Returns: “dark, faded turquoise”
 naevner("#3F0548"); //Returns: “dark, clear, purpleish magenta”
 ```
 ## Accepted values
 * 3-digit hex with preceding #-sign — e.g. `#f00`
 * 3-digit hex without preceding #-sign — e.g. `f00`
 * 6-digit hex with preceding #-sign — e.g. `#ff0000`
 * 6-digit hex without preceding #-sign — e.g. `ff0000`

 ## Parameters
  ### approximationSuffix
  
  Ending for approximate colors — e.g. “greenish yellow” or “redish orange". Note that “off-white” and “black” nuances currently always use the term “-tinted” (e.g. “red-tinted black” or “yellow-tinted off-white”) independent of this parameter.
  ```javascript
  naevner(color, approximationSuffix);
  ```

  approximationSuffix examples:
  ```javascript
  naevner("#3F0548");            //Returns: “dark, clear, purpleish magenta”
  naevner("#3F0548", "-tinted"); //Returns: “dark, clear, purple-tinted magenta”
  naevner("#3F0548", "-like");   //Returns: “dark, clear, purple-like magenta”
  ```

 # Other color repositories
 The purpose of this plugin is to provide short, unambiguous descriptions using commonly used color terms. For some situations, different types of color descriptions may be more useful. For those situations, you may want to have a look at the following repositories. These are provided for your convenience and are not associated with this repository or Samhæng:
 * https://github.com/words/color-description
 * https://github.com/meodai/color-names
 
 
 # Questions, ideas and advice
 If you have questions or advice, feel free to open an issue on this repo. Thank you!
