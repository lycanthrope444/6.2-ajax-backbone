var $ = require('jquery');
var Backbone = require('backbone');

var Post = Backbone.Model.extend({
  defaults:{
    name : "name",
    type : "type",
    ingredient: "cheese"
  },
  nukeSelf : function(){
    this.remove();
    console.log("i died");
  }
});

var PostCollection = Backbone.Collection.extend({
  model: Post,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/pizza"
});

module.exports = {
  'Post' : Post,
  'PostCollection' : PostCollection
};
