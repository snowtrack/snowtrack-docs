---
id: terminology
title: Terminology
sidebar_label: Terminology
---

This chapter contains definitions of common terms, words, and technical jargon.

### Project Directory, Working Directory or Workspace

Snowtrack thinks in directories. Each project has a main directory, also known as the **working directory**, or simply, **workspace**. This can be your 3D scene with hundreds of textures and scene files, or a 2D project with a single file. A typical project structure could look like this:

```
 / my-3d-project
 |
 +- /assets
 |  |
 |  + floor.psd
 |  + background.hdr
 |  + background-noise.wav
 |  ....
 |
 +- scene.c4d
```

For more information see [Project Info](project.md).


### Version Control, or Version Tracking

Version control originates from software engineering and is the process of managing and organizing changes in software development. Existing version control solutions are difficult to understand and require a deep technical knowledge. With Snowtrack, graphic designers and artists finally have an easy-to-use and intuitive alternative.


### Version or Snapshot

A version (or snapshot or project iteration) represents a directory at the time the version was created. In each project you can revert to any past version and your project directory will change its content accordingly.


### Track or Branch

A fundamental element of Snowtrack are **tracks** (sometimes referred to as **branches**). For more information see [Tracks](tracks.md).


### Version Database

When you create a project, you can choose where your file backups will be stored. This can be in one of the following two locations:

- Inside the **version database**

    In that case, the entire project (including all file versions) can be restored, even if you delete your project directory.

- Inside the **project directory**:

    In that case, Snowtrack creates a hidden directory called `.snow` in your project directory. This is the **local** version database. For more information on this topic, check out the page [Get started](get-started.md).
