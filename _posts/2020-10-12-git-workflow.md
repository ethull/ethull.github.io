---
layout: post
title: Basic git workflows
description: Article on using git collabratively
categories:
    - Dev
comments: true
date: 2020-10-12T12:22:00+01:00
display-date:  2020-10-12
permalink: git-workflow.html
---
Use git with a basic forking workflow.

### Introduction
Guide to use git with a basic workflow, which will involve:
- forking a repo and making changes
- within fork having a separate branch for features
- merging forks feature branches into central/main repo

#### Process

fork repo -> locally clone -> new local feature branch created -> branch pushed to forked repo -> open a pull request from the forks new branch to the official repo -> if approved the branch is merged in the official repo

### Contribute to open source repo
- fork repo on github
    - go to the repositary on github, and fork it under your own username

- clone the repo to your local system 
```sh
git clone https://github.com/username/<reponame>
cd <reponame>
```
- create a branch for feature
```sh
git checkout -b username-feature
```
- make changes to files

- stage changes for edited files
```sh
git add .
```
- commit staged files
```sh 
git commit -m "commit message"
```
- push changes to your fork

    -u will set the upstream repo, allowing just `git push` in future
```sh
git push -u origin username-feature
```
- next, go to the original repo, and make a pull request
    
    merge your feature branch into master branch or the dev branch (if it exists)

### Incorporating changes to a fork after upstream changes
Someone else may of made a pull request and had their changes merged, so now your repo doesnt have the latest updates. Somehow these changes need to be pulled down and joined with your fork before you can pull request

- add the original repo as upstream remote and fetch references
```sh
git remote add upstream https://github.com/user/forked-repo
git fetch upstream
```

- now need to integrate upstream changes
    - method 1, merge the changes
        ```sh
        git merge upstream/master master
        ```
    - method 2, rebase 

        replay your local work on top of the fetched branch. make sure you are in the branch you want to rebase if you dont specify it
        ```sh 
        git rebase upstream/master master
        ```
