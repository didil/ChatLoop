ChatLoop.Routers.Rooms = Backbone.Router.extend({
    routes: {
        "": "index",
        "rooms/:name": "show"
    },
    initialize: function () {
        this.room = new ChatLoop.Models.Room({name: "Main" });
    },
    index: function () {
        ChatLoop.sign_out();
        var view = new ChatLoop.Views.RoomsIndex({model: this.room});
        $('#app').html(view.render().el);
    },
    show: function (name) {
        var room = new ChatLoop.Models.Room({name: name});
        room.save(null, {success: function () {
            $.jGrowl("Welcome to the room: " + name);

            var layout = new ChatLoop.Views.RoomsLayout(room);
            layout.render_all();
        }});
    }
});
