import Wrapper from "@/components/Wrapper";
import loginImg from "@/assets/megamenucolsliderimg1.png";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link, useNavigate } from "react-router";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { loginRequest } from "@/store/slices/authSlice";
import { ChevronLeft, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading, authenticated } = useAppSelector(
    (state) => state.auth
  );
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(
        loginRequest({
          email: credentials.email,
          password: credentials.password,
        })
      );
    } catch (err: any) {
      toast.error(err);
    }
  };

  if (error) {
    toast.error(error);
  }

  if (authenticated) {
    navigate("/");
  }

  return (
    <Wrapper>
      <div className="flex py-8">
        <img src={loginImg} alt="login image" className="w-1/2" />

        <div className="px-10 py-4 text-center w-1/2">
          <Link
            to={"/"}
            className={buttonVariants({
              variant: "ghost",
            })}
          >
            <ChevronLeft />
            home
          </Link>
          <div className="text-5xl tracking-tighter">Log in to GOLDIE</div>

          <div className="mt-2">
            Don&apos;t have an account?{" "}
            <Link to={"/register"} className="underline">
              Register
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="px-10 text-left">
            <div className="mt-4 flex flex-col gap-1">
              <label htmlFor="">email</label>
              <input
                className="border h-9 rounded-sm px-4"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <label htmlFor="">password</label>
              <input
                className="border h-9 rounded-sm px-4"
                name="password"
                onChange={handleChange}
              />
            </div>
            <Button className="mt-4" type="submit">
              login
              {isLoading && <Loader2 className="animate-spin" />}
            </Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
