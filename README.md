# SVG-Logo-Maker
Challenge #10

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

 * [Description](#description)

 * [Live-Screen-Recording-of-Application-Functionality](#live-screen-recording-of-application-functionality)

 * [Screenshots](#screenshots)

 * [Technologies-Used](#technologies-used)

 * [Installation](#installation)

 * [Credits](#credits)

 * [Features](#features)

 * [Usage-Information](#usage-information)

 * [Test-Instructions](#test-instructions)

 * [License](#license)


## Description

This application caters to freelance web developers seeking a cost-effective solution for creating simple logos without hiring a graphic designer. By leveraging the "inquirer" library, it prompts users in the command line to specify their logo preferences, including text content (up to 3 characters), text color, logo shape (triangle, square, or circle), and shape color. After collecting all user inputs, the application generates an SVG file incorporating the chosen logo design.
This project has the implementation of unit testing, which ensures the code's correctness. The test suite consists of three tests, verifying that the application produces accurate shapes and colors. Through this development process, I gained insights into the significance of unit testing in larger projects involving multiple developers, it also highlights the potential of creating powerful applications without a graphical user interface. I also introduced some error handling in the first user prompt, preventing logos from being generated when more than three characters are entered.

## Live Screen Recording of Application Functionality

https://drive.google.com/file/d/1D-y4gTd9jABxl0IZz9CiwwPmQrj_9JGY/view?usp=share_link


## Screenshots

Logo Generation
<img width="648" alt="Screenshot-Terminal" src="https://github.com/carloscastilloflores/Challenge10th-SVGLogoMaker/assets/125534814/5d9734b9-5107-4217-817b-90b3063d9535">

<img width="1435" alt="SVG file" src="https://github.com/carloscastilloflores/Challenge10th-SVGLogoMaker/assets/125534814/b2d87c9d-afd9-4d02-84b5-3b2a0a3627cb">

<img width="1440" alt="Index.js Code" src="https://github.com/carloscastilloflores/Challenge10th-SVGLogoMaker/assets/125534814/4c869672-b31f-4ff8-bed3-67a85c74aa2c">


Examples of Generated Logos
<img width="296" alt="Example 1" src="https://github.com/carloscastilloflores/Challenge10th-SVGLogoMaker/assets/125534814/0bc9ae69-c57e-4ee8-a886-f512dbc3476d">

<img width="334" alt="Example 2" src="https://github.com/carloscastilloflores/Challenge10th-SVGLogoMaker/assets/125534814/171321fc-814d-4071-b886-51775dd8c736">

<img width="339" alt="Example 3" src="https://github.com/carloscastilloflores/Challenge10th-SVGLogoMaker/assets/125534814/abb8bea3-8d9d-407e-b445-e2f532c7ddf7">


## Technologies Used

This project is built on Node.js v16 and relies on various Node package manager (NPM) dependencies, including inquirer v8.2.4 for user input, the file system module for file handling, and jest v29.5.0 for conducting unit tests. To ensure proper handling of test files, Jest is configured to use Babel for transformation.

## Installation

1. Begin by cloning the repository using the following command:
   ```
   git clone https://github.com/carloscastilloflores/Challenge10th-SVGLogoMaker.git
   ```

2. Proceed to open the project in Visual Studio Code. In case you do not have Visual Studio Code installed, it is essential to install it beforehand.

3. Through the terminal, install Node.js v16. If you are using Homebrew, the command may resemble the following: `brew install node@16`. However, please refer to the documentation for specific instructions tailored to your setup.

4. Once Node.js v16 is successfully installed, initialize the project by creating a package.json file using the following terminal command: `npm init -y`.

5. Subsequently, employ the terminal to install the application's dependencies by executing the command: `npm i`. Developers may also need to install the inquirer and jest packages directly from the command line, using the following commands, respectively: `npm i inquirer@8.2.4` (for version 8.2.4 of inquirer) and `npm i jest` (for the latest version of jest). 

6. To execute the application, within the terminal, utilize the command: `node index.js`.

## Credits

Worked with the help of TA instructors, and colleagues from bootcamp, searched in different forums such as stackoverflow. 

## Usage Information

To run this application, follow these steps:

1. Use the command line to navigate to the directory of the application.
2. Install all dependencies by running the command: npm i.
3. To start the application, type the command: node index.js.
4. You will be guided through a series of questions to customize your logo. Ensure to provide appropriate responses to each question.
5. Upon answering all questions correctly, a message will be displayed in the command line indicating that your logo has been successfully generated.
6. Locate your newly created logo in the SVG file that has been generated by the application.

## Test Instructions

To execute unit testing, access the terminal and utilize the command npm run test. This will initiate the testing process, allowing you to assess the application's functionalities and ensure that it adheres to the specified requirements and standards.

<img width="573" alt="Test" src="https://github.com/carloscastilloflores/Challenge10th-SVGLogoMaker/assets/125534814/2e122f80-d444-4b41-929b-a69a218ab046">


## License

This application is covered under the MIT License

