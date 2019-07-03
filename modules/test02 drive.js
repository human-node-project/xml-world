
jeda.module.mod2 = {

    name: "Drive service test",

    html: `

        <h1>IndexDB Drive test</h1>
        <p>Inbox: <span class="inbox"></span></p>
        <div class="drive_test_log"></div>

    `,
    
    code: function(context) {

        var ui;
        var counter = 0;
        var mom = context.getService("mom");
        var drive = context.getService("drive");

        return {

            init: function() {

                ui = context.getElement();

                mom.sub(
                    "test-channel",
                    "calendar.*",
                    function(content, envelope) {
                        $(ui).find(".inbox").text("Module 2 got "+content+" from mom service");
                    }
                );
                
                
                var db = drive.createInstance({name: "foo"});
                
                $(ui).find(".drive_test_log").append('<p>saving "my value 5"');
                db.setItem("my key", "my value 5").then(function() {
                    $(ui).find(".drive_test_log").append('<p>saved "my value 5"');
                    db.getItem("my key")
                        .then(function(t) {
                            $(ui).find(".drive_test_log").append('<p>retrieved "'+t+'"</p>');    
                        })
                });
            }
        };
    }
};

