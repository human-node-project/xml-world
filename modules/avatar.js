
jeda.module.avatar = {

    name: "Avatar",

    html: `
        <p>Avatar ID [ <span class="avatar-id">undefined</span> ]</p>
    `,
    
    code: function(context) {

        var ui = context.getElement();
        var socket = context.getService("socket").create();

        return {

            init: function() {

                socket.onmessage = function(e) {
                    jeda.in.avatarId = JSON.parse(e.data).avatarId;
                    $(ui).find(".avatar-id").html(jeda.in.avatarId);
                };

                socket.onopen = function() {
                    socket.send(JSON.stringify({ command: "new avatar" }));
                }
            }
        };
    }
};

