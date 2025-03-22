(function() {
  const scriptContent = `
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
  })();`;
  const script = document.createElement('script');
  script.textContent = scriptContent;
  document.head.appendChild(script);
})();
