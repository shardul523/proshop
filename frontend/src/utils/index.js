export function storeLocalCart(state) {
  localStorage.setItem("state", JSON.stringify(state));
}

export function decimalFormatter(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}
