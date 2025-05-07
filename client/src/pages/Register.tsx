import Wrapper from "@/components/Wrapper";
import loginImg from "@/assets/megamenucolsliderimg1.png";
import { Link, useNavigate } from "react-router";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { registerRequest } from "@/store/slices/authSlice";
import { ChevronLeft } from "lucide-react";
import { toast } from "sonner";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, isLoading, authenticated } = useAppSelector(
    (state) => state.auth
  );

  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleFullName = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFullName(e.target.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerRequest({ email, full_name: fullName, password }));
    navigate("/login");
  };

  if (error) {
    toast.error(error);
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
          <div className="text-5xl tracking-tighter">
            Create a GOLDIE account
          </div>

          <div className="mt-2">
            Already have an account?{" "}
            <Link to={"/login"} className="underline">
              Login
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="px-10 text-left">
            <div className="mt-4 flex flex-col gap-1">
              <label htmlFor="">full name</label>
              <input
                className="border h-9 rounded-sm px-4"
                value={fullName}
                onChange={handleFullName}
              />
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <label htmlFor="">email</label>
              <input
                className="border h-9 rounded-sm px-4"
                type="email"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="mt-4 flex flex-col gap-1">
              <label htmlFor="">password</label>
              <input
                className="border h-9 rounded-sm px-4"
                type="password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <Button className="mt-4" type="submit">
              register
            </Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
