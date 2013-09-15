ChatLoop.Models.Room = Backbone.Model.extend({
    urlRoot: "/api/rooms",
    validate: function (attrs,options) {
        if(!$.trim(attrs.name)){
            return "Room name can't be blank";
        }
    }

});
