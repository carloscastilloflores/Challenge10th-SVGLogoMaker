import inquirer from "inquirer";
import fs from "fs";

import { Triangle, Square, Circle } from "./lib/shapes.js";
  
// function writeToFile(fileName, answers) {
//   let svgString = " ";
//   svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
//   svgString += "<g>";
//   svgString += `${answers.shape}`;

//   let shapeChoice;
   
//   if (answers.shape === "Triangle") {
//     shapeChoice = new Triangle(); 
//     svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackground}"/>`;
//   } else if (answers.shape === "Square") {
//     shapeChoice = new Square(); 
//     svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackground}" />`;
//   } else {
//     shapeChoice = new Circle(); 
//     svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackground}" />`
//   }

//   svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
//   svgString += "</g>";
//   svgString += "</svg>";
  
//   fs.writeFile(fileName, svgString, (err) => {
//     err ? console.log(err) : console.log("Generated logo.svg");
//   });
// } 

function writeToFile(fileName, answers) {
  const shapeBackground = answers.shapeBackground;
  const textColor = answers.textColor;
  const text = answers.text;

  let shapeChoice;

  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
  } else {
    shapeChoice = new Circle();
  }

  const svgString = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <g>
       ${shapeChoice.render(shapeBackground)}  
        <text x="150" y="130" text-anchor="middle" font-size="40" fill="${textColor}">${text}</text>
      </g>
    </svg>
  `;

  fs.writeFile(fileName, svgString, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Generated logo.svg");
    }
  });
}


function mainPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "Enter text for the logo (Up to 3 characters): ",
      },
      {
        type: "input",
        name: "textColor",
        message: "Choose text color (Enter color keyword OR a hexadecimal number)",
      },
      {
        type: "list",
        name: "shape",
        message: "Select a shape for the logo: ",
        choices: ['Triangle', 'Circle', 'Square'],
      },
      {
        type: "input",
        name: "shapeBackground",
        message: "Enter a color for the shape (keyword or hex): ",
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3 ) {
        console.log("Must enter text of no more than 3 characters");
        mainPrompt();
      } else {
        writeToFile("logo.svg", answers);
      }
    });
  }

  
  mainPrompt();

// function generateSvg(logo) {
//   const svg = `
// <svg width="300" height="200">
//   <text x="50" y="50" fill="${data.color}">${data.text}</text>
//   <${data.shape} x="100" y="100" width="100" height="100" fill="${data.shapeColor}"></${data.shape}>
// </svg>
// `;
// // Why return? 
//   return svg;
// }

// const shape = await inquirer.prompt([
//   {
//     type: "list",
//     name: "shape",
//     message: "Select a shape for the logo: ",
//     choices: shapes,
//   },
// ]);

// const logo = {
//   text,
//   color: textColor(text, colors),
//   shape,
//   shapeColor: shapeColor(textColor(text, colors), text, shapes, textColor(text, colors)),
// };


// const colors = [
//   "black",
//   "white",
//   "red",
//   "green",
//   "blue",
//   "yellow",
//   "purple",
//   "orange",
//   "pink",
//   "brown",
// ];

// const shapes = [
//   "circle",
//   "triangle",
//   "square",
// ];

// const svgString = generateSvg(logo);

// const svgFile = `logo.svg`;

// fs.writeFileSync(svgFile, svgString);

// console.log(`Generated ${svgFile}`);

// function generateSvg(logo) {
//   const svg = `
// <svg width="300" height="200">
//   <text x="50" y="50" fill="${text.color}">${text.text}</text>
//   <${text.shape} x="100" y="100" width="100" height="100" fill="${text.shapeColor}"></${text.shape}>
// </svg>
// `;
// // Why return? 
//   return svg;
// }
// }

// function textColor(text, colors) {
// if (colors.includes(text)) {
//   return text;
// } else {
//   return "#000000";
// }
// }

// function shapeColor(textColor, text, shapes, shapeColor) {
// if (shapeColor) {
//   return shapeColor;
// } else if (shapes.includes(text)) {
//   return textColor;
// } else {
//   return "#ffffff";
// }
// }