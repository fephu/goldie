import axiosInstance from "@/api/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axiosInstance.get("/users/fetch");

  return response.data;
});
