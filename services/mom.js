

jeda.service.mom = {

    code: function(app) {

        return {

            sub: function(channel, topic, callback) {
                return postal.subscribe({
                    channel: channel,
                    topic: topic,
                    callback: callback
                });
            },

            pub: function(channel, topic, data) {
                return postal.publish({
                    channel: channel,
                    topic: topic,
                    data: data
                });
            },
            
            unsub: postal.unsubscribe,
            
            subscribers: postal.getSubscribersFor
        }
    }
};

