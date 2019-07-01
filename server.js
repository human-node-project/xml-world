'use strict';

const http = require('http');
const sockjs = require('sockjs');
const node_static = require('node-static');

// 1. Jeda sockjs server
const sockjs_opts = {
  prefix: '/jeda'
};

const sockjs_echo = sockjs.createServer(sockjs_opts);
sockjs_echo.on('connection', function(conn) {
  conn.on('data', function(message) {

    conn.write(message.toUpperCase()); // echo uppercase

  });
});

// 2. Static files server
const static_directory = new node_static.Server(__dirname);

// 3. Usual http stuff
const server = http.createServer();
server.addListener('request', function(req, res) {
  static_directory.serve(req, res);
});
server.addListener('upgrade', function(req, res) {
  res.end();
});

sockjs_echo.installHandlers(server, {prefix:'/jeda'});

console.log(' [*] Listening on 0.0.0.0:9999');
server.listen(80, '0.0.0.0');