function generateMarkdown(data, githubInfo) {
  return `
# ${data.title}

![contributors](https://img.shields.io/badge/MadeBY-poly--singh-green)
[![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)
## Description 
${data.description}
## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 
## Installation
        ${data.installation}
## Usage
        ${data.usage}
## Licence
[![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

## Contributors
![contributors](https://img.shields.io/badge/MadeBY-poly--singh-green)
## Test
![Test](https://img.shields.io/badge/test-100%25-green)
## Repository
- [Project Repo](${data.repo})
## GitHub

- ${githubInfo.name}
- [GitHub Profile](${githubInfo.profile})
- <${githubInfo.email}>
`;
}

module.exports = generateMarkdown;
