---
id: uninstall
title: Uninstall
sidebar_label: Uninstall
---

# How to uninstall Snowtrack

## MacOS

**Step 1)** After you have closed Snowtrack, you can drag and drop the application from its location into the Trash in your dock.

![Move Snowtrack To Trash](/img/snowtrack-uninstall-macos.png)

**Step 2)** There are 2 additional locations we need to take care of.

- **Preferences**

    `~/Library/Application Support/Snowtrack`

- **Version Database** (default):

    `~/Library/Application Support/Snowtrack/VersionDB` or where you stored it

    ⚠️ Remember, the version database contains all of the files and versions of your projects that are managed by Snowtrack. So make sure this is the directory you want to delete.

---

## Windows

**Step 1)** Snowtrack can be uninstalled through the uninstaller. The most convenient way to uninstall Snowtrack on Windows is through the start menu by typing in *"Snowtrack"*. You can then click on **Uninstall**.

![Uninstall Snowtrack](/img/snowtrack-uninstall-windows.png)

**Step 2)** There are 2 additional locations we need to take care of.

- **Preferences**

    Snowtrack saves its preferences inside this location:

    `C:\Users\<YOUR_USERNAME>\AppData\Roaming\Snowtrack`

- **Version Database** (by default inside the preference directory):

    `C:\Users\<YOUR_USERNAME>\AppData\Roaming\Snowtrack\VersionDB` or the location you choose during the initial startup dialog.

    ⚠️ Remember, the version database contains all files and versions of all your projects that are managed by Snowtrack. So make sure this is the directory you want to delete.

---

## Linux

Follow the section depending on the way how you have installed Snowtrack

### AppImage

**Step 1)** After you have closed Snowtrack, you can move the AppImage to the trash.

Continue with step 2 below. 👇

### tar.gz

**Step 1)** After you have closed Snowtrack, you can move the unpacked directory to the trash.

Continue with step 2 below. 👇

### deb, pkg

**Step 1)** Open the built-in software manager of your Linux distribution. It's typically called *Software*. Open the `Installed` tab of the application and remove Snowtrack.

Continue with step 2 below. 👇

### Step 2

There are 2 additional locations we need to take care of.

- **Preferences**

    `~/.config/Snowtrack`

- **Version Database** (default):

    `~/.config/Snowtrack/VersionDB` or where you stored it

    ⚠️ Remember, the version database contains all of the files and versions of your projects that are managed by Snowtrack. So make sure this is the directory you want to delete.