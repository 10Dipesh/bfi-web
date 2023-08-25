import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Container from "./layout/Container";

interface IContent {
  heading: string;
  text: string;
  image: string;
}

const Content: IContent[] = [
  {
    heading: "LOREM IPSUM DOLOR",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis",
    image: "/images/bfi1.jpg",
  },
  {
    heading: "LOREM IPSUM DOLOR",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis",
    image: "/images/bfi2.jpg",
  },
  {
    heading: "LOREM IPSUM DOLOR",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis",
    image: "/images/bfi3.jpg",
  },
  {
    heading: "LOREM IPSUM DOLOR",
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
    <div className="mt-10">
      <Container>
        <div className="mx-16">
          <div className="relative w-full h-[400px] md:w-[1100px] md:h-[700px]">
            <h1 className="font-extrabold text-5xl text-primary">
              Featured Work
            </h1>
            <div ref={sliderRef} className=" keen-slider mt-14 ml-[16rem]">
              {Content.map((item, index) => (
                <div className="keen-slider__slide gap-7" key={index}>
                  <div className="h-[400px] w-[550px] shadow drop-shadow-xl rounded-l-xl overflow-hidden ">
                    <img
                      className="w-full h-full object-cover "
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className=" text-black h-[400px] w-[500px] shadow drop-shadow-lg rounded-l-[40%] bg-light absolute z-20 top-0 right-44 overflow-clip flex justify-center items-start flex-col p-4">
                    <h1 className="text-xl font-semibold">{item.heading}</h1>
                    <p className="text-left text-sm">{item.text}</p>
                    <div className="h-[100px] w-[200px]  absolute shadow-xl z-40 bg-red top-0 right-0 rounded-bl-full"></div>
                    <div className="h-[150px] w-[180px]  absolute shadow-xl z-40 bg-black top-0 right-0 rounded-bl-full"></div>
                  </div>
                  <div className="h-[400px] w-[500px] text-center shadow drop-shadow-lg rounded-l-full bg-black absolute z-10 top-0 right-52"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Projects;
