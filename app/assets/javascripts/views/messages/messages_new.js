ChatLoop.Views.MessagesNew = Backbone.Marionette.ItemView.extend({
    template: HandlebarsTemplates['messages/new'],
    events: {
        "submit": "submit"
    },
    initialize: function () {
        this.model.on("sync", this.notifyNewMessage, this);
    },
    submit: function (e) {
        e.preventDefault();
        this.model.set({content: $("#message_content").val(), user_id: $.cookie('user_id') });
        this.model.save();
    },
    notifyNewMessage: function () {
        this.trigger("newMessage");
    }
});
