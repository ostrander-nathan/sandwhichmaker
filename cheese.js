// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

    // Private variable to store the different cheese prices
    var cheesePrices = {
        American: 1,
        Swiss: 2
    };

    // Augment the original object with another method
    maker.addCheese = function(pick) {
        if (pick in cheesePrices) {
            cheeseToppingPrice = cheesePrices[pick];
        }
    };
    maker.getCheeseToppingPrice = function() {
        return cheeseToppingPrice;
    };

    // Return the new, augmented object with the new method on it
    return maker;
})(SandwichMaker || {});
