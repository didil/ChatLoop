ChatLoop.Views.RoomsIndex = Backbone.View.extend({
    template: HandlebarsTemplates['rooms/index'],

    events: {
        "submit": "submit",
        "change #name": "set_name"
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        this.$el.css({
            "margin-top": ($(window).height() - this.$el.outerHeight()) / 4
        });
        return this;
    },
    set_name: function () {
        this.model.set({name: $("#name").val()});
    },
    submit: function (e) {
        e.preventDefault();
        if (this.model.validate()) {
            $("#select_room_container").animate({ "margin-left": "-=1000px" }, {duration: 1000, complete: function(){
                this.parent().remove();
            } });
            Backbone.history.navigate("rooms/" + this.model.get('name'), true);
        }
        else {
            $.jGrowl("Please enter a room name", { sticky: true, header: 'No Entry' });
        }
    }
})
;