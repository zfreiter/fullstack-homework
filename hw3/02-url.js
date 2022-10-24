const http = require('http');

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  const routes = [
    '/attributes?hello=world&lorem=ipsum',
    '/items?first=1&second=2&third=3&fourth=4',
    '/characters?spongebob=squarepants&patrick=star&sandy=cheeks',
  ];

  // use the URL interface to work with URLs
  // source: https://developer.mozilla.org/en-US/docs/Web/API/URL
  let url = new URL(req.url, `http://${req.headers.host}`);

  let getRoutes = () => {
    let result = '';

    routes.forEach(
      (elem) => (result += `<li><a href="${elem}">${elem}</a></li>`)
    );

    return result;
  };

  if (req.url === '/') {
    let routeResults = getRoutes();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Exercise 02</h1>`);
    res.write(`<ul> ${routeResults} </ul>`);
    //res.end();
  }

  let createtable = (url) => {
    queryList = [];
    for (const [key, value] of url.searchParams) {
      queryList.push({ key, value });
    }
    result = '';
    queryList.forEach((item) => {
      result += `<tr><td>${item.key}</td>` + `<td>${item.value}</td></tr>`;
    });
    can = `<table>${result}</table>`;
    return can;
  };

  let table = createtable(url);
  console.log(table);
  //Add your code here
  res.write(table);
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
