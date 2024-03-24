export function storeLocalCart(cart) {
  localStorage.setItem("cart", JSON.stringify({ cart }));
}

export function decimalFormatter(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}
