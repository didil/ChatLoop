ChatLoop.Collections.Users = Backbone.Collection.extend({

    model: ChatLoop.Models.User,
    initialize: function (room_id) {
        this.room_id = room_id;
    }

});
