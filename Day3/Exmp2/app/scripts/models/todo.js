/*global Exmp2, Backbone*/

Exmp2.Models = Exmp2.Models || {};

(function () {
  'use strict';

  Exmp2.Models.Todo = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
