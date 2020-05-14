---
layout: post
title: Post - Vim as an IDE part 2
description: Article on how to setup vim to function as a lightweight IDE
categories:
    - Post
comments: true
date: 2020-05-12T20:34:04+01:00
permalink: vim-ide-p2.html
---
This is an extension to my first vim-ide post.
But this part focuses on setup for intellisense features that increase coding performance, like scanning for errors, autocompletion, refractoring and more.

## install languages to the system
Install the languages/tools your vim will need to support. If your language is constantly updated, your distribution may not have the latest package, for example ubuntu generally has verions of nodejs and npm that aren't compatible with each other.
- javascipt
```sh
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```
- python interpreter, pip3 package manager
```sh
sudo apt install -y python3 pip3
```
- texlive cross platofrm latex system, latexmk compiler
```sh
sudo apt install texlive-latex-extra
sudo apt install latexmk
```

## plugins
### linters and fixers
Linters are programs that scan a file for errors and style problems in your code, they then present these errors to you.

Fixers detect style problems and maybe some errors, and then they automatically fix them after a certain condition, for example every time you save the file.

Using multiple linter/fixer plugins and configuring them can be difficult, so its better to use a large all in one solution. Ale is a plugin that lints asyncronously, so it will run scans every time you change vim mode.

Linter and fixer programs generally apply to one language, so we will need at least one per language.
#### install 
install the linters and fixers
- javascipt <br /> 
Eslint can serve as a linter and a fixer.
```sh
sudo npm install eslint -g
```
- python <br />
Pyflakes just lints for errors, and the python software foundations black autoformats code to confirm to official style rules.
```sh
pip3 install pyflakes
pip3 install black
```
- latex <br />
Depending for what tex package you downloaded, some linters may aready be installed.
```sh
sudo apt install chktex
sudo apt install lacheck
```

if you cant find a linter or fixer, you can check ales linter scripts, all supported linters with be there
https://github.com/dense-analysis/ale/tree/master/ale_linters
#### config vim
then tell ale to use them in vimrc
```vimscript
let g:ale_linters = {
    \'javascript': ['eslint'],
    \'python': ['pyflakes'],
    \'tex': ['chktex', 'lacheck']
    \}
let g:ale_fixers = {
    \'*': ['remove_trailing_lines'],
    \'javascript': ['eslint'],
    \'python': ['black']
    \}
```

### language servers (LSPs)
Microsofts language server protocol uses a server to provide intellisense to the editor (client), since the functionality instant build stright into the editor, it can easyily be implemented across many editors.
The main lsp functionality is autocomplete, but most provide many more features: go to definition, refractor, lint, ...
#### coc.nvim
Vim needs a plugin to act as a client for the language server.
Coc.nvim is one that gets activate development, and has many language servers from vs-code extensions.
##### LSPs
Coc.nvim has lsps to support most languages and most LSPs can be installed without any configuration as an extension via <br /> :CocInstall coc-lspname
- javascript (and typescript)
    - https://github.com/neoclide/coc-tsserver
    - :CocInstall coc-tsserver
- python
    - https://github.com/neoclide/coc-python
    - :CocInstall coc-python
    - https://github.com/fannheyward/coc-pyright
    - :CocInstall coc-pyright

### others
If you cant find a working/compatible linter/fixer/lsp for a language or need more functionality, then you get an individual plugin for that language.

For example vimtex for latex.
- https://github.com/lervag/vimtex
- Features
    - live preview latex documents from a variety of pdf viewers
    - key bindings to naviage documents quicker
    - better syntax highlighting

May also need additional packages, vimtex requires latexmk to compile docs.
