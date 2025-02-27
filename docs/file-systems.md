---
id: file-systems
title: File Systems
sidebar_label: File Systems
---

A file system controls how your computer stores files and folders on your drives. It manages and organizes your files in an efficient way. Every operating system, Windows, macOS, or Linux have their own file system, and sometimes even more than just one.

When you format your drive, you use a file system of your choice and whenever you place a folder or directory on your drive, the file system manages it.

Some file systems are very generic and can be used on a variety of different drive types (like SSDs or HDDs). Others are heavily optimized for specific types of drives.

### What has P4 One to do with this?

Since P4 One manages your file versions, it uses features of the underlying file system to organize and manage your files. Regardless of whether your project contains only a few 2D graphic files, or you are dealing with multi-gigabyte-sized 3D files, P4 One's job is to create versions of them as fast as possible.

That's why it's very important for your machine to be properly set up, allowing P4 One to make the best use of the capabilities it has.

Let's cover some technicalities first.

## HDD vs. SSD vs. NVMe

### HDD

HDDs (Hard-disk drive) are traditionally spinning hard drives. They can contain several terabytes of data these days, but that comes with the cost of speed. Traditional HDDs are often slower than comparable SSDs or NVMes.

### SSD

An SSD (Solid-state drive) stores data differently than an HDD, and much faster. On the downside, they are more expensive, but performance and efficiency have their price.

### NVMe

NVMe's are the next evolution after SSDs. They store data similarly to SSDs, but thanks to their protocol enhancements, it performs up to 10 times faster (~2000 MB/s as of this writing).

## NTFS, APFS, HFS+

As mentioned above, there are a variety of file systems that are suitable for different needs.

**On Windows**, **NTFS** is the de-facto standard these days. This means an NTFS formatted **NVMe** or **SSD** drive is the best combination you can go with.

**On MacOS**, starting with High Sierra, you have the choice between **HFS+** and **APFS**, with **APFS** being the fastest and more modern file system for Mac computers. It is optimized for **SSDs** and flash-based storage. If you use an external HDD or Fusion Drive, consider formatting your drives with **HFS+**, as **APFS** introduced a lot of data fragmentation that doesn't have an effect on flash-based drives, but does impact the performance of other drive types.
