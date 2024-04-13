import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import {
  createNewProduct,
  deleteProduct,
  productLoader,
  productsLoader,
  updateProduct,
} from "../services/productsApi";
import { api } from "../utils";
import { BASE_URL } from "../services/constants.json";

export function useAllProducts() {
  const { data: allProducts, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: productsLoader,
  });
  return { allProducts, isPending };
}

export function useProduct(productId) {
  const {
    data: product,
    isPending,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => productLoader(productId),
  });

  return { product, isPending, isError, isFetching };
}

export function useProductDelete(productId) {
  const queryClient = useQueryClient();
  const { mutate: productDelete, isPending } = useMutation({
    mutationFn: () => deleteProduct(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      toast.success("Product Deleted");
    },
    onError: () => {
      toast.error("Product could not be deleted");
    },
  });

  return { productDelete, isPending };
}

export function useProductCreate() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: createProduct, isPending } = useMutation({
    mutationFn: createNewProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      navigate("/admin/products");
      toast.success("Product Created");
    },
    onError: () => {
      toast.error("Product could not be created");
    },
  });

  return { createProduct, isPending };
}

export function useProductUpdate(productId) {
  const queryClient = useQueryClient();
  const { mutate: productUpdate, isPending } = useMutation({
    mutationFn: (details) => updateProduct(productId, details),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["product", productId],
      });
      toast.success("Product Updated successfully");
    },
    onError: () => {
      toast.error("Product could not be updated. Try again.");
    },
  });

  return { productUpdate, isPending };
}

export const useProductReviews = (productId) => {
  const [method, url] = ["GET", `${BASE_URL}/products/${productId}/reviews`];
  const { data, isPending, isFetching } = useQuery({
    queryKey: ["reviews", productId],
    queryFn: () => api(method, url),
  });

  const reviews = data?.reviews;

  return { reviews, isPending, isFetching };
};

export const useAddProductReview = (productId) => {
  const [method, url] = ["POST", `${BASE_URL}/products/${productId}/reviews`];

  const queryClient = useQueryClient();

  const { mutate: addProduct, isPending } = useMutation({
    mutationFn: (details) => api(method, url, details),
    onSuccess: () => {
      toast.success("Review posted");
      queryClient.invalidateQueries({
        queryKey: ["reviews", productId],
      });
    },
    onError: () => toast.error("Review could not be posted"),
  });

  return { addProduct, isPending };
};
