---
id: terminology
title: Terminology
sidebar_label: Terminology
---

Throughout this documentation we mention some keywords and phrases. To ensure you fully understand the meaning of these commonly occurring terms, we will take a deeper look at them here.

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

For more information see [Project Info](project-info.md).


### Version Control, or Version Tracking

Version control originates from software engineering and is the process of managing and organizing changes in software development. Existing version control solutions are difficult to understand and require a deep technical understanding. With Snowtrack we deliver version control to designers and artists in an intuitive and easy-to-use way.


### Version or Snapshot

A version (or snapshot or project iteration) represents a directory at the time the version got created. In each project you can revert to any previous version and your project directory will change its content accordingly.


### Track or Branch

A fundamental piece of functionality for Snowtrack are **tracks** (sometimes referred to as **branches**). 

For more information see [Tracks](tracks.md).


### Version Database

Snowtrack stores file versions in a so-called **version database**. A version database is basically a directory and contains a lot of system information that Snowtrack manages in order to operate.

When you create a project, you can choose where the version database is stored.

- Either stored inside the _**global**_ **version database**, or ...

    In that case, the entire project (including all file versions) can be restored, even if you delete your project directory.

- ... or placed directly inside your project directory (_**local**_ **version database**).

    In that case, Snowtrack creates a hidden directory called `.snow` in your project directory. This is the **local** version database. For more information on this topic, check out the page [Get started](get-started.md).
