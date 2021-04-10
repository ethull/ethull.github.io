---
layout: post
title: Post - transfer files to android using ftp
description: article on how to move files between linux and android using ftp
categories:
    - Post
    - Android
comments: true
date: 2021-04-06T18:24:49+01:00
permalink: android-ftp.html
---

A common way to transfer files between android and desktop, is to physically plug the phone into the computer, and then transfer files via the mtp (media transder protocol). But this protocol is slow and buggy, and its likely to cause problems when transfering large volumes of files. One alternative to use the ftp protocol.

## intro

This solution involves running a ftp server on an android phone, and then using a ftp client on the desktop to comunicate with it. The server is installed the phone because this provides more flexibility (than a linux daemon).

## setup the server
- program used: primitive ftpd (https://f-droid.org/en/packages/org.primftpd)
- a simple ftp server
- after install select: Android Storage Access Framework (SAF)
    - this will make your SD card accessible to the client
- go to settings
    - add a username and password
    - change port if needed (default is 12345)
- when you want to run the ftp server, press the play button

## setup the client
- program used: cbftp (https://cbftp.eu)
- a minimalistic terminal UI (ncurses) ftp client built in cpp

install (assuming ubuntu):
```sh
sudo apt install build-essential openssl libncursesw5-dev #g++ libssl-dev libncursesw5-dev
wget https://cbftp.eu/cbftp-r1165.tar.gz
tar xf cbftp-r1165.tar.gz -C cbftp
cd cbftp
make # can add -j[numOfCpuCores]
ln -s $PWD/bin/cbftp /usr/local/bin
```
in app setup:
- press A: to edit the site
    - change address to the ip address and port displayed in pftpd
        - EG 192.169.2.200:12345
    - change username and password to previously set in pftpd
    - if you have one desktop you plan to connect with, change all of login/upload/download slots to 1
    - you likely dont need to change any other options
- press d: finish configuration

## transfer files
- make sure ftpd is running and cbftp has the right credentials

from cbftp:
- select the android phone with the arrow keys
- use the arrow keys to navigate

summary of useful commands:
- tab - create dual pane -> then mv between panes
- c - close current pane
- esc - go back / quit what your doing
- s - sort files
- qx - jump to file name with first occurance of letter x....
- Delete - del file
- space - mark a file as selected (use to select multiple files that dont have to be directly next to each other)
- shift up/down * -> space - select multiple adjacent files from current file
- t - transfer/copy file between devices
