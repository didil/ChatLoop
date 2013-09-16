ChatLoop.Models.User = Backbone.Model.extend({
    urlRoot: "/api/users",
    validate: function (attrs,options) {
        if(!$.trim(attrs.name)){
            return "Nickname can't be blank";
        }
    }
});
