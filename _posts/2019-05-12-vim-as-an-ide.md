---
layout: post
title: Post - Vim as an IDE
description: Article on how to setup vim to function as a lightweight IDE
categories:
    - Post
comments: true
date: 2020-05-12T20:34:04+01:00
permalink: vim-ide.html
---

this guide aims to setup vim as an IDE that supports multiple languages
EG: html, css, javascript, php, python, java, c/c#/c++, shell, latex


# prerequisits
linux or bsd based operating system
assumes ubuntu, but you can jsut substitute apt commands for your distros package manager
root privalleges

## install basic packages
### proper vim package
Some distributions come shipped with vim-tiny or just terminal vim, these packages normally lack functionality.
The graphical package contains all vim functionality, its needed even if you dont use graphical vim.
The package has different names between distribtuions but generally its called vim-gtk3 or gvim.
```sh
sudo apt install -y vim-gtk3
```
### installed version of the languages this ide will support
- javascipt
```
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```
- php
`sudo apt install php`
- python
`sudo apt install -y python3 pip3`
- java, needs to be installed by ppa since nodejs and npm versions in ubuntu repos aren't compatible
`sudo apt install openjdk-11-jdk`
- c/c#/c++
- latex, using the crossplatform texlive system
`sudo apt install texlive-latex-extra`

# plugins
## linters and fixers
linters are programs that scan a file for errors and style problems is your code, they then present these errors to you.
fixers detect style problems and maybe some errors, then they automatically fix them after a certain condition, for example every time you save the file.

managing linters/fixers and binding them to keys can be very difficult, so its good to have a plugin that can manage them all and provide extra features.

Ale is a plugin, that lints asyncronously, so it will run scans every time you change vim mode

Linter and fixer programs generally apply to one language, so we will need at least one per language.
### setup
first we need to install the linters
```
pip3 install pyflakes
pip3 install black

sudo npm install eslint -g

```
then tell ale to use them in vimrc
```vimscript
let g:ale_linters = {
    \'python': ['pyflakes'],
    \'javascript': ['eslint', 'standard'],
    \'java': ['checkstyle'],
    \'c': ['clang','gcc'],
    \'html': ['htmlhint'],
    \'tex': ['chktex', 'lacheck'],
    \'php': ['php']
    \}
let g:ale_fixers = {
    \'*': ['remove_trailing_lines'],
    \'python': ['black'],
    \'javascript': ['eslint'],
    \'typescript': ['prettier'],
    \'css': ['prettier'],      
    \'scss': ['prettier'], 
    \'html': ['prettier'],
    \'php': ['php_cs_fixer']
    \}
```




Navigate to <a href="https://ubuntu.com/download"> https://ubuntu.com/download</a>
 and download a version of ubuntu 

<img src="/assets/images/posts/dualboot-linux/rufus.png" alt="rufus" /><br />

## bios settings
1. Reboot computer, but while logo is showing spam your bios key, which is likely to be F2 or F12. 
2. Select bios settings.

<!-- <img src="/assets/images/posts/dualboot-linux/bios_settings.png" alt="bios settings" /> -->

<br />
#### layout notes
* Chose swap size equal to your ram unless your RAM is > 8000 mb.

Example parameter: <code>
linux /boot/vmlinuz-5.3.0-26-generic root=UUID=a39c6c74-eb7e-4e17-b78a-d23c952061cd ro  quiet splash nomoset
</code>
