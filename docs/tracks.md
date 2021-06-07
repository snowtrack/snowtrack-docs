---
id: tracks
title: Tracks
sidebar_label: Tracks
---

<div className="block">

![left](/img/tracks.png) A fundamental functionality of Snowtrack is **Tracks**. In version control terms, also known as *Branches*.

Tracks are a way to experiment with your design ideas without modifying the original files.

You're creating a logo and your customer wants to see it in other colors? Apply the changes to your files and continue with the version your customer prefers.

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
