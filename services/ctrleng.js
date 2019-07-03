

jeda.service.ctrleng = {

    code: function(app) {

        var parse = function(input) {

            return {
                "subject": "this function",
                "verb": "returns",
                "object": "a JSON representation of: "+input
            }
        }

        var generate = function(tree) {

            return tree.subject+' '+tree.verb+' '+tree.object;
        }

        return {

            parse: parse,
            generate: generate
        }
    }
};

