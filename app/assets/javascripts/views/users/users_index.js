ChatLoop.Views.UsersIndex = Backbone.Marionette.CollectionView.extend({
    id: "users",
    initialize: function () {
        this.collection.on("reset", this.refresh, this);
        this.startSse();
    },
    scrollToBottom: function () {
        $("#users").slimScroll({ scrollTo: $("#users").height()  });
    },
    startSse: function () {
        var that = this;
        var url = '/api/stream/users?room_id=' + this.collection.room_id ;
        var source = new EventSource(url);
        source.addEventListener('users.refresh', function (e) {
            console.log(e.data);
            var users = $.parseJSON(e.data);
            that.collection.reset(users);
        });
    },
    refresh: function () {
        this.render();
    }
});