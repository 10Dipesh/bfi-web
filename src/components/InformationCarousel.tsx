import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface IContent {
  text: (() => JSX.Element) | string;
  image: string;
}

const Content: IContent[] = [
  {
    text: () => (
      <p>
        hello <span className="text-red">RED word</span> world
      </p>
    ),
    image: "/images/bfi1.jpg",
  },
  {
    text: "hello world",
    image: "/images/bfi2.jpg",
  },
  {
    text: "hello world",
    image: "/images/bfi3.jpg",
  },
  {
    text: "hello world",
    image: "/images/bfi4.jpg",
  },
];
const InformationCarousel = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        const moveToNextSlide = () => slider.next();
        setInterval(moveToNextSlide, 3000);
      },
    ]
  );

  return (
    <div
      ref={sliderRef}
      className="keen-slider h-[500px] w-screen mt-5 bg-red"
    >
      {Content.map((item, index) => (
        <div
          className="w-[300px] h-[300px] bg-secondary keen-slider__slide flex justify-center items-center gap-7"
          key={index}
        >
          <div className="h-[100px] w-[100px] border-4 rounded-[50%]  overflow-hidden">
            <img className="w-full h-full" src={item.image} alt="" />
          </div>
          <div className="top-20 left-20 text-3xl font-bold text-white">
            {typeof item.text === "string" ? item.text : item.text()}
          </div>
        </div>
      ))}
    </div>
  );
};
export default InformationCarousel;
