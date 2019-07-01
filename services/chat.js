

jeda.service.chat = {

    code: function(app) {

        var interpreter = function(initialReplies, errHandler) {

            this.rivescript = new RiveScript({ utf8: true });

            this.reply = function(who, what) {
                return this.rivescript.reply(who, what);
            }

            if (initialReplies) {

                this.rivescript.stream(initialReplies, errHandler);
                this.rivescript.sortReplies();
            }
        }

        interpreter.prototype.addReplies = function(replies, errHandler) {
            this.rivescript.stream(replies, errHandler);
            this.rivescript.sortReplies();
        }

        return {

            Interpreter: interpreter
        }
    }
};

