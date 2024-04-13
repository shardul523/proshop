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
