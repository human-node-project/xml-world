
jeda.module.mod11 = {

    name: "CtrlEng service test",

    html: `

        <p>Input:</p>
        <input type="text">
        <br>
        <p>Parsed from input:</p>
        <pre class="json"></pre>
        <p>Generated from parsed:</p>
        <pre class="generated"></pre>

    `,
    
    code: function(context) {

        var ui = context.getElement();
        var ctrleng = context.getService("ctrleng");

        return {

            init: function() {

                $(ui).find("input").jqxInput({
                    theme: "GreenDarkMetro"
                });
            },

            onchange: function(e) {

                var parsed = ctrleng.parse(e.args.value);
                $(ui).find(".json").html(JSON.stringify(parsed, null, 4));
                $(ui).find(".generated").html(ctrleng.generate(parsed));
            }
        };
    }
};

