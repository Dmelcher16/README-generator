// function to generate markdown for README
function generateMarkdown({license, projectname, description, install, info, contribute, test, email, username}) {
  return `
  ![license badge](https://img.shields.io/badge/license-${license}-blue)

  # ${projectname}

  ## DESCRIPTION
  ${description}


  ##TABLE OF CONTENTS\n


  [Installation](#installation)\n
  [Usage](#usage)\n
  [License](#license)\n
  [Contributions](#contributions)\n
  [Testing](#testing)\n
  [Questions](#questions)\n


  ## INSTALLATION
  Please run \`${install}\` in the command line to install dependencies.


  ## USAGE
  ${info}


  ## LICENSE
  The type of license this project uses is - ${license}


  ## CONTRIBUTIONS
  ${contribute}


  ## TESTING
  For testing please run \`${test}\` in the command line.
  

  ## QUESTIONS
  All inquiries can be sent to ${email}, and be sure to check out more of my GitHub projects at [${username}](https://www.github.com/${username})


`;
}

module.exports = generateMarkdown;
