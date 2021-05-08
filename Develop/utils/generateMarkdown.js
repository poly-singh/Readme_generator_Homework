function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**

## Licensing:
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
[![license](https://img.shields.io/badge/license-${data.badge}-blue)](https://shields.io)

## Contributors
${data.contributing}
## Test
${data.test}
## Repository
- [Project Repo](${data.repo})
## GitHub
![Image of me](${githubInfo.githubImage})
- ${githubInfo.name}
- [GitHub Profile](${githubInfo.profile})
- <${githubInfo.email}>
`;
}

module.exports = generateMarkdown;
