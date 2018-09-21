'use strict';

const url = require('url');
const fs = require('fs');
const path = require('path');

var ROOT = path.normalize(__dirname + '/dist');

require('http').createServer((req, res) => {

  let pathname = url.parse(req.url).pathname;
  try {
    pathname = decodeURI(pathname);
  } catch (error) {
    res.statusCode = 400;
    res.end('Bad request');
    return;
  }

  switch(req.method) {
  case 'GET':
    if (pathname == '/') {
      sendFileSafe('index.html', res);
      return;
    }
    sendFileSafe(pathname, res);
    break;

  default:
    res.statusCode = 502;
    res.end('Not implemented');
  }
}).listen(8080);


const sendFileSafe = (filePath, res) => {

  if(~filePath.indexOf('\0')) {
    res.statusCode = 400;
    res.end('Bad request');
    return;
  }

  filePath = path.normalize(path.join(ROOT, filePath));

  if(filePath.indexOf(ROOT) != 0) {
    res.statusCode = 404;
    res.end('File not found');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if(err || !stats.isFile()) {
      res.statusCode = 404;
      res.end('File not found');
      return;
    }

    let file = fs.ReadStream(filePath);
    sendFile(file, res);
  });
};

const sendFile = (file, res) => {
  file.pipe(res);
  // file.on('readable', write);

  // function write() {
  //   var fileContent = file.read(); // Считать часть

  //   if (fileContent && !res.write(fileContent)) { // Отправить
  //     file.removeListener('readable', write);

  //     res.once('drain', () => { // Подождать
  //       file.on('readable', write);
  //       write();
  //     });
  //   }
  // }

  // file.on('end', function() {
  //   res.end();
  // });

  file.on('error', (err) => {
    res.statusCode = 500;
    res.end('Server Error');
    console.log(err);
  });
  res.on('close', () => {
    file.destroy();
  });
};