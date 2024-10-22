const cart = {
  cartItems: undefined,
  //loadFromStorage: function(){------>instead of this, use below short-hand 
  loadFromStorage() {
    cart.cartItems = JSON.parse(localStorage.getItem('cart-oop'));
   // in place of cart.cartItems, use this.cartItems so that if the object name 'cart' get changed , still the code can run  
    if (!this.cartItems) {
      //'this' is used to access inside the object
      this.cartItems = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
      }];
    }
  },


  
 saveToStrorage() {
  localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
  },
 
 
   addToCart(productId) {
    //here cartItem is an object(in cart) containing productId and quantity in cart
    //matchingItem is a variable that store the productId if it is present in cart
    let matchingItem;
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    //if matchingItem is already present in cart, then increase quantity by 1
    if (matchingItem) {
      matchingItem.quantity += 1;
    }
    else {
      // push the productId and quantity as an object into the cart array
      this.cartItems.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: '1'
      })
    }
    this.saveToStrorage();
  },
   
   
  removeFromCart(productId) {
    const newCart = [];
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId != productId) {
        newCart.push(cartItem);
      }
    });
    this.cartItems = newCart;
    this.saveToStrorage();
  },


  
updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;
  this.cartItems.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  matchingItem.deliveryOptionId = deliveryOptionId;
  this.saveToStrorage();
}
};
cart.loadFromStorage();

console.log(cart);