import inquirer from 'inquirer'; 
// const { svg } = require("html-minifier");
import svg from 'html-minifier';
import fs from 'fs';

const colors = [
  "black",
  "white",
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
];

const shapes = [
  "circle",
  "triangle",
  "square",
];

async function main() {
    // Not sure how await works
    // Not sure how async works either
  const text = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter text for the logo (up to 3 characters): ",
    },
    {
      type: "select",
      name: "color",
      message: "Select a color for the text: ",
      choices: colors,
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape for the logo: ",
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a color for the shape (keyword or hex): ",
    },

  ]);

  const shape = await inquirer.prompt([
    {
      type: "list",
      name: "shape",
      message: "Select a shape for the logo: ",
      choices: shapes,
    },
  ]);

  const logo = {
    text,
    color: textColor(text, colors),
    shape,
    shapeColor: shapeColor(textColor(text, colors), text, shapes, textColor(text, colors)),
  };

  const svgString = generateSvg(logo);

  const svgFile = `logo.svg`;

  fs.writeFileSync(svgFile, svgString);

  console.log(`Generated ${svgFile}`);
}

function textColor(text, colors) {
  if (colors.includes(text)) {
    return text;
  } else {
    return "#000000";
  }
}

function shapeColor(textColor, text, shapes, shapeColor) {
  if (shapeColor) {
    return shapeColor;
  } else if (shapes.includes(text)) {
    return textColor;
  } else {
    return "#ffffff";
  }
}

function generateSvg(logo) {
  const svg = `
<svg width="300" height="200">
  <text x="50" y="50" fill="${logo.color}">${logo.text}</text>
  <${logo.shape} x="100" y="100" width="100" height="100" fill="${logo.shapeColor}"></${logo.shape}>
</svg>
`;
// Why return? 
  return svg;
}

if (import.meta.main )  {

}
main();