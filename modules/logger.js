
jeda.module.logger = {

    name: "Log",

    html: `

        <br><div></div>

    `,
    
    code: function(context) {

        var ui = context.getElement();

        return {

            init: function() {

                panel = $(ui).find("div").jqxPanel({
                        height: "12em",
                        theme: "GreenDarkMetro",
                        autoUpdate: true
                    })
            },

            messages: [ 'log' ],

            onmessage: function(name, data) {
    
                if (name === 'log') {
                    console.log('in');
                    $(context.getElement()).find("div").jqxPanel('append', data.toString()+"<br>");
                }
            }

        };
    }
};

