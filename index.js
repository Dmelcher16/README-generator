const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

// array of questions for user
// const questions = [
//     {
//         type: "input",
//         message: "What is your GitHub username?",
//         name: "username",
//     },
//     {
//         type: "input",
//         message: "What is your email address?",
//         name: "email",
//     },
//     {
//         type: "input",
//         message: "What is your project's name?",
//         name: "projectname",
//     },
//     {
//         type: "input",
//         message: "Please write a short dscription of your project.",
//         name: "description",
//     },
//     {
//         type: "list",
//         message: "What kind of license should your project have?",
//         name: "license",
//         choices: ["MIT", "GPL", "Apache", "Public Domain (unlicensed)"]
//     },
//     {
//         type: "input",
//         message: "What command should be run to install dependencies?",
//         name: "install",
//     },
//     {
//         type: "input",
//         message: "What command should be run to run tests?",
//         name: "test",
//     },
//     {
//         type: "input",
//         message: "What does the user need to know about using the repo?",
//         name: "info",
//     },
//     {
//         type: "input",
//         message: "What does the user need to know about contributing to this repo?",
//         name: "contribute",
//     }
// ];
inquirer.prompt(questions)
.then(function(response){
    console.log(response)
    let docName = response.projectname + "-README.md";
    let docTitle = "# " + response.projectname;
    let descriptionTitle = "Description";
    let description = response.description;
    // let answers = JSON.stringify(response, null, 2);
})

// function to write README file
function writeToFile(docName, data) {
        fs.writeFile(docName, docTitle, (err) =>{
            if (err) throw err;
            console.log("Checkout your new README!")
        })

}
// function writeToFile(projectname.md, data) {
// }

// function to initialize program
function init() {

}

// function call to initialize program
init();
