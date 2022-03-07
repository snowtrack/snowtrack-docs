---
id: behind-the-scenes
title: Behind the Scenes
sidebar_label: Behind the Scenes
---

This chapter requires some technical knowledge, so if you want to explore some geek talk, we invite you to join us behind the scenes of Snowtrack.

Snowtrack is based on [SnowFS](https://github.com/snowtrack/snowfs), our open-source community project, a fast, scalable version control file storage for graphic files. It is free for everyone to use.

![full](/img/snowfs.png)

To inspect, or to support SnowFS repositories, you can simply download the command-line version and create, inspect and modify projects created with Snowtrack. SnowFS is a lightweight command-line application and library with a focus on binary file versioning.

![full](/img/terminal.gif)

## Feature highlights

- Supports Branches

- Asynchronous File Hashing

- Project open to file-content awareness (e.g: `*.psd`, `*.blend`, `*.c4d`, `..`)

- Super-fast-detection of modifications in large binaries

- Support for instant snapshots\*\*

- Support for instant rollback\*\*

- Support for files bigger >4TB

- Block-cloning and Copy-on-Write support for [APFS](https://developer.apple.com/documentation/foundation/file_system/about_apple_file_system), [ReFS](https://docs.microsoft.com/en-us/windows-server/storage/refs/refs-overview) and [Btrfs](https://en.wikipedia.org/wiki/Btrfs)

- Support for removing single versions and/or binaries

- Primarily I/O bound through [libuv](https://github.com/libuv/libuv)

- Feature XYZ made by you!

\*\* If the underlying filesystem supports it (e.g. APFS, ReFS and Btrfs)

## Running benchmarks

Example run on a Macbook Pro (2020) with an APFS formatted SSD to check-in, delete and restore a 4GB Photoshop File.

```
...
git lfs track *.psd
git add texture.psd: 20164ms
snow add texture.psd: 4596ms
git rm texture.psd: 575ms
snow rm texture.psd: 111ms
git checkout HEAD~1: 9739ms
snow checkout HEAD~1: 77ms <-- Yeah!
```

## Licensing

`SnowFS` is licensed under the **MIT** license, please review the [LICENSE file](https://github.com/Snowtrack/SnowFS/blob/main/LICENSE).
Excluded from the license are images, artworks, and logos. Please file a request by mail, if you have any questions.

## Supported Platforms

Currently, Windows, macOS, and Linux are supported. `SnowFS` works on plain filesystems like FAT, NTFS, HFS+ and has extended support for APFS, ReFS and Btrfs.


## How can I contribute?

See the [guidelines for contributing][].

[node.js]: http://nodejs.org/
[terminal_preview]: https://github.com/snowtrack/snowfs/raw/main/img/terminal.gif
[Snowtrack]: https://www.snowtrack.io/
[guidelines for contributing]: https://github.com/snowtrack/snowfs/blob/main/CONTRIBUTING.md
[snowfs_banner]: https://github.com/snowtrack/snowfs/raw/main/img/banner.png