ChatLoop.Views.RoomsIndex = Backbone.View.extend({
    template: HandlebarsTemplates['rooms/index'],

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        this.$el.css({
            "margin-top": ($(window).height() - this.$el.outerHeight())/4
        });
        return this;
    }
});
