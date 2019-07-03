'use strict';



const humanPwd = "iamhuman";



exports.boilerplate = function(world, client, message) {

}



exports["god view"] = function(world, client, message) {

    if (message.password == humanPwd)
        client.write(JSON.stringify(world.xmlDoc, null, 2));
}



exports["new avatar"] = function(world, client, message) {

    client.write(JSON.stringify({ avatarId: client.id }));
    world.createAvatar(client.id);
}




