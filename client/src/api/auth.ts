import { LoginPayload, RegisterPayload, User } from "@/types/auth";
import axiosInstance from "./axios";

export const fetchUserApi = async (): Promise<User> => {
  return axiosInstance
    .get("/users/fetch")
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const loginApi = async ({
  email,
  password,
}: LoginPayload): Promise<{}> => {
  return axiosInstance
    .post("/users/login", { email, password })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const registerApi = async ({
  email,
  password,
  full_name,
}: RegisterPayload): Promise<{}> => {
  return axiosInstance
    .post("/users", { email, password, full_name })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
