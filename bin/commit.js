#! /usr/bin/env node
// console.log("console.log output")

var git = require('simple-git');
var inquirer = require('inquirer');
const semver = require('semver')

// var latestVersion = git().tags([
//     { 'describe': null },
//     { '--abbrev': 0 },
//     { '--tags': null }
// ])


git().tags((err, tags) => console.log("Latest available tag: %s", tags.latest));

// console.log('Current version is: ' + latestVersion)

var prompts = [{
    type: 'list',
    name: 'semver',
    message: 'How major is the change to the set?',
    choices: [
        '0.0.x Patch', 
        '0.x.0 Minor', 
        'x.0.0 Major'
    ]
},
{
    type: 'input',
    name: 'changes',
    message: 'What changes were made to the icon set?'
}]

inquirer.prompt(prompts).then(answers => {
    console.log(answers)
});


// git()
//     .add('./*')
//     .commit("first commit!")
//     // .addRemote('origin', 'some-repo-url')
//     .push(['-u', 'origin', 'master'], () => console.log('done'));

