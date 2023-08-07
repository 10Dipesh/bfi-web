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
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis",
    image: "/images/bfi2.jpg",
  },
  {
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis",
    image: "/images/bfi3.jpg",
  },
  {
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis",
    image: "/images/bfi4.jpg",
  },
];

const Projects: React.FC = () => {
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
    <div className=" flex justify-center items-center mt-[5rem]">
      <div className="relative w-full h-[300px] md:w-[1100px] md:h-[700px] flex flex-col justify-between items-start ">
        <h1 className="font-extrabold text-[80px] text-primary">
          Featured Work
        </h1>
        <div ref={sliderRef} className="h-full keen-slider mt-5 ">
          {Content.map((item, index) => (
            <div
              className="keen-slider__slide flex justify-center items-center gap-7"
              key={index}
            >
              <div className="absolute left-4 top-20 h-[300px] w-[500px] shadow drop-shadow-lg rounded-[20px] overflow-hidden ">
                <img
                  className="w-full h-full object-cover "
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="text-3xl font-bold text-black h-[250px] w-[600px] text-center shadow drop-shadow-lg absolute top-[15rem] right-6 rounded-[10px] bg-light">
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
