

jeda.service.socket = {

    code: function(app) {

        return {
            create: function() {

                var sockjs = new SockJS(jeda.in.sockjs_url);

                var originalSend = sockjs.send;

                sockjs.send = function(msg) {

                    console.log("[socket.js] Sending: "+msg);
                    
                    app.broadcast("log", "Sending: "+msg);

                    return originalSend.call(this, msg);
                };

                return sockjs;
            }
        }
    }
};

