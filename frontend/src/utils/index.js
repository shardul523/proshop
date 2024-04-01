export function storeLocalCart(state) {
  localStorage.setItem("state", JSON.stringify(state));
}

export function decimalFormatter(num) {
  return +(Math.round(num * 100) / 100).toFixed(2);
}

export function isValidShippingAddress(shippingAddress) {
  if (!shippingAddress) return false;

  const { address, city, state, country, postalCode } = shippingAddress;

  if (!address || !city || !state || !country || !postalCode) return false;

  return true;
}

export function isValidPaymentMethod(paymentMethod) {
  if (!paymentMethod) return false;

  const methods = ["PayPal", "NetBanking"];

  if (methods.includes(paymentMethod)) return true;

  return false;
}

export function getFullAddress(shippingAddress) {
  const { address, city, state, country, postalCode } = shippingAddress;

  return `${address}, ${city}, ${state}, ${country} - ${postalCode}`;
}
