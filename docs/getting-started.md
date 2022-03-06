---
id: getting-started
title: Getting started
sidebar_label: Getting started
slug: /getting-started
---

Snowtrack offers two ways of tracking your work:

1. Create a new project within Snowtrack.
2. Open an existing folder in Snowtrack.

### Your new project

To create a completely new project from scratch, click on the command **Create...** in the left sidebar. The dialog shown below will appear. Set the project name and the destination of your project directory.

![Create Project Dialog](/img/create-project.png)

To create a new project from scratch, you can alternatively right-click on empty space in the item view and select `Create`➡️ `New Project`.

![Right ](/img/new-project.png)


### Your existing folder

To track an existing project that is not yet under version control of Snowtrack, visit the directory it is located in. Right-click on your project directory and click on `Create Project From...`

![Existing Project Dialog](/img/create-project-from.png)

Creating a project from an existing folder will not modify any files that are inside the project directory.


### Location of file versions

In order to protect your files, Snowtrack copies all file versions of your project versions to another location. You can choose between two locations to which they can be copied.

**A) Inside the Project Directory**:

By default, Snowtrack stores all files inside the project directory. In this case Snowtrack creates a hidden folder named *.snow* inside your project directory.

For convinience, Snowtrack is able to detect folders of *Dropbox*, *Adobe Cloud*, and *Google Drive* and changes the default location for the file versions to *"Inside the Project Directory*".

![Existing Project Dialog](/img/folder-detected.png)

**B) Inside the Version Database**:

An alternative location for your file versions is the version database. The version database is located outside of your project directory. The path can be set in the preferences. This option is useful if you wish to keep your project and file versions completely seperate. If this option was chosen, you can also delete your project directory and restore your entire project based on the file versions that were tracked before. For more information, read [Manage Projects / Restore Project](manage-projects.md#restore-project).
