const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true);
  const path = parsedURL.path;

  if (path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./index.html', (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else if (path === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./about.html', (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    })
  } else if (path === '/contact-me') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./contact-me.html', (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    fs.readFile('404.html', (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    })
  }



}).listen(8080);