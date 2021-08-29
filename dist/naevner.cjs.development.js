'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var naevner = function naevner(color, approximationSuffix) {
  if (approximationSuffix === void 0) {
    approximationSuffix = "ish";
  }

  var lightness,
      lightnessToPrint,
      hue,
      hueWithNuanceToPrint,
      hueNuance,
      saturation,
      saturationToPrint,
      approximationSuffixToPrint = approximationSuffix,
      colorDescription,
      parsedColor; // hexToRGB + RGBToHSL functions from https://css-tricks.com/converting-color-spaces-in-javascript/

  function hexToRGB(h) {
    var r = '0',
        g = '0',
        b = '0';

    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }

    return {
      r: parseInt("" + r),
      g: parseInt("" + g),
      b: parseInt("" + b)
    };
  }

  function RGBToHSL(r, g, b) {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255; // Find greatest and smallest channel values

    var cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0; // Calculate hue
    // No difference

    if (delta == 0) h = 0; // Red is max
    else if (cmax == r) h = (g - b) / delta % 6; // Green is max
    else if (cmax == g) h = (b - r) / delta + 2; // Blue is max
    else h = (r - g) / delta + 4;
    h = Math.round(h * 60); // Make negative hues positive behind 360°

    if (h < 0) h += 360; // Calculate lightness

    l = (cmax + cmin) / 2; // Calculate saturation

    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1)); // Multiply l and s by 100

    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return {
      h: Math.floor(h),
      s: Math.floor(s),
      l: Math.floor(l)
    };
  }

  var numberIsInRange = function numberIsInRange(colorAspectValue, range) {
    var fullRange = range.indexOf("-");
    var startOfRange = parseInt(range.substr(0, fullRange));
    var endOfRange = parseInt(range.substr(fullRange + 1));

    if (colorAspectValue >= startOfRange && colorAspectValue <= endOfRange) {
      return true;
    } else {
      return false;
    }
  }; //parse color input


  parsedColor = /^#.*/g.test(color) ? color : "#" + color; //assess color code:

  var colorInRGB = hexToRGB(parsedColor);

  var _RGBToHSL = RGBToHSL(colorInRGB.r, colorInRGB.g, colorInRGB.b),
      h = _RGBToHSL.h,
      s = _RGBToHSL.s,
      l = _RGBToHSL.l; //reset values


  lightness = null;
  lightnessToPrint = null;
  hue = null;
  hueWithNuanceToPrint = null;
  hueNuance = null;
  saturation = null;
  saturationToPrint = null; //determine saturation term

  if (numberIsInRange(s, "0-0")) {
    saturation = "monochrome";
  } else if (numberIsInRange(s, "1-6")) {
    saturation = "grey";
  } else if (numberIsInRange(s, "7-10")) {
    saturation = "grey" + approximationSuffixToPrint;
  } else if (numberIsInRange(s, "11-35")) {
    saturation = "faded";
  } else if (numberIsInRange(s, "36-65")) {
    saturation = "calm";
  } else if (numberIsInRange(s, "66-90")) {
    saturation = "clear";
  } else if (numberIsInRange(s, "91-100")) {
    saturation = "vibrant";
  } //determine lightness term


  if (numberIsInRange(l, "0-5")) {
    lightness = "black";
  } else if (numberIsInRange(l, "6-10")) {
    lightness = "very dark";
  } else if (numberIsInRange(l, "11-35")) {
    lightness = "dark";
  } else if (numberIsInRange(l, "36-65")) {
    lightness = null;
  } else if (numberIsInRange(l, "66-85")) {
    lightness = "light";
  } else if (numberIsInRange(l, "86-98")) {
    lightness = "very light";
  } else if (numberIsInRange(l, "98-100")) {
    lightness = "white";
  } //determine hue term


  if (numberIsInRange(h, "0-5") || numberIsInRange(h, "346-360")) {
    if (saturation !== "grey" && lightness !== "black" && (l < 20 || s < 40)) {
      hue = "brown";
      hueNuance = "red";
    } else if (l < 30 || s < 50) {
      hue = "red";
      hueNuance = "brown";
    } else {
      hue = "red";
      hueNuance = null;
    }
  } else if (numberIsInRange(h, "6-9")) {
    //orange-ish red
    if (saturation !== "grey" && lightness !== "black" && (l < 70 || s < 50)) {
      hue = "brown";
      hueNuance = "orange";
    } else {
      hue = "red";
      hueNuance = "orange";
    }
  } else if (numberIsInRange(h, "9-12")) {
    //red-ish orange
    if (saturation !== "grey" && lightness !== "black" && (l < 70 || s < 50)) {
      hue = "orange";
      hueNuance = "brown";
    } else if (l < 48 || s < 50) {
      hue = "brown";
      hueNuance = "orange";
    } else {
      hue = "orange";
      hueNuance = "red";
    }
  } else if (numberIsInRange(h, "13-35")) {
    // orange
    if (saturation !== "grey" && lightness !== "black" && (l < 35 || s < 50)) {
      hue = "brown";
      hueNuance = "orange";
    } // else if ( l >= 60 || s < 90 ) { hue = "orange"; hueNuance="brown" }
    else {
      hue = "orange";
      hueNuance = null;
    }
  } else if (numberIsInRange(h, "36-42")) {
    //yellow-ish orange
    if (saturation !== "grey" && lightness !== "black" && l < 50 || s < 70) {
      hue = "brown";
      hueNuance = "olive";
    } else {
      hue = "orange";
      hueNuance = "yellow";
    }
  } else if (numberIsInRange(h, "43-46")) {
    //orange-ish yellow
    if (saturation !== "grey" && lightness !== "black" && (l < 50 || s < 70)) {
      hue = "olive";
      hueNuance = "brown";
    } else {
      hue = "yellow";
      hueNuance = "orange";
    }
  } else if (numberIsInRange(h, "47-61")) {
    //yellow
    if (saturation !== "grey" && lightness !== "black" && (l < 50 || s < 70)) {
      hue = "olive";
      hueNuance = null;
    } else {
      hue = "yellow";
      hueNuance = null;
    }
  } else if (numberIsInRange(h, "62-67")) {
    //green-ish yellow
    if (saturation !== "grey" && lightness !== "black" && (l < 50 || s < 70)) {
      hue = "olive";
      hueNuance = "green";
    } else {
      hue = "yellow";
      hueNuance = "green";
    }
  } else if (numberIsInRange(h, "68-74")) {
    //yellow-ish green
    if (saturation !== "grey" && lightness !== "black" && (l < 50 || s < 70)) {
      hue = "green";
      hueNuance = "olive";
    } else {
      hue = "green";
      hueNuance = "yellow";
    }
  } else if (numberIsInRange(h, "75-147")) {
    hue = "green";
    hueNuance = null;
  } else if (numberIsInRange(h, "148-157")) {
    hue = "green";
    hueNuance = "turquoise";
  } else if (numberIsInRange(h, "158-172")) {
    hue = "turquoise";
    hueNuance = null;
  } else if (numberIsInRange(h, "173-193")) {
    hue = "cyan";
    hueNuance = null;
  } else if (numberIsInRange(h, "194-201")) {
    hue = "cyan";
    hueNuance = "blue";
  } else if (numberIsInRange(h, "202-211")) {
    hue = "blue";
    hueNuance = "cyan";
  } else if (numberIsInRange(h, "212-255")) {
    hue = "blue";
    hueNuance = null;
  } else if (numberIsInRange(h, "256-258")) {
    hue = "blue";
    hueNuance = "purple";
  } else if (numberIsInRange(h, "259-265")) {
    hue = "purple";
    hueNuance = "blue";
  } else if (numberIsInRange(h, "266-280")) {
    hue = "purple";
    hueNuance = null;
  } else if (numberIsInRange(h, "281-287")) {
    hue = "purple";
    hueNuance = "magenta";
  } else if (numberIsInRange(h, "288-298")) {
    hue = "magenta";
    hueNuance = "purple";
  } else if (numberIsInRange(h, "299-316")) {
    hue = "magenta";
    hueNuance = null;
  } else if (numberIsInRange(h, "317-337")) {
    //red-ish magenta
    if (saturation !== "grey" && lightness !== "black" && (l < 30 || s < 40)) {
      hue = "magenta";
      hueNuance = "brown";
    } else {
      hue = "magenta";
      hueNuance = "red";
    }
  } else if (numberIsInRange(h, "338-345")) {
    //magenta-ish red
    if (saturation !== "grey" && lightness !== "black" && (l < 35 || s < 50)) {
      hue = "brown";
      hueNuance = "magenta";
    } else {
      hue = "red";
      hueNuance = "magenta";
    }
  } //For the last two groups below, we need to construct a natural-language sentence that can handle multiple adjectives with proper punctuation


  lightnessToPrint = lightness ? lightness + ", " : "";
  saturationToPrint = hueNuance ? saturation + ", " : saturation + " ";
  hueWithNuanceToPrint = hueNuance ? hueNuance + approximationSuffixToPrint + " " + hue : hue; //Is monochrome

  if (saturation == "monochrome") {
    if (lightness == "black" || lightness == "white") {
      colorDescription = "" + lightness;
    } else {
      if (!lightness) {
        lightness = "";
      }

      colorDescription = lightness + " grey";
    }
  } //Tinted black
  else if (lightness == "black") {
    colorDescription = hue + "-tinted black";
  } //Tinted white
  else if (lightness == "white") {
    colorDescription = hue + "-tinted off-white";
  } //Tinted grey - combine hue, lightness, saturation to determine color name:
  else if (saturation == "grey") {
    colorDescription = "" + lightnessToPrint + hue + approximationSuffixToPrint + " " + saturation;
  } //Any other color - combine hue, lightness, saturation to determine color name:
  else {
    colorDescription = "" + lightnessToPrint + saturationToPrint + hueWithNuanceToPrint;
  } //return color name


  return colorDescription;
};

exports.default = naevner;
//# sourceMappingURL=naevner.cjs.development.js.map
