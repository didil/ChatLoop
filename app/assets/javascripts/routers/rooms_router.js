ChatLoop.Routers.Rooms = Backbone.Router.extend({
    routes: {
        "": "index",
        "rooms/:name": "show"
    },
    initialize: function () {
        this.room = new ChatLoop.Models.Room({name: "Main" });
    },
    index: function () {
        view = new ChatLoop.Views.RoomsIndex({model: this.room});
        $('#app').html(view.render().el);
    },
    show: function (name) {
        $.jGrowl("Welcome to " + name);
    }
});
