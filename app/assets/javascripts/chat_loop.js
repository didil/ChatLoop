window.ChatLoop = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    start: function () {
        new ChatLoop.Routers.Rooms();
        Backbone.history.start({pushState: true});
    },
    resizeSections: function () {
        $('#main .container').css({'height': ($("#main").height() - $("#footer").height()) + 'px'});
        $('#messages_list').css({'height': ($("#main .container").height() - $("#new_message").height()) + 'px'});
        $('#messages').slimScroll({height: 'auto', alwaysVisible: true, start: "bottom"});
        $('#users_list .panel-body').css({'height': ($("#main .container").height() - $("#new_message").outerHeight() - $("#users_list .panel-heading").outerHeight()) + 'px'});
        $('#users').slimScroll({height: 'auto', alwaysVisible: true, start: "bottom"});
    }, sign_out: function () {
        $.post("/api/users/sign_out", {user_id: $.cookie("user_id")});
    }
};

$(document).ready(function () {
    ChatLoop.start();
    ChatLoop.resizeSections();

    $(window).resize(function () {
        ChatLoop.resizeSections();
    });
    window.onbeforeunload = function () {
        ChatLoop.sign_out();
    };
});
