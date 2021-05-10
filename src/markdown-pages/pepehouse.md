---
slug: "/blog/pepehouse"
date: "2021-04-25"
title: "PepeHouse"
---

I recently discovered a webRTC tool called <a href="https://mediasoup.org/" target="_blank" rel="noopener noreferrer">MediaSoup</a> and I thought it would be fun to experiment with it.

I made a <a href="https://pepehouse.tv/" target="_blank" rel="noopener noreferrer">site</a> that lets people share their screens in a browser. Originally I made it so my friends could watch movies together without having to download an extra app like Zoom.

The frontend is made in React (of course) and I created a backend with NodeJS to be the media server and serve the built React files. Originally I wanted to host the app through Heroku so I could utilize the free tier but Heroku only opens port 80 and the media server requires other ports for peers to be able to connect to. I ended up using DigitalOcean for hosting and am currently paying for it with coupons I find on the internet.
