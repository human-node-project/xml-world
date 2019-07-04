
jeda.module.avatar = {

    name: "Avatar",

    html: `
        <div style="transform: translate(1em, 7px);">
            <input type="button" value="Request avatar creation" class="create-avatar" /> &nbsp; Avatar ID [ <span class="avatar-id">undefined</span> ]
        </div>
    `,
    
    code: function(context) {

        var ui = context.getElement();
        var socket = context.getService("socket").create();

        return {

            init: function() {

                var button = $(ui).find(".create-avatar");
                
                button.jqxButton({ theme: "GreenDarkMetro", disabled: true });

                button.on("click", function() {
                    socket.send(JSON.stringify({ command: "new avatar" }));
                });

                socket.onmessage = function(e) {
                    jeda.in.avatarId = JSON.parse(e.data).avatarId;
                    $(ui).find(".avatar-id").html(jeda.in.avatarId);
                    button.jqxButton({ theme: "GreenDarkMetro", disabled: true });
                };

                socket.onopen = function() {
                    button.jqxButton({ theme: "GreenDarkMetro", disabled: false });

                }
            }
        };
    }
};

