const http = require('http');
const port = process.env.PORT || 5000;

// http://localhost:5000/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5000/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5000/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5000/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// http://localhost:5000/check-cookies should return 'yes' / 'no' in plain text depending on whether the browser has the 'hello' cookie

// For other routes, such as http://localhost:5000/other, this exercise should return a status code 404 with '404 - page not found' in html format

const server = http.createServer((req, res) => {
  const routes = [
    'welcome',
    'redirect',
    'redirected',
    'cache',
    'cookie',
    'check-cookies',
    'other',
  ];

  let getRoutes = () => {
    let result = '';

    routes.forEach(
      (elem) => (result += `<li><a href="/${elem}">${elem}</a></li>`)
    );

    return result;
  };

  if (req.url === '/') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Exercise 01</h1>`);
    res.write(`<ul> ${routeResults} </ul>`);
    res.end();
  }

  // Add your code here
  if (req.url === '/redirected' || req.url === '/other') {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write(
      `<h1>Error 404. 'http://localhost${port}${req.url}' is broken</h1>`
    );
    res.end();
  }

  if (req.url === '/welcome') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Welcome</h1>`);
    res.end();
  }

  if (req.url === '/redirect') {
    res.writeHead(302, { Location: '/redirected' });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Redirected</h1>`);
    res.end();
  }

  if (req.url === '/cache') {
    res.setHeader('Cache-control', 'max-age=86400');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>this resource was cached</h1>`);
    res.end();
  }

  if (req.url === '/cookie') {
    res.setHeader('Set-cookie', 'hello=world');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>cookies... yummm'</h1>`);
    res.end();
  }

  if (req.url === '/check-cookies') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const cookies = req.headers.cookie;
    res.write(`<h1>${cookies ? 'yes' : 'no'}</h1>`);
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
