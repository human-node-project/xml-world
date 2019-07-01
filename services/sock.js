

jeda.service.socket = {

    code: function(app) {

        var sockjs_url = '/jeda';
        
        return {
            create: function() {
                return new SockJS(sockjs_url);
            }
        }
    }
};

