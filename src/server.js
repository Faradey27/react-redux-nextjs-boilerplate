const express = require('express');
const next = require('next');
const compression = require('compression');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: __dirname, dev });
const handle = app.getRequestHandler();

const DEFAULT_PORT = 3000;

app.prepare().
  then(() => {
    const server = express();

    server.use(compression());

    server.use('/assets/locales', express.static(path.join(__dirname, '/assets/locales')));
    server.get('*', (req, res) => handle(req, res));

    server.listen(DEFAULT_PORT, (err) => {
      if (err) throw err;
      console.info('> Ready on http://localhost:3000');
    });

    return server;
  }).
  catch((ex) => {
    console.error(ex.stack);
    throw ex.stack;
  });

module.exports = app;
