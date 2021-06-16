---
id: tracks
title: Tracks
sidebar_label: Tracks
---

<div className="block">

![left](/img/tracks.png) A fundamental functionality of Snowtrack are **Tracks**. In version control terms, also known as *Branches*.

Tracks are a powerful tool to explore design ideas without cluttering your project directory. Imagine you're creating a logo for a customer and they want to see the logo from last week in a different color. Simply restore the corresponding version and change the logo in your project directory. Snowtrack will then automatically create a new track that branches off the current version.

</div>

## How to create a Track

In regular version control software you can create [branches](terminology.md#track-or-branch)/tracks manually.

In Snowtrack Tracks are created automatically when needed. Check out the following 3-step scenario how this automation works.

<div className="block">

![left](/img/track-create-1.png) As you can see in the image on the left, the project directory is currently in sync with **`Final camera + render`** and no unsaved items are present.

</div>

<div className="block">

![left](/img/track-create-2.png) We restore the older version called **`added UV textures`**.

</div>

<div className="block">

![left](/img/track-create-3.png) Any changes, e.g. a new or modified file, in the project directory will be detected by Snowtrack and will lead to a new Track.

</div>
