window.ChatLoop = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    start: function () {
        new ChatLoop.Routers.Rooms();
        Backbone.history.start({pushState: true});
    }
};

$(document).ready(function () {
    ChatLoop.start();
});
