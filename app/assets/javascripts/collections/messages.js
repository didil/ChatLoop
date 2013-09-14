ChatLoop.Collections.Messages = Backbone.Collection.extend({
    url: "/messages",
    model: ChatLoop.Models.Message
});
