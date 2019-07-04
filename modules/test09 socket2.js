
jeda.module.mod9 = {

    name: "Bodycom",

    html: `

        <div>
            <pre id="socket-log2"></pre><br>
            <input autocomplete="off" value="Type here..."></input>
        </div>
  
    `,
    
    code: function(context) {

        var ui = context.getElement();
        var slog = $(ui).find("#socket-log2");
        var bodycom = context.getService("bodycom").create({
            onopen: function()  {slog.append('[*] open<br>');},
            onmessage: function(e) {slog.append('[.] received '+e.data+'<br>');},
            onclose: function()  {slog.append('[*] close<br>');}
        });


        return {

            init: function() {

                var inp = $(ui).find("input");
                inp.jqxInput({ placeHolder: "Enter a message", height: 25, width: 200, minLength: 1, theme: "GreenDarkMetro" });
        
                inp.on("change", function(e) {
                    if (inp.val() != '') {
                        slog.append('[ ] sending '+inp.val()+'<br>');
                        bodycom.send(JSON.parse(inp.val()));
                        inp.val('');
                    }
                    return false;
                });
        
            }
        };
    }
};

