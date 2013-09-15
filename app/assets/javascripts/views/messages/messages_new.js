ChatLoop.Views.MessagesNew = Backbone.Marionette.ItemView.extend({
    template: HandlebarsTemplates['messages/new'],
    events: {
        "submit": "submit"
    },
    initialize: function (options) {
        this.parentLayout = options.parentLayout;
        this.model = options.model;

        this.model.on("sync", this.notifyNewMessage, this);
    },
    submit: function (e) {
        e.preventDefault();
        this.model.set({content: $("#message_content").val() });
        this.model.save();
    },
    notifyNewMessage: function () {
        this.parentLayout.trigger("newMessage");
    }
});
