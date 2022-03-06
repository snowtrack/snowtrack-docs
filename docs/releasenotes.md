---
id: releasenotes
title: Release Notes
sidebar_label: Release Notes
---

# Snowtrack Beta - Codename Cap Gaspé

Welcome to the new beta of Snowtrack - Codename *Cap Gaspé*. There are plenty of new features, UI improvements and bugfixes that are ready to be discovered. Here is a brief overview over major new features:

- :card_index: **[File browser](#file-browser)** - Explore your documents, assets, props and scene files.
- :mag_right: **[3D viewer](#3d-viewer)** - Inspect 3D files with an integrated 3D viewer.
- :compass: **[Address Bar](#address-bar)** - As the proverb goes, *All paths lead to your directory*.
- :yin_yang: **[Blender Preview](#blender-preview)** - Inspect Blender files.
- :test_tube: **[Substance Archives](#substance-archives)** - Inspect Substance Archives.
- :page_facing_up: **[Text Editor](#text-editor)** - Open and diff changes of scripts and config files directly in Snowtrack.

Keep in mind, this project is in beta state and is being actively developed. Do not use this software without backing up your data.

## Insider Builds

Want to get your hands on new features as soon as possible? Join us on [Discord](https://discord.gg/cbrTXuYKR7) and explore the latest Insider builds :gem:. Your feedback helps us build the software you need and has a huge impact on the feature set and future of Snowtrack.

> Not on Discord? [Send us your feedback through our web-form.](https://www.snowtrack.io/feedback/)

### File browser

Browse your projects, local drives and cloud services like *Adobe Cloud*, *Dropbox* or *Google Drive* with the new file browser view. Snowtrack is equipped with many navigation shortcuts known from the *Windows File Explorer* and *MacOS Finder*.

<div>
  <video width="100%" height="100%" playsinline autoplay muted controls>
    <source src="/img/releasenotes/browser.mp4" type="video/mp4" />
  </video>
</div>

### 3D viewer

You can inspect and explore your 3D files. Snowtrack can open `.fbx`, `.obj` and `.gltf` files and preview Blender files and Substance Archives

<div>
  <video width="100%" height="100%" playsinline autoplay muted loop>
    <source src="/img/releasenotes/fighter.mp4" type="video/mp4" />
  </video>
</div>

### Address Bar

The new address bar at the top helps you to navigate. Use the path separators to switch between directories faster.

![images](/img/releasenotes/addressbar.jpg)

### Blender Preview

Inspect Blender (`.blend`) files with the integrated 3D viewer.

<div>
  <video width="100%" height="100%" playsinline autoplay muted loop>
    <source src="/img/releasenotes/blend.mp4" type="video/mp4" />
  </video>
</div>

### Substance Archives

Inspect Substance Archives (`.sbsar`) with the integrated 3D viewer.

<div>
  <video width="100%" height="100%" playsinline autoplay muted loop>
    <source src="/img/releasenotes/sbsar.mp4" type="video/mp4" />
  </video>
</div>


### Text Editor

Open and diff changes of scripts and config files directly in Snowtrack.


<div>
  <video width="100%" height="100%" playsinline autoplay muted loop>
    <source src="/img/releasenotes/texteditor.mp4" type="video/mp4" />
  </video>
</div>


## Version 0.10.18

- :bug: *Export Project* opens again
- :bug: Fix issue with clipboard
- :bug: Fixed drag&drop issue where items are always copied/moved to the root level of a project
- :bug: Fixed issue where the view jumps back to the root level of a project while browsing.

## Version 0.10.15

- :star: Add *New Project* to context menu.
- :star: Copy absolute path of item via `CMD+Alt+C` on macOS.
- :star: Make *Reveal in Snowtrack* command visibile even when item is dropped on a file or folder.
- :star: Faster thumbnail generation
- :bug: Fixed issue that prevents folder access on network drives.
- :bug: Items in checked out version can now be opened via double-click.
- :bug: Breadcrumbs in address bar open incorrect non-existing folder for cloud services.
- :bug: Scroll and follow to selected items on view change.
- :bug: Google Drive is missing in sidebar on MacOS.
- :bug: Adding or renaming a directory spills sub-items into current view.
- :bug: Context menus might not show up when a second window is opened.
- :bug: Empty file rename looses focus.
- :bug: Rename "Created files" to "Created items" for consistency.
- :bug: Wrap item names in notifications in quotes.
- :bug: Use correct root path for Dropbox Business.
- :bug: Reduce meta-data overhead for new projects.
- :bug: Remove flicker when user clicks on commit that is already selected.

## Version 0.10.11

- :star: Add emojis to your projects
- :star: Remove unwanted cloud services
- :star: By default, versions are now stored inside the project directory
- :racehorse: Reduce CPU load caused by ffmpeg
- :bug: Reintroduce "Ignore file" commands
- :bug: Command '*Show Directory Hierarchy*' is now remembered per project
- :bug: Files and directories might not be sorted correctly
- :bug: UI occasionally stuck and ignores mouse inputs
- :bug: On some machines, Snowtrack doesn't recognize changes in projects
- :bug: Unable to create new folder*
- :bug: Renaming items doesn't work (*related to 'new folder' issue*)
- :bug: Performance speedup for Windows thumbnails
- :bug: No smart screen warning anymore on Windows
- :pencil: Updated credits

## Version 0.10.9

### Important fixes

- :racehorse: Reduce CPU load caused by ffmpeg
- :racehorse: Speedup scrolling performance on macOS
- :bug: Helper processes are terminated when directory is left
- :bug: Removed image artifacts when project is opened
- :mailbox_with_no_mail: Grid view looses focus of selected item
- :package: Dropbox Business missing in sidebar
- :floppy_disk: Network drives are not listed on Windows
- :mag_right: Unable to preview items in projects
- :bug: Fixed various typos

### Thank you

A big big ***Thank You*** 🎉 goes to everyone who helped with feedback and bug-reports to bring Snowtrack alive:

- :beer: Daniel Lanner [(LinkedIn)](https://www.linkedin.com/in/daniellanner/)
- :dove: Vartika Manasvi [(Twitter)](https://twitter.com/vmanasvi)
- :ninja: David Drayton [(Portfolio)](https://www.strangerobjects.com)
- :space_invader: Cedric Profijt - [(ArtStation)](https://www.artstation.com/cedricprofijt), [(IMDb)](https://www.imdb.com/name/nm5927282/)
- :metal: Flo Tasser [(ArtStation)](https://www.artstation.com/flotasser/)
- :muscle: Alex Ray [(Portfolio)](https://alex-ray.ru/)
- :100: Derek Rein [(Portfolio)](https://www.derekvfx.ca/) [(IMDb)](https://www.imdb.com/name/nm4415449/)
- :dog: Gilles Augustijnen [(Portfolio)](https://www.kapital.tv)
- :monocle_face: Prasoon Dhapola [(Portfolio)](https://www.artstation.com/prasoon_dhapola)
- :video_game: Glen Johnson [(Behance)](https://www.behance.net/glenjohnson1353)
- :mage: Jonathan Dupré [(Portfolio)](https://jonathandupre.com/)
- :clown_face: Declan McPartlin [(LinkedIn)](https://www.linkedin.com/in/declan-mcpartlin-84b45769)
- :bomb: Yegor [(ArtStation)](https://www.artstation.com/yegor_r)
- :tiger: Andrei Gîrbu [(LinkedIn)](https://www.linkedin.com/in/andrei-g%C3%AErbu-416435158/)
- :man_dancing: Bernd Winkelmann
- :monocle_face: Jan Frischmuth
- :purple_square: The DMZ [(Webpage)](https://dmz.ryerson.ca/)
- :green_circle: The OSS Community
