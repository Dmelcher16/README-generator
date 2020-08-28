const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const prompts = require("./utils/prompts.js");

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName + ".md", data, (err) => {
    if (err) throw err;
    console.log("Checkout your new README!");
  });
};

// function to initialize program
async function init() {
  let data = await prompts();
  let readme = generateMarkdown(data);
  writeToFile(data.projectname, readme);
};

// function call to initialize program
init();
