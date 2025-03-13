---
id: ignore
title: Ignore Items
sidebar_label: Ignore Items
---

:::caution

The content of this documentation still contains references to P4 One [v0.9](0.9/). The documentation update for `v2025.1` is still in progress.

:::

Your workspace directory can contain a variety of different files. Depending on your personal preference you might want to exclude some of them. After an item is ignored, it is ignored by any operation by P4 One. This means, restoring a version or discarding changes leaves them untouched. P4 One ignores a variety of unwanted files by default.

<div className="block">

![left](/img/ignore-1.png) To ignore an item switch first to the **Changed files** entry in the left column.

</div>

<div className="block">

![left](/img/ignore-2.png) Select the item you want to ignore and do a right-click it. Select `Ignore ...`. The item is now ignored from any operation by P4 One.

</div>

## How to undo an ignore

P4 One has no built-in command to include an item again once it is ignored. Instead edit the **hidden** `.p4oneconfig` file in your project directory.

`.p4oneconfig` files contain patterns that are matched against file names in your project to determine whether or not they should be ignored or not.
