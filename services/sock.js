

jeda.service.socket = {

    code: function(app) {

        return {
            create: function() {
                return new SockJS(jeda.in.sockjs_url);
            }
        }
    }
};

