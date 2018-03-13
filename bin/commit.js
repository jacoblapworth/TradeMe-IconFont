#! /usr/bin/env node
// console.log("console.log output")

require('simple-git')()
    .add('./*')
    .commit("first commit!")
    // .addRemote('origin', 'some-repo-url')
    .push(['-u', 'origin', 'master'], () => console.log('done'));