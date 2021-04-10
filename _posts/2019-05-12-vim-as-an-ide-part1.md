---
layout: post
title: Vim as an IDE part 1
description: Article on how to setup vim to function as a lightweight IDE
categories:
    - Vim
comments: true
date: 2020-05-12T20:34:04+01:00
permalink: vim-ide-p1.html
---
IDEs have lots of features and generally can support most of a programmers needs.
But they can be bloated and on older hardware can be slow. Further more, if the IDE is 
properitary you may have to pay for full functionality or spend time signing up.

Vim is highly customizable and has multiple modes for productivity, with the right plugins you can make it into a multi-language IDE.

There is a lot of plugins so I'll split it into 2 parts with this part showing essentional setup.

## prerequisits
Basic knowledge of vim configuration.

### proper vim package
Some distributions come shipped with vim-tiny or just terminal vim, and these packages normally lack functionality.
Where as the graphical package contains all vim functionality, its good to have even if you dont use graphical vim.
The package has different names between distribtuions but generally its called vim-gtk3 or gvim.
```sh
sudo apt install -y vim-gtk3
```
## vim settings
Basic configuration for ~/.vim/vimrc configuration.
### general progamming settings
Generally these will be updated by language pack relative to open file type.
```vimscript
set tabstop=4
set softtabstop=4
set shiftwidth=4
set expandtab
```
### map leader keys
These are keys that prefix a macro, so more key combinations can be mapped.
And this will be usefull with code-specifc plugins later on.
```vimscript
let mapleader=','
let maplocalleader='\'
```

### custom commands 
define custom commands to use with :command

remove whitespace
```
command! FixWhitespace :%s/\s\+$//e
```
### other
enable plugins
```vimscript
filetype plugin indent on
```
## plugins
### project explorer
This adds a toggleable pane to the left of the editor that shows the current directory.
Vim has a built in PE called netrw, but generally the nerdtree plugin is much popular.

https://github.com/preservim/nerdtree

### fuzzy finder
Used to find things via typing some of what you want to find, and the finder guessing what you mean.
Can be used to find files, and they generally hook into any search commands.
- https://github.com/junegunn/fzf
- https://github.com/ctrlpvim/ctrlp.vim

Fzf also has a version outside vim thats usefull for finding files straight from the terminal.

### preview colors
Allows you to preview colors in vim, when you type a color its name reflects its background color.

https://github.com/gko/vim-coloresque

### git
Integration with git version control.
- Use git commands from vim
    - https://github.com/tpope/vim-fugitive
- Allows fugitive :Gbrowse
    - https://github.com/tpope/vim-rhubarb
- Visual repersentation of git diff left of line numbers, will show what lines have been added/removed/changed since last commit.
    - https://github.com/airblade/vim-gitgutter

### snippets
Snippets of code, this will autocomplete characters into a predefiend snippet.

- Snippet engine that autocomplete them and defines their syntax.
    - https://github.com/sirver/UltiSnips
- Predefined snippets for most langauges.
    - https://github.com/honza/vim-snippets

EG autocomplete java System.out.println() to sout

### sessions
Saves all open files as a session, you can save multiple sessions persistently.
So you can log off/on and resume on to where you where.

- Scripts needed for most of xoloxs plugins.
    - https://github.com/xolox/vim-misc
- Session management enhancement.
    - https://github.com/xolox/vim-session

### language packs
Collection of language packs, extends vims built-in syntax and language specifc options.
- https://github.com/sheerun/vim-polyglot
### indentation line
Vertical jotted line that shows indentation between horizontal lines.
- https://github.com/Yggdroot/indentLine
