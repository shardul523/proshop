import axios from "axios";

import { BASE_URL, PRODUCTS_BASE } from "./constants.json";

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

export async function deleteProduct(productId) {
  try {
    await axios.delete(`${BASE_URL}/${PRODUCTS_BASE}/${productId}`);
  } catch (err) {
    console.error(err);
    throw new Error(err.message || err.error);
  }
}

export async function createNewProduct(data) {
  try {
    await axios.post(`${BASE_URL}/${PRODUCTS_BASE}`, data);
  } catch (err) {
    console.error(err);
    throw new Error(err.message || err.error);
  }
}

export async function updateProduct(productId, details) {
  try {
    await axios.patch(`${BASE_URL}/${PRODUCTS_BASE}/${productId}`, details);
  } catch (err) {
    console.error(err);
    throw new Error(err.message || err.error);
  }
}
