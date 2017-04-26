// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

    // Private variable to store the different condiments prices
    var condimentsPrices = {
        Mayonaise: 1,
        Mustard: 2
    };

    // Augment the original object with another method
    maker.addCondiments = function(pick) {
        if (pick in condimentsPrices) {
            condimentsToppingPrice = condimentsPrices[pick];
        }
    };
    maker.getCondimentsToppingPrice = function() {
        return condimentsToppingPrice;
    };
    // Return the new, augmented object with the new method on it
    return maker;
})(SandwichMaker || {});
