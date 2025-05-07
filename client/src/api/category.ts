import { Category } from "@/types/category";
import axiosInstance from "./axios";

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await axiosInstance.get("/categories");

  return response.data;
};
