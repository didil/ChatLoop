ChatLoop.Collections.Messages = Backbone.Collection.extend({
    url: "/api/messages",
    model: ChatLoop.Models.Message,
    initialize: function (room_id) {
        this.room_id = room_id;
    },
    fetch: function (options) {
        options = _.extend(options, {data: {room_id: this.room_id }});
        return Backbone.Collection.prototype.fetch.call(this, options);
    }
});
