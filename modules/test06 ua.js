
jeda.module.mod6 = {

    name: "UA service test",

    html: `

        <pre style="font-family: monospace"></pre>

    `,
    
    code: function(context) {

        var ui = context.getElement();
        var ua = context.getService("ua");

        return {

            init: function() {

                $(ui).find("pre")
                    .jqxPanel({
                        height: 300,
                        theme: "GreenDarkMetro"
                    })
                    .html('<p>'+JSON.stringify(ua, null, 4)+'</p>');
            }
        };
    }
};

