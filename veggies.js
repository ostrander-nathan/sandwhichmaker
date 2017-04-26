// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

    // Private variable to store the different veggie prices
    var veggiePrices = {
        Onions: 1,
        Pickles: 2,
        Lettuce: 3,
        Peppers: 4
    };
    // Augment the original object with another method
    maker.addVeggie = function(pick) {
        if (pick in veggiePrices) {
            veggieToppingPrice = veggiePrices[pick];
        }
    };
    maker.getVeggieToppingPrice = function() {
        return veggieToppingPrice;
    };
    // Return the new, augmented object with the new method on it
    return maker;
})(SandwichMaker || {});
