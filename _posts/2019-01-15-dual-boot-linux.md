---
layout: post
title: Dual boot linux
description: Article on how to dual boot linux
categories:
    - Linux
comments: true
date: 2019-09-01T14:58:00.000Z
display-date:  2019-09-01
permalink: dual-boot-linux.html
---
Install both windows and linux on the same computer.

# prerequisits
bootable usb drive with >4 gig

second SSD or HDD: It is recommended to install linux on a different drive from windows
    (as there may be future problems or a longer installation)

this guide assumes you have a UEFI/GPT system (most likely)


# windows installation preperation
## get the linux iso 
First we need to download a linux os in the form of an iso. In this example I'll use ubuntu

Navigate to <a href="https://ubuntu.com/download"> https://ubuntu.com/download</a>
 and download a version of ubuntu 

<img src="/assets/images/posts/dualboot-linux/ubuntu_download.png" alt="ubuntu download" />
## check iso authenticy (hash)
We can use a hash algorithm to check if the ISO has been tampered with (which may break linux or infect your installation).

method 1, run cmd and type: <code> FCIV -sha256 C:\[path to file]  </code> <br /> 
method 2, run powershell and type: <code> Get-FileHash -Path C:\[path to file] -Algorithm SHA256 </code> <br />
method 3 (GUI): If you have 7zip installed, right click the iso and click calculate hashes (only look at the SHA256 hash).

Compare calculated hash to hash displayed on ubuntu's website for your ubuntu version, if the hash doesnt match you should discard it and get anouther iso.

## burn (install) iso to your usb
First you need to install a software that can burn the iso to our usb.

Navigate to <a href="https://rufus.ie">https://rufus.ie</a> and click download.

Plugin your USB, then launch rufus. <br />
Select the USB and the iso you downloaded earlier. <br />
Then select gpt partition scheme and uefi mode, finally click Start.

<img src="/assets/images/posts/dualboot-linux/rufus.png" alt="rufus" /><br />
## windows settings
Some power settings should be turned off while within windows.

Open control panel and click through: All Control Panel Items > Power Options > System Settings <br />
Turn off fast startup and hibernation.
# <img src="/assets/images/posts/dualboot-linux/power_options.png" alt="windows power options" /><br />
If installing linux to the same drive as windows, it would be a good idea to turn off full disk encryption. <br />
Go to bitdefender settings and disable encryption.

## bios settings
1. Reboot computer, but while logo is showing spam your bios key, which is likely to be F2 or F12. 
2. Select bios settings.
3. Look for the secure boot option and turn off, this allows unsigned software to run at boot-time, making your computer more compatible with linux.
4. Select enable legacy action ROMS to allow your computer to boot from usb.

<!-- <img src="/assets/images/posts/dualboot-linux/bios_settings.png" alt="bios settings" /> -->
# install system
## boot into usb
Return to bios menu, then select the usb you installed the linux iso to earlier.
## prep for windows shared partition
If you want to create a ntfs partition, then you need to install the driver for it first:

Click the wifi icon in the toolbar to setup wifi. <br />
Open the terminal and type: <code> sudo apt install ntfs-3g </code>

## run through installer
Run the install-ubuntu program on the desktop.
Click through leaving all defaults selected and entering your computer infomation.

## partition disk
Once at the partition screen, select something else.
### 2 hardrives
Identify which drive is not your main windows drive. <br />
Then partition your drive, following the example partition layout:
```
    500 mb (megabit), /efi, start of drive, type efi
    >10000 mb, /, start of drive after efi, ext4 filesystem
    ---
    leave some room (unallocated space)
    ---
    <=8000 mb, /swap, end of drive, type swap
    /storage, end of drive, type ext4 or ntfs filesystem

    select partition to install bootloader: select your /efi partition
```
<br />
#### layout notes
* Chose swap size equal to your ram unless your RAM is > 8000 mb.
* A home partition is not required.
* Storage partition is optional but recomended, format as ntfs if you want to share it with windows.
* Your root partition is where the majourity of your system with be located, so it should have resonable size.
* You can use the unallocated space to enlarge your root partition or to install anouther system.

### 1 hardrive
If windows has covered the entire disk you'll need to shrink its partition. <br />
Create / and /swap partitions same as above and optionally /storage. <br />
When selecting partition to install bootloader, chose your windows efi partition.

# common problems
## black screen on login
If you get a black screen on your new installation, reboot to grub and press e on your ubuntu entry to edit its boot parameters,
add nomoset and then ubuntu should boot into a GUI. <br />
Example parameter: <code>
linux /boot/vmlinuz-5.3.0-26-generic root=UUID=a39c6c74-eb7e-4e17-b78a-d23c952061cd ro  quiet splash nomoset
</code>

# further notes
## getting iso's of other linux/bsd distributions
If the iso is obtained from an external mirror (not directly in the distributions site), make sure the hash doesnt come from the same mirror. Since if the iso was replaced its hash would be too.
Though if you have no choice you can check the hashes authenticy with gpg.

Some websites will offer a torrent download, depending on the circumstances this could be faster than using direct http.
