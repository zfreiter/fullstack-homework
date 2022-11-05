const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Use middleware static() to serve all static files in the given folder
app.use(express.static('public'));

// Use middleware urlencoded() to parse an incoming request with a urlencoded payload and return an objectß
app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

app.use('/form', express.static('public'));
// POST request
app.post('/submit', (req, res) => {
  // Add your code here
  console.dir(req.body);
  const { name, email, comment, newsletter } = req.body;
  let data = `<div>${name}</div><div>${email}</div><div>${comment}</div><div>${newsletter}</div>`;
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
