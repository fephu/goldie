import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import CardProduct from "./CardProduct";
import img1 from "@/assets/collections/temporary/1.webp";
import img2 from "@/assets/collections/temporary/2.webp";
import img3 from "@/assets/collections/temporary/3.webp";
import img4 from "@/assets/collections/temporary/4.jpg";
import img5 from "@/assets/collections/temporary/5.webp";
import img6 from "@/assets/collections/temporary/6.webp";

const NewArrivalsCarousel = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem className="basis-1/2 lg:basis-1/3">
          <CardProduct
            imgSrc={img1}
            name="TMPRARY BB SATIN SILK SHIRT"
            price="1,490,000"
          />
        </CarouselItem>

        <CarouselItem className="basis-1/2 lg:basis-1/3">
          <CardProduct
            imgSrc={img2}
            name="TMPRARY BB SATIN SILK SHIRT"
            price="1,490,000"
          />
        </CarouselItem>

        <CarouselItem className="basis-1/2 lg:basis-1/3">
          <CardProduct
            imgSrc={img3}
            name="TMPRARY BB SATIN SILK SHIRT"
            price="1,490,000"
          />
        </CarouselItem>

        <CarouselItem className="basis-1/2 lg:basis-1/3">
          <CardProduct
            imgSrc={img4}
            name="TMPRARY BB SATIN SILK SHIRT"
            price="1,490,000"
          />
        </CarouselItem>

        <CarouselItem className="basis-1/2 lg:basis-1/3">
          <CardProduct
            imgSrc={img5}
            name="TMPRARY BB SATIN SILK SHIRT"
            price="1,490,000"
          />
        </CarouselItem>

        <CarouselItem className="basis-1/2 lg:basis-1/3">
          <CardProduct
            imgSrc={img6}
            name="TMPRARY BB SATIN SILK SHIRT"
            price="1,490,000"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious variant={"ghost"} />
      <CarouselNext variant={"ghost"} />
    </Carousel>
  );
};

export default NewArrivalsCarousel;
