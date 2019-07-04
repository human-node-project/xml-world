

jeda.service.bodycom = {

    code: function(app) {

        var sockjs = app.getService("socket");

        return {
            create: function(api) {

                var socket = sockjs.create();

                socket.onopen = api.onopen;
                socket.onmessage = api.onmessage;
                socket.onclose = api.onclose;

                return {
                    onopen: socket.onopen,
                    onmessage: socket.onmessage,
                    onclose: socket.onclose,
                    send: function(msg) {

                        if (!jeda.in.avatarId) throw Error("AvatarID undefined");

                        if (!msg.command) throw Error("Missing command in: "+JSON.stringify(msg));

                        socket.send(JSON.stringify( Object.assign({}, msg, { avatarId: jeda.in.avatarId }) ));
                    }
                }
            }
        }
    }
};

