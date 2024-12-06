---
layout: post
title: Deboostrap a debian system
description: deboostrap a debian system
categories:
    - Linux
comments: true
date: 2020-07-31T17:30:00+01:00
display-date: 2020-07-31
permalink: linux-deboostrap-install.html
---
Install debian without an iso.

### introduction
Normally to install a linux distribution, you would download an iso, burn it to a usb with something like rufus or etcher, and then boot into it. But this can be timely and hard to automate, an experienced user may prefer to create a system from their already existing distribution.

### create partition
Open gparted, create your ext4 root partition, if you have a separate media partition and dont plan to use steam games, then <30GB should be enougth. 
See [dual booting linux](/dual-boot-linux.html) for parition schemes.

- get id of new parition
```sh
lsblk
```
- if your partition software hasn't/can't write a ext4 filesystem
```sh
    mkfs.ext4 /dev/[parition_id]
```

- create a mountpoint and mount
```sh
mkdir /mnt/deb
sudo mount /dev/[parition_id] /mnt/deb
```

### build system
This script will bootstrap a minimal debian or ubuntu system.
Install
```sh
sudo apt install debootstrap
```
example options
- variant, choose a minimal environment just for chroot or a full system
- flavor choose a flavour/suite of debian, sid=unstable, bullseye=testing, buster=stable
 
    stable has old packages but is good for servers, otherwise testing gives more up to date packages
- build dir: target dir to create the system, this should be the mounted partition
- debian mirror: debian mirror to use to download the packages from, choose one close to your country

```
sudo debootstrap 
--variant=[minbase | buildd] \
[flavor] \
[build_dir] \
[debian_mirror]
```
```sh
sudo debootstrap \
--variant=buildd \
bullseye \
/mnt/deb \
http://ftp.uk.debian.org/debian
```
### config
#### setup fstab
get uuid of mounted parition
```sh
sudo blkid | grep -w UUID=
```
copy your original fstab, and replace root uuid with uuid of mounted partition
```sh
sudo cp /etc/fstab /mnt/etc/fstab
```
#### chroot
Here the root is temporary changed to the debootstraped system. Allowing for us to run commands within it.
Additional mounts are needed to get some programs within the chroot to work.
```sh
mount -t proc proc /mnt/deb/proc
mount -o bind /dev /mnt/deb/dev
mount -o bind /sys /mnt/deb/sys
chroot /mnt/deb
```
#### timezone
If not using a server, you will need to set your local timezone.

- find your region in /usr/share/zoneinfo/[Region]/[City] and symlink
```sh
    ln -sf /usr/share/zoneinfo/Europe/Berlin /etc/localtime
```

#### locale
If not using a server, you should configure and generate locales.

- you can config locale from an interactive ncurses interface
```sh
dpkg-reconfigure locales
```
- or you can do it manually
```sh
    vi /etc/locale.gen 
        #uncomment your locale, EG for germany
        de_DE.UTF-8 UTF-8
        de_DE ISO-8859-1
        de_DE@euro ISO-8859-15
    locale-gen
    vi /etc/locale.conf 
        LANG=de_DE.UTF-8
```
- if you have a non-standard keyboard you may need to configure it
```sh
    dpkg-reconfigure keyboard-configuration
```

##### config network
```sh
echo -e `hostname` >> /etc/hostname
echo -e \ "127.0.0.1\tlocalhost\n::1\tlocalhost\n127.0.1.1\t`hostname`.localdomain `hostname`" >> /etc/hosts
```
Rather than manually configure network interfaces, its much easier just to use network-manager.
```sh
apt install network-manager
```
### users
- set the root password
```sh
    passwd
```
- create a user and add them to the sudo group
```sh
    useradd username
    usermod -aG sudo username
```

### install and config bootloader
Grub is the most widely used bootloader and will likely work with little config.

- install, os-prober allows grub to search for other operating systems
```sh
sudo apt install grub os-prober
```
- check if system is efi or mbr
    - unless your computers quite old, it likely uses efi, /sys/firmware/efi only exists on efi systems
```sh
ls /sys/firmware/efi
```
- if efi
    - make sure your efi partition is mounted
    - install
    ```sh
    sudo grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=debian-grub
    ```
    - usefull tool to manage efi partition in the future
    ```sh
    sudo apt install efibootmgr
    ```
- if mbr, where sdX is your disk
```sh
    sudo grub-install --target=i386-pc /dev/sdX
```
- generate config, grub will also detect any other operating systems
```sh
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

### install kernel
- search for a kernel
```sh
    apt-cache search linux-image
```
- EG, the current default kernel for the amd64 architecture
```sh
    apt-get install linux-image-amd64
```

### install any needed packages
install programs you want staright after reboot
```sh
apt-get install curl wget vim tmux
```

## clean up chroot
    exit
    unmount -R /mnt 
    reboot
