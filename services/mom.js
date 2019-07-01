

jeda.service.mom = {

    code: function(app) {

        var channel = {};

        return {

            sub: function(channel, topic, callback) {
                return postal.subscribe({
                    channel: channel,
                    topic: topic,
                    callback: callback
                });
            },
            
            unsub: postal.unsubscribe,
            
            subscribers: postal.getSubscribersFor,

            channel: function(channelName) {
                if (!channel[channelName]) {
                    channel[channelName] = true;
                    return {

                        pub: function(topic, content) {
                            postal.publish({
                                channel: channelName,
                                topic: topic,
                                data: content
                            });
                        }
                    };
                }
                else throw Error("Channel name collision");
            }
        }
    }
};

