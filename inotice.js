var INotice = new function() {
  var defaultConfig = {
    systemName: 'LINE',
    imageUrl: 'https://lh4.ggpht.com/IkQ_kmk57G3fFkTOmtfQdp2XTZ8gic119yqvsKDkvbuPotfC7R05JPBdtuGm3OmA15xE=w300',
    time: 'now',
    notification: 'Hello, iOSNotification'
  };

  var isActiveFlag = false;

  var $bar = document.getElementsByClassName('ios-notification-bar-wrapper')[0];
  var $time = document.querySelector('.message>.row1>.time');
  var $systemName = document.querySelector('.message>.row1>.systemname');
  var $notification = document.querySelector('.message>.row2>.notification');
  var $icon = document.querySelector('.main-wrapper>.icon>img');

  this.init = function() {
    this.setSystem(defaultConfig.systemName, defaultConfig.imageUrl);
    this.setTime(defaultConfig.time);
    this.setNotification(defaultConfig.notification);
  }

  this.start = function() {
      if (!isActiveFlag) {
          this.open();
          setTimeout( this.close, 2000 );
      }
  }

  this.open = function() {
      $bar.className = 'ios-notification-bar-wrapper is-active';
      isActiveFlag = true;
  }

  this.close = function() {
      $bar.className = 'ios-notification-bar-wrapper';
      setTimeout( function() {
          isActiveFlag = false;
      }, 500 );
  }

  this.setSystem = function(sysName, imgPath) {
    $systemName.textContent = sysName;
    $icon.src = imgPath;
  }

  this.setTime = function(str) {
    $time.textContent = str;
  }

  this.setNotification = function(str) {
    $notification.textContent = str;
  }

  this.isActive = function() {
      return isActiveFlag;
  }
}

INotice.init();
