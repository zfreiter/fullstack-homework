const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5000;

// Add your code here
const sessionText = () => {};
// Use the express-session module
app.use(
  session({
    //store: new session.MemoryStore(),
    secret: 'a secret to sign the cookie',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 86400000,
    },
  })
);

app.get('*', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  if (req.session.example === undefined) {
    req.session.example = [];
    req.session.example.push(req.url);

    res.send(
      `<p>Currently on route: ${req.session.example[0]}</p><p>Welcome to http://localhost:${port}</p>`
    );
  } else {
    req.session.example.push(req.url);
    let body = `<p>Currently on route: ${req.url}</p><p>Previously visited:</p>`;
    let items = '';

    req.session.example.forEach((element, index) => {
      if (index !== req.session.example.length - 1) {
        items += `<li>${element}</li>`;
      }
    });

    let list = `<ul style='list-style-type:none;'>${items}</ul>`;
    body += list;
    res.send(body);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
