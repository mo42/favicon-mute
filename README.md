# ![image](icon_64.png) FaviconMute

FaviconMute a simple browser extension that prevents web apps from changing the
favicon and title to display notifications. No more distracting notifications.

Firefox Add-Ons: [Favicon-Mute](https://addons.mozilla.org/en-US/firefox/addon/favicon-mute/)

## How It Works

When you use FaviconMute, it locks the favicon to the original one of the
website you are visiting, preventing dynamic changes. Websites may try to
update the favicon (for example, showing a notification icon), but FaviconMute
ensures the icon remains the same throughout your session.

```js
(function() {
  const originalSetAttribute = Element.prototype.setAttribute;

  // Block changes through setAttribute
  Element.prototype.setAttribute = function(name, value) {
      if (name === 'href' && (this.rel === 'icon' || this.rel === 'shortcut icon')) {
          console.log('Blocked favicon change attempt');
          return;
      }
      if (name === 'title' && this === document.querySelector('title')) {
          console.log('Blocked title change attempt');
          return;
      }
      return originalSetAttribute.call(this, name, value);
  };

  // Override document.title to block title changes
  Object.defineProperty(document, 'title', {
      get() {
          return document.querySelector('title').textContent;
      },
      set(newTitle) {
      }
  });
})();
```

## License

Distributed under the MIT License. See `LICENSE` for more information.
