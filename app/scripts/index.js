var $ = require('jquery');

var models = require('./models');

var posts = new models.PostCollection();

$('.loading-btn').on('click', function(){
  $('.loading-btn').text("Loading");
  posts.fetch().done(function(){
    console.log(posts.models);
    $('.loading-btn').text("Submit");
  });
});
