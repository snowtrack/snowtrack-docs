---
id: versions
title: Workspace Versions
sidebar_label: Workspace Versions
---

<div className="block">

## Timeline
![left](/img/versions.png)

In P4 One, the left column represents the project timeline and shows all versions you have created throughout the lifetime of the project in descending order.


#### Current state

<span className="check-mark" /> The green check-mark indicates that this version is currently in your working directory.

<br/><br/>

#### Restore Files

<span className="revert" /> You can restore all files and directories by clicking the restore button. If there are unchanged files present in your working directory you will be asked to save or discard these changes before you proceed.

</div>

<div className="block">

### Changed files

![left](/img/changed-files.png)

If a file modification is detected in your working directory, P4 One will indicate this by creating an entry called **Changed files**. Inspect the changes by clicking on this entry.

Use the **Create Version** button denoted by a floppy disk icon to create a new version.

P4 One will copy these changes to the version database to protect them from further modifications. This process may take a few seconds, up to a few minutes, depending on the size and complexity of the changes involved.

If a 3rd-party application is in the the middle of adding changes to your working directory while you press the **Create Version** button, P4 One will detect this, and inform you to repeat the saving process.

After you press the **Create Version** button, it is highly recommended to wait until P4 One has completed backing up your files.

</div>
