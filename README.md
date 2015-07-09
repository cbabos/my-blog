yourweb.hu
==========

This is the beginning of developing my personal, and work-related blog.
The workflow is based on the blog workflow of Remy Sharp, but I wanted an only
node.js based solution, and of course some challenge for myself :)

It's created using the following tools:
 - [Node.js](http://nodejs.org/)
 - [harp](http://harpjs.com/) for compiling and for serving in the develop process

Main features:
 - posts written in markdown
 - build script to create html from markdown
 - css3 autoprefixer, builder
 - js builder
 - html builder
 - version bump

#Installation
After you cloned the repo, issue this command (while standing in the project folder):
```BASH
$ npm install && bower install
```

#Commands
##Lifecycle scripts included in my-blog:
  **start**
    Start a Harp-based server to test your modifications

  **publish**
    Compile the new content and commits to the local-repo

##available via `npm run-script`:
  **new**
    *Create new entry*

  **build**
    *Compile the content*

  **release-patch**
    *Bumps the version (semver, patch-level)*

  **release-minor**
    *Bumps the version (semver, minor-level)*

  **release-major**
    *Bumps the version (semver, major-level)*

  **release**
    *Bumps the version (semver)*
