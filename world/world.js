'use strict';



const commands = require('./commands.js');
const xmldoc = require('xmldoc');
const fs = require('fs');



// Our god-object

var world = {};
world.client = {}; // modules which use the socket service are all clients
world.avatar = {};



// XML world file, hard-coded for now

world.xmlRaw = fs.readFileSync("./world/world.xml", "utf-8");
world.xmlDoc = new xmldoc.XmlDocument(world.xmlRaw);




// World interface for server.js

exports.newConnection = function(id) {

    world.client[id] = {};
    console.log("[world.js] New client ID: ", id);
}

exports.message = function(client, message) {

    try {
        var parsedMsg = JSON.parse(message);

        if (!commands[parsedMsg.command]) throw Error("Command unknown");

        try {
            commands[parsedMsg.command](world, client, parsedMsg);
        } catch(e) {
            console.error("ERROR [world.js] executing "+message);
            console.error("ERROR [world.js] "+e);
        }

    } catch(e) { // if not even a valid JSON command

        console.error("ERROR [world.js] Invalid JSON command from", client.id);
        console.error("ERROR [world.js] Invalid JSON command:", message);
    }
}

exports.close = function(id) {

    delete world.client[id];
}



// Avatars

world.createAvatar = function(id) {

    world.avatar[id] = {};
}






