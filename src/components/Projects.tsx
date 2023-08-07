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

const Projects = () => {
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
    <div className=" flex justify-center items-center mx">
      <div className="w-[90%] h-[300px] md:w-[900px] md:h-[400px] flex flex-col justify-between items-start">
        <h1 className="font-extrabold text-[60px] ">Featured Work</h1>
        <div
          ref={sliderRef}
          className="h-full keen-slider mt-5 border-4 border-black rounded-xl"
        >
          {Content.map((item, index) => (
            <div
              className=" bg-primary keen-slider__slide flex justify-center items-center gap-7"
              key={index}
            >
              <div className="h-[80px] w-[80px] border-4 rounded-[50%] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="top-20 left-20 text-3xl font-bold text-white">
                {typeof item.text === "string" ? item.text : item.text()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
