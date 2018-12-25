const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, `utf-8`);
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {

  const pathname = url.parse(req.url, true).pathname;
  const id = url.parse(req.url, true).query.id;

  // PRODUCTS
  if (pathname === '/products' || pathname === '/') {
    res.writeHead(200, { 'Content-type': 'text/html' });

    fs.readFile(`${__dirname}/templates/template-overview.html`, 'utf-8', (err, data) => {
      let overviewOutput = data;
      fs.readFile(`${__dirname}/templates/template-card.html`, 'utf-8', (errCard, dataCard) => {

        const cardsOutput = laptopData.map(el => replaceTemplate(dataCard, el)).join('');
        overviewOutput = overviewOutput.replace(/{%CARDS%}/g, cardsOutput);

        res.end(overviewOutput);
      });
    });

  }

  //  LAPTOP DETAIL
  else if (pathname === '/laptop' && id < laptopData.length) {
    res.writeHead(200, { 'Content-type': 'text/html' });

    fs.readFile(`${__dirname}/templates/template-laptop.html`, 'utf-8', (err, data) => {
      const laptop = laptopData[id];
      const output = replaceTemplate(data, laptop);
      res.end(output);
    });

  }

  //  IMAGES
  else if ((/\.(jpg|jpeg|png|gif)$/i).test(pathname)) {
    fs.readFile(`${__dirname}/data/img${pathname}`, (err, data) => {
      res.writeHead(200, { 'Content-type': 'image/jpg' });
      res.end(data);
    });
  }

  //  NOT FOUND
  else {
    res.writeHead(404, { 'Content-type': 'text/html' });
    res.end('URL was not found on the server!');
  }

});

server.listen(1337, '127.0.0.1', () => {
  console.log('Listening for requests now');
});

function replaceTemplate(originalHtml, laptop) {
  return originalHtml
    .replace(/{%ID%}/g, laptop.id)
    .replace(/{%PRICE%}/g, laptop.price)
    .replace(/{%IMAGE%}/g, laptop.image)
    .replace(/{%PRODUCTNAME%}/g, laptop.productName)
    .replace(/{%SCREEN%}/g, laptop.screen)
    .replace(/{%CPU%}/g, laptop.cpu)
    .replace(/{%STORAGE%}/g, laptop.storage)
    .replace(/{%RAM%}/g, laptop.ram)
    .replace(/{%DESCRIPTION%}/g, laptop.description);
}

