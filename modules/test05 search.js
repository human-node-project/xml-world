
jeda.module.mod5 = {

    name: "Search service test",

    html: `

        <code></code>

    `,
    
    code: function(context) {

        var ui = context.getElement();
        var search = context.getService("search");

        return {

            init: function() {

                var index = search.engine( function() {
                    this.addField("title");
                    this.addField("body");
                    this.addField("id");
                });

                var doc1 = {
                    "id": 1,
                    "title": "Oracle released its latest database Oracle 12g",
                    "body": "Yestaday Oracle has released its new database Oracle 12g, this would make more money for this company and lead to a nice profit report of annual year."
                }
                
                var doc2 = {
                    "id": 2,
                    "title": "Oracle released its profit report of 2015",
                    "body": "As expected, Oracle released its profit report of 2015, during the good sales of database and hardware, Oracle's profit of 2015 reached 12.5 Billion."
                }
                
                index.addDoc(doc1);
                index.addDoc(doc2);
                

                $(ui).find("code")
                    .append('<p>'+JSON.stringify(
                        index.search("Oracle database profit")
                    )+'</p>');
            }
        };
    }
};

