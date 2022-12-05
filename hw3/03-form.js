const http = require('http');
const static = require('node-static');
const querystring = require('node:querystring');
const port = process.env.PORT || 5001;

const file = new static.Server('./public');

const server = http.createServer((req, res) => {
  const routes = ['form', 'submit'];
  let body = '';
  let getRoutes = () => {
    let result = '';
    routes.forEach(
      (elem) => (result += `<li><a href="${elem}">${elem}</a></li>`)
    );

    return result;
  };

  if (req.url === '/') {
    const routeResults = getRoutes();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Form exercise-03</h1>`);
    res.write(`<ul> ${routeResults} </ul>`);
    res.end();
  } else if (req.method === 'GET' && req.url === '/form') {
    file.serveFile('/form.html', 200, {}, req, res);
  } else if (req.url === '/submit') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const userdata = querystring.parse(body);
      const { name, email, comment, newsletter } = userdata;

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`<h1>Name: ${name}</h1>`);
      res.write(`<h1>Email: ${email}</h1>`);
      if (!comment) {
        res.write(`<h1>Comments: n/a</h1>`);
      } else {
        res.write(`<h1>Comments: ${comment}</h1>`);
      }
      newsletter
        ? res.write(`<h1>Newsletter: Yes, sign me up for the newsletter.</h1>`)
        : res.write(`<h1>Newsletter: No, thank you.</h1>`);
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
