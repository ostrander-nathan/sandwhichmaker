// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
  // Private variable to store the different meat prices
  var breadPrices = {
    White: 1,
  	Wheat: 2,
  	Sourdough: 3
  };
  // Augment the original object with another method
  maker.addBread = function(pick) {
    if (pick in breadPrices) {
      breadToppingPrice = breadPrices[pick];
    }
  };
  maker.getBreadToppingPrice = function() {
    return breadToppingPrice;
  };
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});