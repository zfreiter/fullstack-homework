const http = require('http');
const port = process.env.PORT || 5001;

const postHTML = `<html><head><title>Post Example</title></head><body>
  <form method='post' action='/submit'>
  <label for='name'>Name: </label>
  <input type="text" name='name' id="name"><br />
  <label for="email">Email: </label>
  <input type="text" name="email" id="email"><br />
  <label for="comment">Submit your comments: </label><br />
  <textarea name='comment' rows='4' cols='50'></textarea><br />
  <label for='newsletter'>Sign up for the newsletter</label>
  <input type='checkbox' name='newsletter' id='check' /><br />
  <input type='submit'>
  </form></body></html>`;

const server = http.createServer((req, res) => {
  const routes = ['form', 'submit'];
  let body = '';
  let getRoutes = () => {
    let result = '';

    routes.forEach(
      (elem) => (result += `<li><a href="/${elem}">/${elem}</a></li>`)
    );

    return result;
  };

  req.on('data', (chunk) => {
    body += chunk;
    console.log('on data: ' + body);
  });

  req.on('end', () => {
    if (req.url === '/') {
      const routeResults = getRoutes();
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`<h1>Form exercise-03</h1>`);
      res.write(`<ul> ${routeResults} </ul>`);
    } else if (req.url === '/form') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(postHTML);
    } else if (req.url === '/submit') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      const params = new URLSearchParams(body);
      res.write(`<h1>Name: ${params.get('name')}</h1>`);
      res.write(`<h1>Email: ${params.get('email')}</h1>`);
      if (!params.get('comment')) {
        res.write(`<h1>Comments: n/a</h1>`);
      } else {
        res.write(`<h1>Comments: ${params.get('comment')}</h1>`);
      }
      params.get('newsletter')
        ? res.write(`<h1>Newsletter: Yes, sign me up for the newsletter.</h1>`)
        : res.write(`<h1>Newsletter: No, thank you.</h1>`);
    }

    res.end();
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
