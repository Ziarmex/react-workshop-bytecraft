import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import icon0 from "../../assets/Landing/Icon0.svg";
import icon1 from "../../assets/Landing/Icon1.svg";
import icon2 from "../../assets/Landing/Icon2.svg";
import icon3 from "../../assets/Landing/Icon3.svg";

export default function Programs() {
  const data = [
    {
      icon: icon0,
      text: "english",
    },
    {
      icon: icon0,
      text: "english",
    },
    {
      icon: icon0,
      text: "english",
    },
    {
      icon: icon1,
      text: "english",
    },
    {
      icon: icon2,
      text: "english",
    },
    {
      icon: icon3,
      text: "english",
    },
    {
      icon: icon0,
      text: "english",
    },
    {
      icon: icon0,
      text: "english",
    },
  ];
  return (
    <div className="flex justify-center w-full">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[80%]"
      >
        <CarouselContent className="w-[100%]">
          {data.map((elem, i) => (
            <CarouselItem key={i} className="max-w-[25%]">
              <img src={elem.icon} />
              <p>hello</p>
            </CarouselItem>
          ))}
          {/* <CarouselItem key={0}>
            <img src={icon0} />
            <p>hello</p>
          </CarouselItem>{" "}
          <CarouselItem key={1}>
            <img src={icon1} />
            <p>hello</p>
          </CarouselItem>{" "}
          <CarouselItem key={2}>
            <img src={icon2} />
            <p>hello</p>
          </CarouselItem>{" "}
          <CarouselItem key={3}>
            <img src={icon3} />
            <p>hello</p>
          </CarouselItem> */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
