Title: Learning to love Frontend Development (again)
Authored on: 2020-07-04 
Publish date: 2020-07-04

This year is my 12th in development since I started my career (unofficially). 
More importantly: this is the amount of time I spent to constantly learn stuff, improve myself, go under water, learn stuff, improve myself... You can guess it. 
What I'm starting to figure out is that it doesn't really matter how many years have passed I always missed one key element from my life, and it is some dynamics. Let me explain what I'm thinking: when I started to work in website development I was learning PHP, Javascript, HTML all these stuffs. Soon I was starting to step into system administration (nowadays they call this role DevOps) and life was good. Stressful indeed, but life was good. In the mid-2010's my career started to turn over to a more specialized road, which mainly included Javascript, and some sitebuilding and ... I was doing that so far until today. Okay, if you know me well you are aware that I'm also doing Game Development, and in my job I'm not really a developer anymore, but I'm mostly on meetings, communicating with clients, managing tasks etc. 
A week ago I was starting to think about having my personal server updated to latest LTS NodeJs which seemed to be a good idea since: 
 - I also develop games and for that part of my life I also want to build some marketing stuff (like a website for an upcoming game) 
 - I really need to dwelve into development again to refresh my knowledge and learn new stuff (ES2020 Nullish Coalescing w00tw00t)  
 - I realized that if I occupy my mind with something outside of the company || outside of the usual 2-3 things, then I feel relaxed an more creative

You can guess which is the most important from the above reasons. Yes. It's No.3. The other two are also important but if your brain is healthy, you'll be on the right path for the other stuff. 
Boy... I was soooo right. 

So what I needed to do is destroy my old 32bit server (yep, it was old as h3ll) and create a new one with a 64-bit distro on it. The reason behind this step is that NodeJS stopped supporting 32bit somewhere around v10, which doesn't really made me happy. But hey, it's just one server, this will be fun. I'm using DigitalOcean (DO) and TBH I didn't wanted to change. This is not an advertisement but I still feel that DO provides me everything I need on the topic of having a host, configure it in the way I want. This is the kind of freedom I want. Maybe there are other options which I haven't checked, if there is any, send me some tips if you like. 
So the big steps: 
 - backup the old server (all the sites, all the "other" data) and have the backup tarball be stored in multiple places
 - create a new server instance with preselected 64 bit OS (a Debian for me please) 
 - configure the new host in the cleanest way as I can (trust me, the old server was filled with old cr4p which I'm not even remembering when I used) 
 - upload the old sites which should be still in place
 - reconfigure the domains to point to the new server
 - wait a couple of weeks to check if everything is in order after shutting down the old server 

That's it. Moving to a new host took up 3-4 days as I was only able to work on this project in the evenings. But that's done. Now what... 
Ah of course: I want to create a new blog since the old one is gone. It was abondoned. Now that I think about it... maybe I'll still keep those posts. They are keeping some logs from our first game, which is not even on the stores anymore. Maybe that game will be also updated and re-released in the future... 

Anyway, go back to the next step: create a new site. Since I've updated the server I'm able to install the latest NodeJS LTS now I'm able to recreate the same workflow like in the old server: 
 - create a private Git host on the server
 - have my stuff there when I release, and develop on my Github account
 - when a change is happening on these repos on the server, Jenkins will do the needful, builds the site and deploys it to the target place.

This was the idea back in 5-6 years (I'm not even sure). Since then tools and technology was evolving and so Github. Since MS touched it I saw some interesting upgrades there. A LOT. When I saw Github Actions first in one of the Github Universe keynotes (I think it was in 2019, so it's pretty fresh) I was amazed on how easy it is to set up automate workflow right on Github. So why would I spend hours (days) setting up the full CI on my own host, when I can spend 10-30 mins setting up the whole stuff on Github. An anyway it's new to me so what I'm waiting for?!?! For nothing. 

Yep, it's done, and boy I enjoyed every second of the process. :) It was easy as creating the first Hello World in PHP || JS || HTML || C# || C++ || C || Pascal || [any-other-language-which-i-haven-t-touched-in-my-life]. 

What is the conclusion? Life can be hard if you always do the same things from day-to-day, you should change it sometimes, spice it up with something new, unexpected. For me it's finding new tasks. For you it may be to travel to somewhere, or get a drink with a good friend, it doesn't matter HOW you do it. What matters is to DO it. Keep your head above the water an BE and STAY creative. 

