import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Container from "./layout/Container";
interface IContent {
  text: string;
  image: string;
}

const content: IContent[] = [
  {
    text: "Kathmandu municapality",
    image: "/images/krishnanagarmun-logo.png",
  },
  {
    text: "Client2",
    image: "/images/bigu-logo.png",
  },
  {
    text: "Client3",
    image: "/images/bigu-logo.png",
  },
  {
    text: "Client4",
    image: "/images/bigu-logo.png",
  },
  {
    text: "Client4",
    image: "/images/bigu-logo.png",
  },
  {
    text: "Client4",
    image: "/images/bigu-logo.png",
  },
  {
    text: "Client4",
    image: "/images/bigu-logo.png",
  },
  {
    text: "Client4",
    image: "/images/bigu-logo.png",
  },
  {
    text: "Client4",
    image: "/images/bigu-logo.png",
  },
  {
    text: "Client4",
    image: "/images/bigu-logo.png",
  },
  {
    text: "Client4",
    image: "/images/bigu-logo.png",
  },
  {
    text: "Client4",
    image: "/images/bigu-logo.png",
  },
  {
    text: "Client4",
    image: "/images/bigu-logo.png",
  },
];
const Clients: React.FC = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 8,
        spacing: 10,
      },
    },
    [
      (slider) => {
        const moveToNextSlide = () => slider.next();
        setInterval(moveToNextSlide, 3000);
      },
    ]
  );
  return (
    <div className="w-full h-600px mt-10 bg-light">
      <Container>
        <div className="flex flex-col justify-start items-start gap-[5rem] mx-16">
      <h1 className="text-5xl font-extrabold text-black mt-4">Our Happy Clients</h1>
    <div ref={sliderRef} className="keen-slider h-[300px] shadow-xl">
      {
      content.map((item, index) => (
        <div className="keen-slider__slide number-slide flex justify-center items-center" key={index}>
          <img className="h-[80px] w-[80px]" key={index} src={item.image} alt="" />
        </div>
      ))
    }
    </div>
    </div>
    </Container>
    </div>
  );
};
export default Clients;
