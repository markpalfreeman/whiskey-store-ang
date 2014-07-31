(function() {
  // App 'Store' sub-module:
  var app = angular.module('store-products', [ ]);

  app.directive('whiskeyInfo', function() {
    return {
      restrict: 'E',
      templateUrl: 'whiskey-info.html'
    };
  });

  app.directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller:function(){
        this.tab = 1;

        this.selectTab = function(setTab) {
          this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    };
  });
})();
