ChatLoop.Models.Room = Backbone.Model.extend({

    validate: function () {
        return $.trim(this.get("name"));
    }

});
