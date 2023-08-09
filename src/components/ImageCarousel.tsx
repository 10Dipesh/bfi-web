import React from "react";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface IContent {
  // text: (() => JSX.Element) | string;
  image: string;
}

const Content: IContent[] = [
  {
    // text: () => (
    //   <p>
    //     hello <span className="text-red">RED word</span> world
    //   </p>
    // ),
    image: "/images/bfi1.jpg",
  },
  {
    // text: "hello world",
    image: "/images/bfi2.jpg",
  },
  {
    // text: "hello world",
    image: "/images/bfi3.jpg",
  },
  {
    // text: "hello world",
    image: "/images/bfi4.jpg",
  },
];
const ImageCarousel:React.FC = () => {
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
    <div className="relative h-[600px] flex justify-center items-center gap-4 bg-primary">
      <div className="w-[1000px] h-[500px] flex flex-col justify-center items-center ml-8 gap-10">
        <h1 className="font-extrabold text-[80px] leading-[80px] text-white">
          Bright <span className="text-green">Future</span> International Pvt.
          Ltd.
        </h1>
        <div className="flex justify-start items-start gap-8 mt-11">
          <Link href="/projects">
            <button
              type="button"
              className=" px-9 py-4 bg-[#F2864A] rounded-[40px] font-semibold text-[20px] text-center shadow drop-shadow-lg hover:bg-green hover:text-white"
            >
              Our Work
            </button>
          </Link>
          <Link href="/about">
            <button className="px-9 py-4 font-semibold text-[20px] text-center rounded-[40px] hover:shadow hover:drop-shadow-lg hover:bg-white hover:text-black text-white">
              Learn about us
            </button>
          </Link>
        </div>
      </div>
      <div
        ref={sliderRef}
        className="keen-slider !h-[400px] !w-[600px] shadow shadow-black/60 dark:shadow-black/70 mr-7"
      >
        {Content.map((item, index) => (
          <div className="  keen-slider__slide" key={index}>
            <img
              className="w-full h-full object-cover absolute"
              src={item.image}
              alt=""
            />
            {/* <div className="relative top-20 left-20 text-3xl font-bold text-white">
              {typeof item.text === "string" ? item.text : item.text()}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
