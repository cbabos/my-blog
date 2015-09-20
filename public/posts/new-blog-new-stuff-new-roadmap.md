New blog, new stuff, new roadmap!
===

Hi there! You must be new here. Why is that? Well, it's a completely new site, so first things first: please, let me introduce myself!

My name is Csaba Babos, I'm currently working as a frontend developer, but I have started my journey on the game development.
I'm creating some educational webapps for children at work, and I really find it satisfying. However I've a childhood dream, and that is to create videogames that I would love to play.

At these days there are many options for creating games, one of them is using Unity3D. It's free for personal usage and it has powerful features. I'm still learning it, so you can read about it on this blog in time as I learn more and more.

But let me talk a bit more about frontend development, because the main reason I've created this blog is to learn various automation systems for frontend developers.
This will be a not so long journey, but it will worth the time.
One day I've suddenly got to visit a developer's b:log, probably because he is a big name in frontend development: Remy Sharp. I've noticed that he write his posts in Markdown, and [the source of his blog](https://github.com/remy/remysharp.com) is available on his [his Github profile](https://github.com/remy). I was surprised, because I couldn't find any of the tools I've used for generating our company's apps. Actually he used [harp](http://harpjs.com/) for generating the static resources (HTML, CSS and so on), and I felt this will be a great starting point for my studies. Remy used a Makefile for initiating the build process and the server, but I thought it's a bit cleaner if I strict myself to the parts of Node.js.  

I've created some minimal requirements for the blog:
- publishing dates,
- published / unpublished states,
- list / details views,
- version bumping,
- static html output,
- minimized css,
- usage of uncss, because of the heavy size of bootstrap's css that I've used to create the layout

After I've set up this goals, I've created the site in no time. To be honest, this was my first time using [Jade - node template engine](http://jade-lang.com/), but man... It was so damn easy to get it work, I think I'll stick with it on the next versions of the blog.
When I wrote these lines, the blog is in version 0.2.2, but with the publish of this article, it will be v1.0.0. It's finished. The first stable version. It's a good feeling. But you know how that feels right? :)

Of course I'll not stop here. Here are the roadmap of the blog's (and of my knowledge) evolution.

## v2.0.0
This will be probably a full rewrite of the blog, but I think it will be fun. Some of the planned features:
- usage of Grunt as task runner
- I'll stick with Markdown based posts so I'll need markdown to html parser
- LESS for styling the site (as I do right now too)
- usage of HTML, CSS, JS linters
- of course: I'll need some HTML, CSS|LESS preprocessor grunt plugins too
- I'll stick with [semver](http://semver.org/) versioning
- If I save it, I wanna see it, so I'll use something like browser-sync or LiveReload
- I hope there will be enough articles, so I'll need a pager, I think it will be a Javascript based one, I'll stick with the frontend only solutions for now
- I'll add the support of tags
- An archive feature will be useful I think

## v3.0.0
This will be an upgrade, and it will use Gulp as the building system. Other feature... I don't know yet, but I'm sure that I'll come up with something interesting :)

## v4.0.0
This is far away in the future so it's not a strict promise, but I think this will use Webpack maybe with Gulp, because I don't want to lose the linting ability and I don't know if I can do linting with a webpack-based workflow.

Ok that's all about the blog for now.

This post is a bit longer than I expected, so I'll cover our current game in a later post.

I hope you didn't found this article so boring, and You'll check back later :)

Have a nice day, dear visitor!
