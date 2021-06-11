---
id: faqs
title: FAQs
---


### Who is Snowtrack for?

Snowtrack is for 2D/3D artists and graphic designers who want to keep track of their project versions. As a project grows, directories can become messy and cluttered. Snowtrack helps with file management and makes version control easy to use and accessible.

### What is a beta version?

A software that is in **beta** is in a stage where some functionality is not fully implemented yet. The software is proven to work under normal conditions but requires additional testing to improve its robustness.

### Does Snowtrack require an internet connection?

No, Snowtrack works perfectly fine when offline since all of the files and versions of your project are stored locally on your computer. With online access links and resources are accessible, including a check for updates, but these are entirely optional.

### What is Snowtrack based on?

Snowtrack is based on SnowFS, our open-source community project. For more information check out [How does Snowtrack work](how-does-snowtrack-work.md).

### Where does Snowtrack keep all my file versions?

Snowtrack lets you decide project by project whether it copies files and versions to its internal version database, or stores them in a hidden directory inside the project directory. For more information, check out the information about [Version Database](terminology.md#version-database).

### Which files does Snowtrack support?

Snowtrack supports all file types and has extended support for a variety of 2D and 3D file types. For more information check out the [File Support](file-support.md) section.

### How do I uninstall Snowtrack?

#### MacOS

1. After you have closed Snowtrack, you can drag and drop the application from its location into the Trash in your dock.

![Move Snowtrack To Trash](/img/snowtrack-uninstall-macos.png)


2. There are two additional locations we need to take care of.

- **Preferences**

    `~/Library/Application Support/Snowtrack`

- **Version Database** (default):

    `~/Library/Application Support/Snowtrack/VersionDB` or where you stored it

    ⚠️ Remember, the version database contains all of the files and versions of your projects that are managed by Snowtrack. So make sure this is the directory you want to delete.

#### Windows

1. Snowtrack can be uninstalled through the uninstaller. The most convenient way to uninstall Snowtrack on Windows is through the start menu by typing in *"Snowtrack"*. You can then click on **Uninstall**.

![Uninstall Snowtrack](/img/snowtrack-uninstall-windows.png)

2. There are two additional locations we need to take care of.

- **Preferences**

    Snowtrack saves its preferences inside this location:

    `C:\Users\<YOUR_USERNAME>\AppData\Roaming\Snowtrack`

- **Version Database** (by default inside the preference directory):

    `C:\Users\<YOUR_USERNAME>\AppData\Roaming\Snowtrack\VersionDB` or the location you choose during the initial startup dialog.

    ⚠️ Remember, the version database contains all files and versions of all your projects that are managed by Snowtrack. So make sure this is the directory you want to delete.

