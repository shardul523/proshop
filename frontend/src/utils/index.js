export function storeLocalCart(cart) {
  localStorage.setItem("cart", JSON.stringify({ cart }));
}
