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

  // JS Objects:
  var whiskey = [
    {
      name: "Blanton's Bourbon",
      price: 64.95,
      description: 'Cool stubby bottle with horse on top. Better bourbon.',
      review: '"This is one of my favorite bourbons ever. And that decagonal bottle is pretty cool. Collect them all!" -Mark Palfreeman',
      canPurchase: true,
      soldOut: false
    },
    {
      name: "Angel's Envy",
      price: 75,
      description: 'Cooler bottle with wings. 80-proof bourbon finished in sherry casks. Smooth like butter.',
      review: '"Awesome whiskey! Like, those angels must be envious." -Mark Palfreeman',
      canPurchase: false,
      soldOut: true
    }
  ];

})();


