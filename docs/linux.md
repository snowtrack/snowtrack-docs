---
id: linux
title: Linux
sidebar_label: Linux
---

:::caution

The content of this documentation still contains references to Snowtrack [v0.9](0.9/). The documentation update for `v0.10` is still in progress.

:::

# Linux

Snowtrack is supported on CentOS, Fedora, Ubuntu and Debian.

![Linux Distri](/img/linux-distri.jpg)

## Update

Snowtrack comes with a built-in updater on Windows, macOS and Linux (only AppImage).

![Auto Updater](/img/auto-updater.png)

<div className="info" ></div>

If Snowtrack is installed through **.deb**, **.rpm** or **.tar.gz** you need to manually install new updates. You will be informed inside the app about newly available updates. But instead of installing the update through Snowtrack, the *Download* button in the update notification will open your default web browser. You will be then redirected to the download page from where you can manually download the new update.

## AppImage

### What is AppImage?

AppImages can be downloaded and run without installation or the need for root rights. Additionally, the key idea of the AppImage format is one app = one file. In other words, each AppImage has no dependencies other than what is included in the targeted base operating system(s).

### How to run AppImage?

All you have to do is download the AppImage, make it executable and run it. Check out the instructions below:

![Run AppImage](/img/appimage.gif)

#### Manual instructions

- Open your file manager and browse to the location of the AppImage
- Right-click on the AppImage and click the ‘Properties’ entry
- Switch to the Permissions tab and
- Click the ‘Allow executing file as program’ checkbox if you are using a Nautilus-based file manager (Files, Nemo, Caja), or click the ‘Is executable’ checkbox if you are using Dolphin.
- Close the dialog
- Double-click on the AppImage file to run