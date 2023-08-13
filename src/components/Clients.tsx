import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
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
        perView: 5,
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
    <div className="w-full h-600px mt-10 flex flex-col justify-center items-center gap-[5rem]">
      <h1>Our happy clients</h1>
    <div ref={sliderRef} className="keen-slider h-[300px] bg-black">
      {
      content.map((item, index) => (
        <div className="keen-slider__slide number-slide flex justify-center items-center">
          <img className="h-[100px] w-[100px]" key={index} src={item.image} alt="" />
        </div>
      ))
    }
    </div>
    </div>
  );
};
export default Clients;
