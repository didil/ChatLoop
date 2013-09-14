ChatLoop.Views.RoomsLayout = Backbone.Marionette.Layout.extend({
    el: "#app",
    template: HandlebarsTemplates['rooms/layout'],
    regions: {
        "messagesList": "#messages_list",
        "usersList": "#users_list",
        "newMessage": "#new_message"
    }
});