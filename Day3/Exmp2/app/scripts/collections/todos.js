/*global Exmp2, Backbone*/

Exmp2.Collections = Exmp2.Collections || {};

(function () {
  'use strict';

  Exmp2.Collections.Todos = Backbone.Collection.extend({

    model: Exmp2.Models.Todos

  });

})();
