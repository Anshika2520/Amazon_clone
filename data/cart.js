export let cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
  }];

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

export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId != productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
}