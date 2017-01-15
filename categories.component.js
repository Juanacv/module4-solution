(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'src/categorieslist.template.html',
  bindings: {
    items: '<'
  }
});

})();