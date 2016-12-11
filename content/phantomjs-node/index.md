+++
date = "2016-12-10T12:06:26-08:00"
title = "PhantomJS Integration for NodeJS"

+++

# PhantomJS for NodeJS

<a class="button big" href="https://github.com/amir20/phantomjs-node">Get Started</a>
<iframe id="github" src="https://ghbtns.com/github-btn.html?user=amir20&repo=phantomjs-node&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>


## What is PhantomJS for NodeJS?
[PhantomJS](http://phantomjs.org/) is a headless WebKit scriptable with a JavaScript API.
The native API is not accessible in NodeJS. This module allows NodeJS to interface with PhantomJS via
an external process. It spawns PhantomJS processes automatically and exposes a really simple API
to the NodeJS developer.

## Easy Installation.
Installing PhantomJS-Node is very easy. You can install it like any other NPM module.
Phantom automatically installs the right version of PhantomJS so that you don't have to. If
the right version is installed, then it does nothing. You can install Phantom with

```
npm i phantom --save
```

Or use Yarn

```
yarn add phantom
```

For older versions of NodeJS, checkout the [README](https://github.com/amir20/phantomjs-node#installation).

## Very Easy.
It is very easy to start using PhantomJS in NodeJS. Here is a example how to read the content of a website.

```js
const phantom = require('phantom');

(async function() {
    const instance = await phantom.create();
    const page = await instance.createPage();
    const status = await page.open('https://stackoverflow.com/');
    console.log(status);
    const content = await page.property('content');
    console.log(content);
    await instance.exit();
}());
```

## See it in action
Below is a recording that show how to use Phantom using Node 7+.
<script type="text/javascript" src="https://asciinema.org/a/92551.js" id="asciicast-92551" async></script>
