// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("bread");
var meatChooser = document.getElementById("meat");
var cheeseChooser = document.getElementById("cheese");
var condimentsChooser = document.getElementById("condiments");
var veggiesChooser = document.getElementById("veggies");
var displayOrder = document.getElementById("results");
var meatToppingPrice = 0;
var breadToppingPrice = 0;
var veggieToppingPrice = 0;
var condimentsToppingPrice = 0;
var cheeseToppingPrice = 0;

displayOrder.innerHTML += " Your order:";
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", function(event) {
    // Get the value chosen from the DOM
    selectedTopping = event.target.value;

    SandwichMaker.addMeat(selectedTopping);
    // Add the topping to the SandwichMaker to increase the total price
    SandwichMaker.addTopping(SandwichMaker.getMeatToppingPrice());
    displayOrder.innerHTML += selectedTopping + " " + SandwichMaker.getMeatToppingPrice() + "<br>";
});
breadChooser.addEventListener("change", function(event) {
    // Get the value chosen from the DOM
    selectedTopping = event.target.value;

    SandwichMaker.addBread(selectedTopping);
    // Add the topping to the SandwichMaker to increase the total price
    SandwichMaker.addTopping(SandwichMaker.getBreadToppingPrice());
    displayOrder.innerHTML += selectedTopping + " " + SandwichMaker.getBreadToppingPrice() + "<br>";
});
cheeseChooser.addEventListener("change", function(event) {
    // Get the value chosen from the DOM
    selectedTopping = event.target.value;

    SandwichMaker.addCheese(selectedTopping);
    // Add the topping to the SandwichMaker to increase the total price
    SandwichMaker.addTopping(SandwichMaker.getCheeseToppingPrice());
    displayOrder.innerHTML += selectedTopping + " " + SandwichMaker.getCheeseToppingPrice() + "<br>";
});
veggiesChooser.addEventListener("change", function(event) {
    // Get the value chosen from the DOM
    selectedTopping = event.target.value;

    SandwichMaker.addVeggie(selectedTopping);
    // Add the topping to the SandwichMaker to increase the total price
    SandwichMaker.addTopping(SandwichMaker.getVeggieToppingPrice());
    displayOrder.innerHTML += selectedTopping + " " + SandwichMaker.getVeggieToppingPrice() + "<br>";
});
condimentsChooser.addEventListener("change", function(event) {
    // Get the value chosen from the DOM
    selectedTopping = event.target.value;

    SandwichMaker.addCondiments(selectedTopping);
    // Add the topping to the SandwichMaker to increase the total price
    SandwichMaker.addTopping(SandwichMaker.getCondimentsToppingPrice());
    displayOrder.innerHTML += selectedTopping + " " + SandwichMaker.getCondimentsToppingPrice() + "<br>";
});


var btn = document.getElementById("btnSpecial");
btn.addEventListener('click', function(event) {
    event.preventDefault();
    finalSandwichPrice = SandwichMaker.getTotalPrice();
    displayOrder.innerHTML += "Total:" + finalSandwichPrice;

});
