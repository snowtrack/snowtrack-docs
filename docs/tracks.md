---
id: tracks
title: Tracks
sidebar_label: Tracks
---

<div className="block">

![left](/img/tracks.png) A fundamental functionality of P4 One are **Tracks**. In version control terms, also known as *Branches*.

Tracks are a powerful tool to explore design ideas without cluttering your workspace directory. Imagine you're creating a logo for a customer and they want to see the logo from last week in a different color. Simply restore the corresponding version and change the logo in your workspace directory. P4 One will then automatically create a new track that branches off the current version.

</div>

## How to create a Track

In regular version control software you can create [branches](terminology.md#track-or-branch)/tracks manually.

In P4 One Tracks are created automatically when needed. Check out the following 3-step scenario how this automation works.

<div className="block">

![left](/img/track-create-1.png) As you can see in the image on the left, the workspace directory is currently in sync with **`Final camera + render`** and no unchanged files are present.

</div>

<div className="block">

![left](/img/track-create-2.png) We restore the older version called **`added UV textures`** by clicking on the **Restore Version** button (circular arrow icon).

</div>

<div className="block">

![left](/img/track-create-3.png) Any changes, e.g. a new or modified file, in the workspace directory will be detected by P4 One and will lead to a new Track.

</div>
