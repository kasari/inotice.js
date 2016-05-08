var INotice = new function() {
  var defaultConfig = {
    systemName: 'LINE',
    imageUrl: 'https://lh4.ggpht.com/IkQ_kmk57G3fFkTOmtfQdp2XTZ8gic119yqvsKDkvbuPotfC7R05JPBdtuGm3OmA15xE=w300',
    time: 'now',
    notification: 'Hello, iOSNotification'
  };

  var isActiveFlag = false;
  var $bar, $time, $systemName, $notification, $icon;

  function init() {
    appendINoticeDom();

    $bar = document.getElementsByClassName('ios-notification-bar-wrapper')[0];
    $time = document.querySelector('.message>.row1>.time');
    $systemName = document.querySelector('.message>.row1>.systemname');
    $notification = document.querySelector('.message>.row2>.notification');
    $icon = document.querySelector('.main-wrapper>.icon>img');
  }

  function appendINoticeDom() {
    var inotice = document.createElement("div");
    inotice.className = "ios-notification-bar-wrapper";

    var heredoc = (function () {/*
    <div class="ios-notification-bar">
      <div class="main-wrapper">
        <div class="icon">
          <img src="">
        </div>
        <div class="message-wrapper">
          <div class="message">
            <div class="row1">
              <p class="systemname"></p>
              <p class="time"></p>
            </div>
            <div class="row2">
              <p class="notification"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="hole"></div>
    </div>
    */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

    inotice.innerHTML = heredoc;
    document.body.appendChild(inotice);
  }

  this.start = function(config) {
    var cfg = config || defaultConfig;
    setSystem(cfg.systemName, cfg.imageUrl);
    setTime(cfg.time);
    setNotification(cfg.notification);

    if (!isActiveFlag) {
      open();
      setTimeout( close, 2000 );
    }
  }

  function open() {
    $bar.className = 'ios-notification-bar-wrapper is-active';
    isActiveFlag = true;
  }

  function close() {
    $bar.className = 'ios-notification-bar-wrapper';
    setTimeout( function() {
      isActiveFlag = false;
    }, 500 );
  }

  function setSystem(sysName, imgPath) {
    $systemName.textContent = sysName;
    $icon.src = imgPath;
  }

  function setTime(str) {
    $time.textContent = str;
  }

  function setNotification(str) {
    $notification.textContent = str;
  }

  this.isActive = function() {
      return isActiveFlag;
  }

  document.addEventListener( 'DOMContentLoaded', init );
}
