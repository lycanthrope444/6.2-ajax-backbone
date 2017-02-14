var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var models = require('./models');
var pizzaTemplate = require('./templates/items.hbs');

var posts = new models.PostCollection();

$('.loading-btn').on('click', function(){
  $('.loading-btn').text("Loading");
  posts.fetch().done(function(data){
    console.log(data);
    $('.loading-btn').text("Submit");
    _.each(data, function(item){
      $('.pizza-place').append(pizzaTemplate(item));
      $('#'+item._id).on('click', function(){
        console.log(item._id);
        var nukeId = item._id;
        console.log(posts);
        posts.remove([{ _id : "" + nukeId }] );
        console.log(posts);
      });
    });
  });
});

$('.create-btn').on('click', function(event){
  event.preventDefault();
  console.log($('#'));
});
