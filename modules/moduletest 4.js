
jeda.module.mod4 = {

    name: "Logic service test",

    html: `

        <h1>Logic test</h1>

        <code></code>

    `,
    
    code: function(context) {

        var ui = context.getElement();
        var logic = context.getService("logic");

        return {

            init: function() {

                var theory = new logic.Theory();

                //creates two unique logic variables
                var x = theory.lvar(),
                    y = theory.lvar()

                //creates a 'goal'
                var g1 = theory.or(
                    theory.and(theory.eq(x,2), theory.eq(y,3)),
                    theory.and(theory.eq(x,y), theory.eq(y,'dog'))
                )
                
                //runs goal asking for the possible values of x and y
                $(ui).find("code")
                    .append('<p>'+JSON.stringify(theory.run(g1, x))+'</p>');
                $(ui).find("code")
                    .append('<p>'+JSON.stringify(theory.run(g1, y))+'</p>');
                $(ui).find("code")
                    .append('<p>'+JSON.stringify(theory.run(g1, [x,y]))+'</p>');
            }
        };
    }
};

