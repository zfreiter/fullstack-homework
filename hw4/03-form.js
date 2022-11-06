const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Use middleware static() to serve all static files in the given folder
app.use(express.static('public'));

// Use middleware urlencoded() to parse an incoming request with a urlencoded payload and return an objectß
app.use(express.urlencoded({ extended: false }));

app.use('/form', express.static('public'));
// POST request
app.post('/submit', (req, res) => {
  // Add your code here
  console.log(req.body);
  const { name, email, comment, newsletter } = req.body;

  let data = `<div>Name: ${name}</div><div>Email: ${email}</div><div>Comments: ${
    comment ? comment : 'n/a'
  }</div><div>Newsletter: ${
    newsletter ? 'Yes, sign me up for the newsletter.' : 'No, thank you.'
  }</div>`;
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
