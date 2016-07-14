/*global gulp-training, $*/


window.gulp-training = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');
  }
};

$(document).ready(function () {
  'use strict';
  gulp-training.init();
});
