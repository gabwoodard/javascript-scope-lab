// Step 1: Variable Data (global scope)
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Step 2: Function and Block
function addBurger() {
  const newBurger = 'Flatburger';
  burgers.push(newBurger);
}

// Step 3: Variable Declaration and Scope
if(true){
  const anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);
}

function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}

module.exports = { burgers, featuredDrink, addBurger, changeFeaturedDrink };
