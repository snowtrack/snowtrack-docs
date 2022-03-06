---
id: get-started
title: Getting started
sidebar_label: Getting started
slug: /get-started
---


:::caution

The content of this documentation still contains references to Snowtrack [v0.9](0.9/). The documentation update for `v0.10` is still in progress.

:::


Snowtrack offers two ways of tracking your work:

1. Create a new project within Snowtrack.
2. Open an existing folder in Snowtrack.

Depending on whether your project is already a Snowtrack project, you will see one of the two different dialogs below.

### Your new project

To create a new project click on the option **Create...** on the top-left side of your menu. The dialog shown below will appear. Set the project name and the destination of your project directory.

![Create Project Dialog](/img/create-project.png)


### Your existing folder

To track an existing project folder click on the **Open...** command on the top-left side of your menu, or drag and drop the directory into the Snowtrack window. 

If the folder is already a Snowtrack project, it will open it. If it is a directory Snowtrack has not encountered yet, the dialog window below will pop up. After confirming, the project will become a Snowtrack project.

![Existing Project Dialog](/img/create-project.png)

Should the project folder contain files, they will not be modified. Creating a project from an existing folder has no effect on the contents of that folder.


### Location of file versions

In order to protect your files, Snowtrack copies all file versions of your versions to another location. You can choose between two locations to which they can be copied.

**A) Inside the Version Database**:

By default, Snowtrack stores all files inside a version database that got created when you installed Snowtrack the first time. You can find the paths [here](backups.md).

**B) Inside the Project Directory**:

Alternatively, you can keep all file iterations inside your project directory. In this case Snowtrack creates a hidden folder named *.snow* inside your project directory.  This is useful if your project is synced to a cloud service like Google Drive or Dropbox, or if your version database is not already located on a NAS server.

For convinience, Snowtrack is able to detect folders of *Dropbox*, *Adobe Cloud*, and *Google Drive* and chhanges the default location for the file versions to *"Inside the Project Directory*".

![Existing Project Dialog](/img/folder-detected.png)
