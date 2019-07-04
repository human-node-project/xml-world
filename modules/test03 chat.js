
jeda.module.mod3 = {

    name: "Chat service test",

    html: `

        <input type="text">
        <br>
        <p class="reply"></p>

    `,
    
    code: function(context) {

        var ui = context.getElement();
        var chat = context.getService("chat");
        var bot;

        return {

            init: function() {

                $(ui).find("input").jqxInput({
                    theme: "GreenDarkMetro"
                });

                bot = new chat.Interpreter(`
                    
                    + hey *
                    - hello
                    - hi there <star>
                    
                    + *
                    - what?
                    
                `);

            },

            onchange: function(e) {

                bot.reply("user", e.args.value).then(function(reply) {

                    $(ui).find(".reply").html(reply);
                });
            }
        };
    }
};

