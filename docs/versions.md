---
id: versions
title: Project Versions
sidebar_label: Project Versions
---

:::caution

The content of this documentation still contains references to Snowtrack [v0.9](0.9/). The documentation update for `v0.10` is still in progress.

:::

<div className="block">

## Timeline

![left](/img/versions.png)

In Snowtrack, the left column represents the project timeline and shows all versions you have created throughout the lifetime of the project in descending order.


#### Current state

<span className="check-mark" /> The green check-mark indicates that this version is currently in your working directory.

<br/><br/>

#### Restore Files

<span className="revert" /> You can change all files and directories to the ones from that version by clicking the restore button. If there are unchanged files present in your working directory you will be asked to save or discard these changes before you proceed.

</div>

<div className="block">

### Changed files

![left](/img/changed-files.png)

If a file modification is detected in your working directory, Snowtrack will indicate this by creating an entry called **Changed files**. Inspect the changes by clicking on this entry.

Use the **Create Version** button to create a new version.

Snowtrack will copy these changes to the version database to protect them from further modifications. This process may take a few seconds, up to a few minutes, depending on the size and complexity of the changes involved.

If a 3rd-party application is in the the middle of adding changes to your working directory while you press the **Create Version** button, Snowtrack will detect this, and inform you to repeat the saving process.

After you press the **Create Version** button, it is highly recommended to wait until Snowtrack has completed backing up your files.

</div>

<div className="block">

### How to delete a version

![left](/img/delete-version.png)

To delete a version from your project timeline, perform a *Right-click* on the version and select <p><span className="delete" /> Delete Version....</p>

Please note, **this operation cannot be undone!**

<div className="info" ></div> A deleted version might contain files that are not referenced by any other version. A future update of Snowtrack will remove these dangling files in the version database.

</div>
