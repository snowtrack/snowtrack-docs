---
id: versions
title: Project Versions
sidebar_label: Project Versions
---


<div className="block">

## Timeline

![left](/img/versions.png)

In Snowtrack, the left column represents the project timeline and shows all versions you have created throughout the lifetime of the project in descending order.


#### Current state

<span className="check-mark" /> The green check-mark indicates that this version is currently in your working directory.

<br/><br/>

#### Restore Files

<span className="revert" /> You can change all files and directories to the ones from that version by clicking the restore button. If there are unsaved changes present in your working directory you will be asked to save or discard these changes before you proceed.

</div>

<div className="block">

### Unsaved items

![left](/img/unsaved-items.png)

If a file modification is detected in your working directory, Snowtrack will indicate this by creating an entry called **Unsaved items**. Inspect the changes by clicking on this entry.

Use the **Save** button to save your changes and create a new version.

Snowtrack will copy these changes to the version database of your project to be inspected or restored later. This process may take a few seconds up to a few minutes, depending on the size and complexity of the changes involved.

If a 3rd-party application is in the the middle of adding changes to your working directory while you press the **Save** button, Snowtrack will detect this, and inform you to repeat the saving process.

After you press the **Save** button, it is highly recommended to wait until Snowtrack has completed saving your files. Interfering with the saving process while Snowtrack is still copying files might result in a cancelled save operation and corrupt the integrity of the version database.

#### System-wide shortcuts

<div className="info" ></div>

Snowtrack registers a system-wide shortcut on startup. By pressing `CMD+Shift+1` on macOS, and `Alt+Shift+1` on Windows you can create a new version while Snowtrack is running in the background. The project for which you want to create the version must be open in Snowtrack. Every new version is confirmed by an OS-notification:

![left](/img/notification-macos.jpg)
![left](/img/notification-win.jpg)

</div>

<div className="block">

### How to delete a version

![left](/img/delete-version.png)

To delete a version from your project timeline, perform a *Right-click* on the version and select <p><span className="delete" /> Delete Version....</p>

Please note, **this operation cannot be undone!**

<div className="info" ></div> A deleted version might contain files that are not referenced by any other version. A future update of Snowtrack will remove these dangling files in the version database.

</div>
