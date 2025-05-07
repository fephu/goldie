import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import AppRouter from "./router/AppRouter";
import { fetchUserRequest } from "./store/slices/authSlice";
import { Toaster } from "sonner";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, []);

  return (
    <>
      <Toaster richColors />
      <AppRouter />
    </>
  );
};

export default App;
