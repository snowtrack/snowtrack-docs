---
id: behind-the-scenes
title: Behind the Scenes
sidebar_label: Behind the Scenes
---

This chapter requires some technical knowledge, so if you want to explore some geek talk, we invite you to join us behind the scenes of Snowtrack.

To inspect, or to support P4 One repositories, you can simply download the command-line version and create, inspect and modify projects created with P4 One. P4 One CLI is a lightweight command-line application and library with a focus on binary file versioning.

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

Example benchmarks coming soon...

## Supported Platforms

Currently, Windows and macOS.

