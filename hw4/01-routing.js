const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// http://localhost:5000/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5000/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5000/other, this exercise should return a status code 404 with '404 - page not found' in html format

const routes = [
  'welcome',
  'redirect',
  'redirected',
  'cache',
  'cookie',
  'other',
];

let getRoutes = () => {
  let result = '';

  routes.forEach(
    (elem) => (result += `<li><a href="/${elem}">${elem}</a></li>`)
  );

  return result;
};

app.get('/', (req, res) => {
  let routeResults = getRoutes();

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Exercise 04</h1>`);
  res.write(`<ul> ${routeResults} </ul>`);
  res.end();
});

// Add your code here
// http://localhost:5000/welcome should return a status code 200 with a welcome message of your choice in html format
app.get('/welcome', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send(`<h1>Hello to the welcome page!</h1>`);
  //res.end();
});

// http://localhost:5000/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice
app.get('/redirect', (req, res) => {
  res.redirect(`http://localhost:${port}/redirected`);
  //res.end();
  // res.writeHead(302, { Location: '/redirected' });
  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.write(`<h1>Redirected</h1>`);
  // res.end();
});

app.get('/redirected', (req, res) => {
  res.send(`<h1>You have been redirected to redirected!</h1>`);
  res.end();
});

app.get('/welcome', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send(`<h1>Hello to the welcome page!</h1>`);
  res.end();
});

app.get('/redirect', (req, res) => {
  res.redirect('/redirected');
  res.end();
});

app.get('/redirected', (req, res) => {
  res.status(200);
  res.send(`<h1>You have been redirected to redirected!</h1>`);
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
