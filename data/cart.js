export const cart = [];

export function addToCart(productId) {
  //here cartItem is an object(in cart) containing productId and quantity in cart
  //matchingItem is a variable that store the productId if it is present in cart
  let matchingItem;
  cart.forEach((cartItem) => {
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
    cart.push({
      productId: productId,
      quantity: 1
    })
  }
}