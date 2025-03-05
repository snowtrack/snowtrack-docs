---
id: getting-started
title: Getting started
sidebar_label: Getting started
slug: /getting-started
---

P4 One offers two ways of tracking your work:

1. Create a new workspace within P4 One.
2. Open an existing folder in P4 One.

### Your new workspace

To create a completely new workspace from scratch, click on the command **Create...** in the left sidebar. The dialog shown below will appear. Set the workspace name and the destination of your workspace directory.

![Create Workspace Dialog](/img/create-workspace.png)

To create a new workspace from scratch, you can alternatively right-click on empty space in the item view and select `Create`➡️ `New Workspace`.


### Your existing folder

To track an existing project that is not yet under version control of P4 One, visit the directory it is located in. Right-click on your project directory and click on `Create Workspace From...`

Creating a workspace from an existing folder will not modify any files that are inside the directory.


### Location of file versions

In order to protect your files, P4 One copies all file versions of your project versions to another location. You can choose between two locations to which they can be copied.

**A) Inside the Workspace Directory**:

By default, P4 One stores all files inside the workspace directory. In this case P4 One creates a hidden folder named *.p4one* inside your project directory.

**B) Inside the Local Version Database**:

An alternative location for your file versions is the local version database. The local version database is located outside of your project directory. The path can be set in the preferences. This option is useful if you wish to keep your project and file versions completely seperate. If this option was chosen, you can also delete your project directory and restore your entire project based on the file versions that were tracked before. For more information, read [Manage Workspaces / Restore Project](manage-workspaces.md#restore-project).

### Sharing work with a remote server

To share your work with others, click on `Login` to connect to a P4 Server.    
For more information, read [Remote Operations](remote.md).


