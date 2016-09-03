// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
  // Private variable to store the different meat prices
  var meatPrices = {
  	Turkey: 1,
  	Ham: 2,
  	Tuna: 3
  };
  // Augment the original object with another method
  maker.addMeat = function(pick) {
    if (pick in meatPrices) {
      meatToppingPrice = meatPrices[pick];
    }
  };
  maker.getMeatToppingPrice = function() {
    return meatToppingPrice;
  };
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});