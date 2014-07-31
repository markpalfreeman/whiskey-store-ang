(function() {
  // App 'Store' Module (dependent on store-products)
  var app = angular.module('store', ['store-products']);

  // Controllers:
  app.controller('StoreController', ['$http', function($http) {
    var store = this;
    store.whiskeys = [];

    // Get products using AJAX (JSON) rather than storing as JS objects
    $http.get('products.json').success(function(data) {
      store.whiskeys = data;
    });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(whiskey) {
      // push controller's review (user) to whiskey.reviews array
      whiskey.reviews.push(this.review);
      this.review = {};
    };
  });
})();
