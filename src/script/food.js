const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.order.push(meal)
    },
    order:[],
    getOrder: function () {
        return this.order;
        
    }
        
    }

const chickenComboMeal = {
        sandwich: "chicken Sandwich",
        firies: true,
        drink: "big"
    }
 const beefComboMeal = {
        sandwich: "Beef Sandwich",
        firies: false,
        drink: "small"
    }
    const fishComboMeal = {
        sandwich: "fish Sandwich",
        firies: true,
        drink: "large"
    }

//restaurant.placeOrder()
// Invoke the function to return the list of all orders
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(beefComboMeal)
restaurant.placeOrder(fishComboMeal)



// Output all orders to the console using console.table()
console.table(restaurant.getOrder())