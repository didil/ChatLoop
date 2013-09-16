ChatLoop.Views.RoomsIndex = Backbone.View.extend({
    template: HandlebarsTemplates['rooms/index'],

    events: {
        "submit": "submit"
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        this.$el.css({
            "margin-top": ($(window).height() - this.$el.outerHeight()) / 4
        });
        return this;
    },
    submit: function (e) {
        e.preventDefault();
        this.model.set({name: $("#room_name").val()});
        var usermodel = new ChatLoop.Models.User({name: $("#nickname").val()});

        if (!usermodel.isValid()) {
            $.jGrowl("Please enter a nickname", { life: 8000, header: 'No Entry' });
            return;
        }
        else {
            usermodel.save(null, {success: function () {
                $.cookie('user_id', usermodel.get("id"));
            }});
        }

        if (this.model.isValid()) {
            $("#select_room_container").animate({ "margin-left": "-=1000px" }, {duration: 1000 });
            Backbone.history.navigate("rooms/" + this.model.get('name'), true);
        }
        else {
            $.jGrowl("Please enter a room name", { life: 8000, header: 'No Entry' });
        }
    }
})
;
