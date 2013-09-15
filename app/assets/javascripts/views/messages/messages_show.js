ChatLoop.Views.MessagesShow = Backbone.Marionette.ItemView.extend({
    tagName: "li",
    className: "message",
    template: HandlebarsTemplates['messages/show']
});
