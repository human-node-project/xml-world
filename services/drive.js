
jeda.service.drive = {

    code: function(app) {

        var drive = {};

        return {

            createInstance: function(options) {
                if (!drive[options.name]) {
                    drive[options.name] = true;
                    return localforage.createInstance(options);
                }
                else throw Error("Drive name collision");
            }
        }
    }
};

