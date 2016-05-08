# iNotice.js
iOS Notification implementation of on the browser

![Output sample](https://github.com/asari-koto/inotice.js/raw/master/inotice-test.gif)
## Getting started

### Quick start

- [Download the latest release](https://github.com/asari-koto/inotice.js/archive/master.zip).
- Clone the repository: `git clone https://github.com/asari-koto/inotice.js.git`.


### Installation

Include files:

```html
<link  href="/path/to/inotice.css" rel="stylesheet">
<script src="/path/to/inotice.js"></script>
```



### Usage

```js
var config = {
    systemName: 'LINE',
    imageUrl: 'https://lh4.ggpht.com/IkQ_kmk57G3fFkTOmtfQdp2XTZ8gic119yqvsKDkvbuPotfC7R05JPBdtuGm3OmA15xE=w300',
    time: 'now',
    notification: 'Hello, iOSNotification'
};

INotice.start(config);
```
