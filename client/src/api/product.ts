import { Product } from "@/types/product";
import axiosInstance from "./axios";

export const fetchAllProducts = async (): Promise<Product[]> => {
  return axiosInstance
    .get("/products")
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const fetchProductsByCategory = async ({
  name,
}: {
  name: string;
}): Promise<Product[]> => {
  return axiosInstance.get(`/products/${name}`);
};
