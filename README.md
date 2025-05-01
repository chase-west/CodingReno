CodingReno
Template for the bs-config.js file for routing.

This configuration enables BrowserSync to serve .html files with clean routes like /about instead of /about.html.

Instructions

Create a file named bs-config.js in public_html.

Paste the following configuration into the file:
```

const path = require('path');

module.exports = { server: { baseDir: './', middleware: function(req, res, next) { const url = req.url;

javascript
Copy
Edit
  const routes = {
    '/': 'index.html',
    '/home': 'index.html',
    '/about': 'about.html',
    '/service': 'service.html',
    '/join': 'join.html'
  };

  if (routes[url]) {
    req.url = '/' + routes[url];
  } else if (!path.extname(url) && url !== '/') {
    req.url = url + '.html';
  }

  console.log(`Rewriting ${url} to ${req.url}`);
  next();
}
}, files: ['**/*'], open: false, notify: false };
```

To start the server, run:
```
browser-sync start --config bs-config.js
```

This setup rewrites clean URLs to their corresponding .html files and supports live reloading of all files in the directory.

