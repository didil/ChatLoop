ChatLoop.Views.RoomsLayout = Backbone.Marionette.Layout.extend({
    el: "#app",
    template: HandlebarsTemplates['rooms/layout'],
    regions: {
        "messagesList": "#messages_list",
        "usersList": "#users_list",
        "newMessage": "#new_message"
    },
    initialize: function (room) {
        this.room = room;
        this.on("newMessage", this.refreshMessagesAndInput, this);
    },
    render_all: function () {
        this.render();
        this.build_messages_list();
        this.build_message_input();
        this.build_users_list();
    },
    build_messages_list: function () {
        var layout = this;
        var messages = new ChatLoop.Collections.Messages(this.room.get("id"));
        messages.fetch({ success: function () {
            var messagesIndexView = new ChatLoop.Views.MessagesIndex({
                collection: messages,
                itemView: ChatLoop.Views.MessagesShow
            });
            layout.messagesList.show(messagesIndexView);
        } });
    },
    build_message_input: function () {
        var newMessage = new ChatLoop.Models.Message({room_id: this.room.get("id")});
        var messagesNewView = new ChatLoop.Views.MessagesNew({parentLayout: this, model: newMessage});
        this.newMessage.show(messagesNewView);
        $("#message_content").focus();
    },
    build_users_list: function () {

    },
    refreshMessagesAndInput: function(){
        this.build_messages_list();
        this.build_message_input();
    }

});