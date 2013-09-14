ChatLoop.Models.Message = Backbone.Model.extend({
    urlRoot: "/messages",
    validate: function (attrs,options) {
        if(!$.trim(attrs.content)){
            return "Message can't be blank";
        }
    }
});
