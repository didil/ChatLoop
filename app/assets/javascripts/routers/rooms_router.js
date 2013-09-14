ChatLoop.Routers.Rooms = Backbone.Router.extend({
    routes: {
        "": "index",
        "rooms/:name": "show"
    },
    initialize: function () {
        this.room = new ChatLoop.Models.Room({name: "Main" });
    },
    index: function () {
        var view = new ChatLoop.Views.RoomsIndex({model: this.room});
        $('#app').html(view.render().el);
    },
    show: function (name) {
        $.jGrowl("Welcome to " + name);
        var room = new ChatLoop.Models.Room({name: name});
        room.save();
        var layout = new ChatLoop.Views.RoomsLayout();
        layout.render();

        var messages = new ChatLoop.Collections.Messages();
        messages.fetch({data: {room_id: room.get("id") }});

        var messagesIndexView = new ChatLoop.Views.MessagesIndex({collection: messages});

        layout.messagesList.show(messagesIndexView);
    }
});
