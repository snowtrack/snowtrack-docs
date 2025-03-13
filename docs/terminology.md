---
id: terminology
title: Terminology
sidebar_label: Terminology
---

This chapter contains definitions of common terms, words, and technical jargon.

### Project Directory, Working Directory or Workspace

P4 One thinks in directories. Each project has a main directory, also known as the **working directory**, or simply, **workspace**. This can be your 3D scene with hundreds of textures and scene files, or a 2D project with a single file. A typical project structure could look like this:

```text
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

Version control originates from software engineering and is the process of managing and organizing changes in software development. Existing version control solutions are difficult to understand and require a deep technical knowledge. With P4 One, graphic designers and artists finally have an easy-to-use and intuitive alternative.

### Version or Snapshot

A version (or snapshot or project iteration) represents a directory at the time the version was created. In each workspace you can revert to any past version and your workspace directory will change its content accordingly.

### Track or Branch

A fundamental element of P4 One are **tracks** (sometimes referred to as **branches**). For more information see [Tracks](tracks.md).

### Local Version Database

When you create a project, you can choose where your file backups will be stored. This can be in one of the following two locations:

- Inside the **local version database**

  In that case, the entire workspace (including all file versions) can be restored, even if you delete your workspace directory.

- Inside the **workspace directory**:

  In that case, P4 One creates a hidden directory called `.p4one` in your workspace directory. This is the **local** version database. For more information on this topic, check out the page [Get started](getting-started.md).

### Perforce Client or Client

The workspace you are working in is sufficient as you iterate locally on your projects.  When you are ready to
 share your work with others, a Perforce client is needed in order to submit changes to a remote server.
A Perforce client or ***client*** allows directories on your machine to be managed by a P4 Server.

### Beta Software

Software that is actively being worked on.  Future versions are not guaranteed to be backwards compatible.
Do not use this software without backing up your data.

