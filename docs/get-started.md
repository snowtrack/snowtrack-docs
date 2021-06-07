---
id: get-started
title: Getting started
sidebar_label: Getting started
slug: /get-started
---

Snowtrack offers two ways of tracking your work:

1. Create a new project within Snowtrack.
2. Open an existing folder in Snowtrack.

Depending on whether your project is already a Snowtrack project, you will see one of the two different dialogs below.

### Your new project

To create a new project click on the option **Create...** on the top-left side of your menu. The dialog shown below will appear. Set the project name and the destination of your project directory.

![Create Project Dialog](/img/create-project.png)


### Your existing folder

To track an existing project folder either click on the **Open...** option on the top-left side of your menu, or drag and drop the directory into the Snowtrack window. 

If the folder is already a Snowtrack project, it will open it. If it is a directory Snowtrack has not encountered yet, the dialog window below will pop up. After confirming, the project will become a Snowtrack project.

![Existing Project Dialog](/img/create-project-2.png)

Should the project folder contain files, they will not be modified. Creating a project from an existing folder has no effect on the contents of that folder.


### Advanced

#### ☑️ Store version database inside the project directory

> ⚠️ If enabled, anybody you send this project to can see the version history and inspect all files you ever created for this project.

If the option above is unchecked, Snowtrack places a hidden file inside your project directory called `.snow`. This file can be opened using with a regular text-editor. It contains the path and location of your version database. When sharing your project directory with someone else only the current files are available.

If the option above is checked, Snowtrack places a directory inside your project directory called `.snow`. This is where Snowtrack stores your older file versions and restores them from. When sharing your project directory with someone else (without excluding the `.snow` directory) all versions of your files are available.

Be aware of this feature to ensure you only share the files you want.

