import { Link } from "react-router";
import Wrapper from "./Wrapper";
import { Button, buttonVariants } from "./ui/button";
import logoImg from "@/assets/favicon.webp";

const Footer = () => {
  return (
    <Wrapper>
      <div className="flex w-full items-center justify-between py-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <img src={logoImg} alt="" className="w-1/3" />
            <div className="flex flex-col items-start">
              <Link
                to={"/shop-all"}
                className={buttonVariants({
                  variant: "link",
                  className: "h-fit text-xs",
                })}
              >
                SHOP ALL
              </Link>
              <Link
                to={"/about"}
                className={buttonVariants({
                  variant: "link",
                  className: "h-fit text-xs",
                })}
              >
                ABOUT
              </Link>
              <Link
                to={"/admin"}
                className={buttonVariants({
                  variant: "link",
                  className: "h-fit text-xs",
                })}
              >
                ADMIN
              </Link>
            </div>
          </div>

          <div className="text-sm">2020 Goldie. All Rights Reserved.</div>
        </div>

        <div className="max-w-md w-full pl-10 flex flex-col gap-1">
          <h1 className="tracking-tighter">SUBSCRIBE TO OUR NEWSLETTER</h1>
          <span className="text-sm">
            Stay up to date to our latest news regarding exclusive collections,
            previews and sales Email Subsc
          </span>

          <div className="flex items-center gap-2">
            <input className="border px-2 h-8 rounded-sm" placeholder="email" />
            <Button className="" size={"sm"}>
              SUBCRIBE
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
