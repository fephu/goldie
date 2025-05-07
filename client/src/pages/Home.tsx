import Wrapper from "@/components/Wrapper";
import bottomImg from "@/assets/bottom.jpg";
import Navbar from "@/components/Navbar";
import NewArrivalsCarousel from "@/components/products/NewArrivalsCarousel";

const Home = () => {
  return (
    <>
      <Navbar />

      <Wrapper>
        <div className="py-8">
          <span className="px-1 tracking-tighter">NEW ARRIVALS</span>
          <NewArrivalsCarousel />
        </div>

        <div className="py-8 grid grid-cols-3">
          <img src={bottomImg} alt="" />
          <img src={bottomImg} alt="" />
          <img src={bottomImg} alt="" />
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
