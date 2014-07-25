(function() {
  // Module:
  var app = angular.module('store', []);

  // Controllers:
  app.controller('StoreController', function() {
    this.whiskeys = whiskey;
  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(whiskey) {
      // push controller's review (user) to whiskey.reviews array
      whiskey.reviews.push(this.review);
      this.review = {};
    };
  });

  // Custom directives:
  app.directive('whiskeyInfo', function() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'whiskey-info.html'
    };
  });

  app.directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html'
    }
  });

  // JS Objects:
  var whiskey = [
    {
      name: "Blanton's Bourbon",
      price: 64.95,
      description: 'Cool stubby bottle with horse on top. Better bourbon.',
      reviews: [
        {
          stars: 5,
          quote: 'This is one of my favorite bourbons ever. And that decagonal bottle is pretty cool. Collect them all!',
          author: 'Mark Palfreeman'
        }
      ],
      canPurchase: true,
      soldOut: false
    },
    {
      name: "Angel's Envy",
      price: 75,
      description: 'Cooler bottle with wings. 80-proof bourbon finished in sherry casks. Smooth like butter.',
      reviews: [
        {
          stars: 4,
          quote: 'Awesome whiskey! Like, those angels must be envious.',
          author: 'Mark Palfreeman'
        },
        {
          stars: 4.5,
          quote: 'Whoa. This is... great.',
          author: 'Guy'
        }
      ],
      canPurchase: false,
      soldOut: true
    }
  ];

})();


