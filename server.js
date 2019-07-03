'use strict';



const http = require('http');
const sockjs = require('sockjs');
const node_static = require('node-static');
const world = require('./world/world.js');



// Jeda sockjs server

const sockjs_opts = {
    prefix: '/jeda',
    log: function(severity, message) {
        console[severity]("[server.js] "+message);
    }
};

const sockjs_echo = sockjs.createServer(sockjs_opts);
sockjs_echo.on('connection', function(conn) {

    world.newConnection(conn.id);

    conn.on('data', function(message) { world.message(conn, message); });

    conn.on('close', function() { world.close(conn.id); });
});



// Static files server

const static_directory = new node_static.Server(__dirname);



// Usual http stuff

const server = http.createServer();

server.addListener('request', function(req, res) {

    static_directory.serve(req, res);
});

server.addListener('upgrade', function(req, res) {

    res.end();
});

sockjs_echo.installHandlers(server, { prefix: '/jeda' });



// Open server

server.listen(80, '0.0.0.0');
console.log('[server.js] Listening');


