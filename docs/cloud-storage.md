---
id: cloud-storage
title: Cloud Storage
sidebar_label: Cloud Storage
---

### Dropbox and Google Drive

We are currently evaluating how to natively support Google Drive and Dropbox in Snowtrack. If you already want to save your projects inside a directory that is synced with a cloud storage service, please be aware of the technical implications this might have as outlined below.

#### Version database inside the project directory

Depending on the complexity of your project, Snowtrack can create many file copies to ensure its data integrity. Only these files as a whole represent a working and complete backup of your versions and files. But Google Drive and Dropbox have their own heuristics regarding how and when they upload files. This means there might be a situation where the version database [`.snow`](terminology.md#version-database) is only partially uploaded.

Although the missing files will be eventually be uploaded, another computer you use may download the project directory in the meantime, leaving you with a temporarily incomplete database which prevents Snowtrack from operating.

We are currently working on a solution to actively support these cloud storage services. The main takeaway of this technical explanation is to ensure that all of the files in your project directory are uploaded completely before you decide to download them on another computer.


### Apple iCloud Drive

Apple iCloud Drive is currently not supported. Quote from [Apple](https://support.apple.com/en-us/HT201104):

> ## What types of files can I store in iCloud Drive?
> [...]
> You shouldn't store app folders, libraries, or .tmp files in iCloud Drive.

Snowtrack projects are considered an app folder.
