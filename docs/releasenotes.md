---
id: releasenotes
title: Release Notes
sidebar_label: Release Notes
---

# Snowtrack Beta - Codename Cap Gaspé

Welcome to the new beta of Snowtrack - Codename *Cap Gaspé*. There are plenty of new features, UI improvements and bugfixes that are ready to be discovered. Here is a brief overview over major new features:

## Version 0.10.99

- :bug: Fix issue where right click in list view doesn't select item.

## Version 0.10.98

- :bug: Fix issue where ignored items in sub-directories might not be ignored.

## Version 0.10.97

- :bug: Restoring a version shows empty feedback screen on some computers.
- :bug: Fix more layout issues.
- :bug: Fix issue with shared files on "*Manage...*" page.
- :bug: Fix remaining tooltip issues.


## Version 0.10.96

- :star: **[Share Files via URL.](#share-files-via-url)**
- :star: **[Progress information while creating new version](#progress-information-while-creating-new-version)**
- :star: **[Exclude items temporary from new version.](#exclude-items-temporary-from-new-version)**
- :star: **[Add status information to list view.](#add-status-information-to-list-view)**
- :star: **[Better preview for Blender files.](#better-preview-for-blender-previews)**
- :star: **[Add info message about ignored files.](#add-info-message-about-ignored-files)**
- :star: **[New buttons to jump between modifications of items](#new-buttons-to-jump-between-modifications-of-items)**
- :star: Update position for file icons and extensions in file browser.
- :star: Preserve item selection when switching versions.
- :star: Hiding sensitive data is now persistent.
- :bug: Fix tooltips.
- :bug: Fix opening of *snowproj* archives.
- :bug: Fix layout issues in toolbar.
- :bug: Fix layout issues when viewport is closed.
- :bug: Fix selection for files with special characters.
- :bug: Preserve materials while switchting display modes in viewport.
- :bug: Add viewport thumbnail to `.glb` files.

### Share Files via URL

Snowtrack now offers a built-in file sharing option with 100 GB per day. The option to upload and share a file is available through the context menu of files. Files are available for 48 hours and will be deleted afterwards.

![images-40](/img/releasenotes/fileshare.png)

### Progress information while creating new version

Processed files are now listed in the progress dialog when a new version is created.

![images-30](/img/releasenotes/processing.gif)

### Exclude items temporary from new version

When the *Changed items* entry is selected in the version timeline an item can be excluded for the next version.

![images-30](/img/releasenotes/exclude.jpg)

### Add status information to list view

The list-view shows icons to indicate if an item was added, modified or deleted from a version.

![images-30](/img/releasenotes/listview.jpg)

### Better preview for Blender previews

Blender previews received an update through the enhanced viewport. Deformers, modifiers and armatures can be enabled through the **Enhanced Preview** option in the sidebar of the viewport.

![images](/img/releasenotes/enhanced-viewport.png)

### Add info message about ignored files

Snowtrack displays an updated message dialog when restoring an older version. We added the info that temporary files such as auto-saves or backup files are ignored. Such files are often created by applications like Photoshop, Cinema 4D, Blender, etc. and don't need to be stored in a version.

![images-40](/img/releasenotes/restore-button.png)


### New buttons to jump between modifications of items

The old buttons to switch between the next and previous version got replaced with buttons to switch between modifications.

![images-30,shadow](/img/releasenotes/jump.jpg)

## Version 0.10.84

- :star: Add native thumbnail support for Octane ORBX.
- :star: Add native thumbnail support for Blender 3 files.
- :star: Add icon for MaterialX files.
- :bug: Fix rare issues with thumbnails for Affinity, XD, Figma and Sketch files.
- :bug: Fix issue with thumbnails on Japanese Windows.
- :bug: Changing material color of Sbsar file results in never ending progress spinner.
- :bug: Fix issue with USB that prevents Snowtrack from starting.
- :bug: Fix issue with updater.


## Version 0.10.60

- :star: Add support for project templates.
- :star: Add PDF support.
- :star: Updated UV map in 3D editor.
- :star: Snowtrack window can be resized down to 512px.
- :star: Added preference to change path of version database.
- :star: New user interface for preferences.
- :racehorse: Massive performance boost for loading projects.
- :bug: Removed flicker on window focus.
- :bug: Remove flicker of labels and icons while scrolling.
- :bug: Rename failed when changing letter casing.
- :bug: Application title is always labeled *Dashboard*
- :bug: Version items don't have an icon or suffix label.
- :bug: Drive G: incorrectly displayed as cloud service on Windows.
- :bug: Drive G: missing from volumes on Windows.
- :bug: Fix window size issues on Macbook Pro.
- :bug: Fixed empty labels for USB drives in sidebar.
- :bug: Updated outdated ".snowproj" icon.
- :bug: Remove trailing backslash of network drives in sidebar on Windows.
- :bug: Fixed Incorrect open dialog in *Create Project* dialog.
- :bug: Fixed project name issue in *Create Project* dialog.
- :memo: Added a [telemetry system](https://www.snowtrack.io/docs/telemetry) system that **doesn't** suck.

## Version 0.10.48

- :star: New [Apple M1](#apple-m1-support) support.
- :star: Added option to hide sensitive data in the UI.
- :star: Restored :arrow_up:/:arrow_down: button for project items.
- :racehorse: Massive scrolling and navigation speedup.
- :racehorse: Increased FPS in 3D viewport by up to 50%.
- :racehorse: Improved volume detection for macOS and Windows.
- :bug: Fixed stuck progress loader in 3D view.
- :bug: Fixed mounted ISO incorrectly detected as Google Drive.
- :bug: Fixed empty address bar on macOS.
- :bug: Fixed UI issue with emoji picker.
- :bug: Fixed issue that prevented Snowtrack to start on Windows.
- :bug: Fixed issue where broken Blender addons prevent previewing *.blend* files.
- :bug: Fixed stuck DMG idling in sidebar after being unmounted on macOS.
- :bug: Fixed issue that prevented Snowtrack to shutdown on macOS.
- :bug: Fixed issue with long version labels.
- :bug: Fixed issue with drive labels on Windows.
- :bug: Update **Recent Projects** list in sidebar.

### Apple M1 support

With version `0.10.42` Snowtrack is now available for Macs powered by the Apple M1 chip. If you are running an Intel build of Snowtrack on an Apple with M1 chip, visit [www.snowtrack.io](https://www.snowtrack.io/downloads.html) and download the latest M1 build.

## Version 0.10.18

- :card_index: **[File browser](#file-browser)** - Explore your documents, assets, props and scene files.
- :mag_right: **[3D viewer](#3d-viewer)** - Inspect 3D files with an integrated 3D viewer.
- :compass: **[Address Bar](#address-bar)** - As the proverb goes, *All paths lead to your directory*.
- :yin_yang: **[Blender Preview](#blender-preview)** - Inspect Blender files.
- :test_tube: **[Substance Archives](#substance-archives)** - Inspect Substance Archives.
- :page_facing_up: **[Text Editor](#text-editor)** - Open and diff changes of scripts and config files directly in Snowtrack.

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

- 🕊 Vartika Manasvi [(Twitter)](https://twitter.com/vmanasvi)
- 🥷 David Drayton [(Portfolio)](https://www.strangerobjects.com)
- 👾 Cedric Profijt - [(ArtStation)](https://www.artstation.com/cedricprofijt), [(IMDb)](https://www.imdb.com/name/nm5927282/)
- 🦾 Flo Tasser [(ArtStation)](https://www.artstation.com/flotasser/)
- 👨‍🔧 Carlos Barreto [(Twitter)](https://twitter.com/carlosedubarret)
- 💪🏼 Alex Ray [(Portfolio)](https://alex-ray.ru/)
- 💫 Oliver Villar [(Portfolio)](https://www.blendtuts.es/)
- 💯 Derek Rein [(Portfolio)](https://www.derekvfx.ca/) [(IMDb)](https://www.imdb.com/name/nm4415449/)
- 🐶 Gilles Augustijnen [(Portfolio)](https://www.kapital.tv)
- 🧐 Prasoon Dhapola [(Portfolio)](https://www.artstation.com/prasoon_dhapola)
- 🎮 Glen Johnson [(Behance)](https://www.behance.net/glenjohnson1353)
- 🧙‍♂️ Jonathan Dupré [(Portfolio)](https://jonathandupre.com/)
- 🤡 Declan McPartlin [(LinkedIn)](https://www.linkedin.com/in/declan-mcpartlin-84b45769)
- 🎬 Yegor [(ArtStation)](https://www.artstation.com/yegor_r)
- 🤪 Andrei Gîrbu [(LinkedIn)](https://www.linkedin.com/in/andrei-g%C3%AErbu-416435158/)
- 🕺 Bernd Winkelmann
- 🧐 Jan Frischmuth
- 🟪 The DMZ [(Webpage)](https://dmz.ryerson.ca/)
- 🟢 The OSS Community
