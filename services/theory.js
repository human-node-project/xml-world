
jeda.service.logic = {

    code: function(app) {

        return {
            Theory: function() {
                this.or = logic.or,
                this.and = logic.and,
                this.implies = logic.implies,
                this.eq = logic.eq,
                this.run = logic.run,
                this.lvar = logic.lvar,
                this.between = logic.between;
                this.win = logic.win;
                this.fail = logic.fail;
                this.add = logic.add;
                this.sub = logic.sub;
                this.mul = logic.mul;
                this.div = logic.div;
            }
        };
    }
};

