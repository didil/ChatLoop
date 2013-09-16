ChatLoop.Views.MessagesIndex = Backbone.Marionette.CollectionView.extend({
    id: "messages",
    initialize: function () {
        this.collection.on("reset", this.refresh, this);
        this.fetch_messages();
        this.startSse();
    },
    fetch_messages: function () {
        this.collection.fetch();
    },
    scrollToBottom: function () {
        $("#messages").slimScroll({ scrollTo: $("#messages_list").height() });
    },
    startSse: function () {
        var that = this;
        var url = '/api/stream/messages?room_id=' + this.collection.room_id + '&user_id=' + $.cookie('user_id');
        var source = new EventSource(url);
        source.addEventListener('messages.refresh', function (e) {
            console.log(e.data);
            var messages = $.parseJSON(e.data);
            that.collection.reset(messages);
        });
    },
    refresh: function () {
        this.render();
        this.scrollToBottom();
    }
});