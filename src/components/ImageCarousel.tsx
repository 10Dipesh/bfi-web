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
const ImageCarousel = () => {
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
    <div className="relative h-[700px] flex justify-center items-center gap-4 mt-[78px] bg-primary">
      <div className="w-[1000px] h-[500px] flex flex-col justify-between items-center ml-8">
        <h1 className="font-extrabold text-[80px] leading-[80px] text-white">Bright <span className="text-green">Future</span> International Pvt. Ltd.</h1>
        <p className="font-semibold text-[30px] leading-10 text-left text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,
          magnam autem sapiente voluptas blanditiis totam inventore, hic
          possimus fugiat minima deleniti odio eum voluptate illum repudiandae
          adipisci earum? Iure, est!
        </p>
        <div className="flex justify-between items-center gap-8">
        <Link href="/projects">
        <button type="button" className="flex px-9 py-4 justify-center bg-white rounded-[40px] font-semibold text-[20px] text-center shadow drop-shadow-lg hover:bg-green hover:text-white">Our Work</button>
        </Link>
        <Link href="/about">
          <button className="px-9 py-4 font-semibold text-[20px] text-center rounded-[40px] hover:shadow hover:drop-shadow-lg hover:bg-white hover:text-black text-white">Learn about us</button>
        </Link>
        </div>
      </div>
      <div ref={sliderRef} className="keen-slider !h-[400px] !w-[600px] shadow shadow-black/60 dark:shadow-black/70 mr-7">
        {Content.map((item, index) => (
          <div
            className="  keen-slider__slide"
            key={index}
          >
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
