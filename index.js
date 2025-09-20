// Step 1: Variable Data (global scope)
let burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Step 2: Function and Block
function addBurger() {
  const newBurger = 'Flatburger';   // function-scoped
  burgers.push(newBurger);          // add to burgers in this order
}

// Step 3: Variable Declaration and Scope
if (true) {                         // always executes
  let anotherNewBurger = 'Maple Bacon Burger'; // block-scoped
  burgers.push(anotherNewBurger);              // then push
}

function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}

// export for tests
module.exports = { burgers, featuredDrink, addBurger, changeFeaturedDrink };
