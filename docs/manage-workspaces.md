---
id: manage-workspaces
title: Manage Workspaces
sidebar_label: Manage Workspaces
---

:::caution

The content of this documentation is still in progress.

:::

![full](/img/manage-projects.png)

The sidebar in P4 One contains an option called **Manage...** that allows you to organize your workspaces.

### World Icon

<div className="block">

![left](/img/manage-projects-1.png) As the tooltip in the left image already states, a **world** icon indicates that all versions of this project are stored in the version database. In that case, the entire project (including all file versions) can be restored, even if you delete your project directory.

If you want to delete the project including all versions from the version database, check out the next paragraph [Delete project](manage-projects.md#delete-workspace) below.
</div>

### Delete Workspace

You can delete a workspace including the version database by clicking the menu expansion icon <span className="more" /> on the right side of the table. Both, the project and the version database are moved to the trash/recycle bin.

### Restore Workspace

All projects whose versions are stored in the [version database](terminology.md#version-database) can be restored by P4 One. Within `Manage Workspaces` click **Restore project**. P4 One will restore the project at its original location.

![full](/img/restore-project.png)

