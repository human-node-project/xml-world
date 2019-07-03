
jeda.module.mod1 = {

    name: "Mom service test",

    html: `

        <h1>Message oriented middleware test</h1>
        <p>Ok</p>
        <div id='calendar'>x</div>
        <div id="log">log</div>

    `,

    code: function(context) {

        var ui;
        var mom = context.getService("mom");

        return {

            init: function() {


                var myChannel = mom.channel("Module 1");

                ui = context.getElement();

                $(ui).find("#calendar")
                    .jqxCalendar({
                        width: '250px',
                        height: '250px',
                        theme: "GreenDarkMetro"
                    })
                    .bind('valuechanged', function (event) {
                        var date = event.args.date;
                        $("#log").text(date.toDateString());

                        myChannel.pub("calendar.related", date);
                    });

            },

            messages: ["myTopic"],

            onmessage: function(topic, data) {

                if (topic === "myTopic") {

                    console.log("got "+data);
                }
            }
        }
    }
};

