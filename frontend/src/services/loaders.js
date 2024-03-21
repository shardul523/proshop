export async function productsLoader() {
  const response = await fetch("/api/v1/products");
  const { status, data } = await response.json();

  if (status !== "success") return null;

  return data.products;
}

export async function productLoader(productId) {
  const response = await fetch(`/api/v1/products/${productId}`);

  const { status, data } = await response.json();

  if (status !== "success") return null;

  return data.product;
}
