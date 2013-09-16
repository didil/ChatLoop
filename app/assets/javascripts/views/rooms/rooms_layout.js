ChatLoop.Views.RoomsLayout = Backbone.Marionette.Layout.extend({
    el: "#app",
    template: HandlebarsTemplates['rooms/layout'],
    regions: {
        "messagesListRegion": "#messages_list",
        "usersListRegion": "#users_list .panel-body",
        "newMessageRegion": "#new_message"
    },
    initialize: function (room) {
        this.room = room;
    },
    render_all: function () {
        this.render();
        this.initMessagesList();
        this.initMessageInput();
        this.initUsersList();
        ChatLoop.resizeSections();
        this.messagesIndexView.scrollToBottom();
    },
    initMessagesList: function () {
        var messages = new ChatLoop.Collections.Messages(this.room.get("id"));
        this.messagesIndexView = new ChatLoop.Views.MessagesIndex({
            collection: messages,
            itemView: ChatLoop.Views.MessagesShow
        });
        this.messagesListRegion.show(this.messagesIndexView);
    },
    initMessageInput: function () {
        var newMessage = new ChatLoop.Models.Message({room_id: this.room.get("id")});
        this.messagesNewView = new ChatLoop.Views.MessagesNew({ model: newMessage});
        this.listenTo(this.messagesNewView, "newMessage", this.refreshMessagesAndInput);
        this.newMessageRegion.show(this.messagesNewView);
        $("#message_content").focus();
    },
    initUsersList: function () {
        var users = new ChatLoop.Collections.Users(this.room.get("id"));
        this.usersIndexView = new ChatLoop.Views.UsersIndex({
            collection: users,
            itemView: ChatLoop.Views.UsersShow
        });
        this.usersListRegion.show(this.usersIndexView);
    },
    refreshMessages: function () {
        this.messagesIndexView.fetch_messages();
    },
    refreshMessagesAndInput: function () {
        this.refreshMessages();
        this.initMessageInput();
    }

});