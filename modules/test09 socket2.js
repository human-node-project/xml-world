
jeda.module.mod9 = {

    name: "Socket 2",

    html: `

        <h1>Socket test 2</h1>

        <div>
            <pre id="socket-log2"></pre><br>
            <input autocomplete="off" value="Type here..."></input>
        </div>
  
    `,
    
    code: function(context) {

        var ui = context.getElement();
        var socket = context.getService("socket").create();


        return {

            init: function() {

                var inp = $(ui).find("input");
                var slog = $(ui).find("#socket-log2");
                inp.jqxInput({ placeHolder: "Enter a message", height: 25, width: 200, minLength: 1, theme: "GreenDarkMetro" });

                socket.onopen    = function()  {slog.append('[*] open '+socket.protocol+'<br>');};
                socket.onmessage = function(e) {slog.append('[.] received '+e.data+'<br>');};
                socket.onclose   = function()  {slog.append('[*] close<br>');};
        
                inp.on("change", function(e) {
                    if (inp.val() != '') {
                        slog.append('[ ] sending '+inp.val()+'<br>');
                        socket.send(inp.val());
                        inp.val('');
                    }
                    return false;
                });
        
            }
        };
    }
};

