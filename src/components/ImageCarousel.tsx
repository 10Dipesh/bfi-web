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
const ImageCarousel: React.FC = () => {
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
    <div className=" h-[800px] flex justify-center items-center gap-4 bg-primary mt-[40px]">
      <div className="w-[60%] h-[500px] flex flex-col justify-center items-center ml-8 gap-10 px-20">
        <h1 className="font-extrabold text-6xl leading-[70px] text-white text-center">
          Bright <span className="text-green">Future</span> International Pvt.
          Ltd.
        </h1>
        <p className="text-xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          aliquam incidunt neque sunt ad dolorum corrupti similique
          necessitatibus vero vel, non alias tenetur dicta omnis enim, delectus
          deserunt repellendus. Praesentium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Expedita ipsa eos illum voluptate,
          incidunt veritatis itaque quos corporis perspiciatis necessitatibus,
          totam aut delectus molestiae ex error consequatur cum! Nihil, dolores.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe
          veritatis sequi quidem sint, corrupti dignissimos ipsam, explicabo
          maiores quisquam nulla? Mollitia, aspernatur reprehenderit numquam
          facilis nobis repudiandae nesciunt deleniti?
        </p>
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
      <div className="relative flex-1 ">
      <div className="absolute h-[400px] w-[600px] bg-light opacity-80 top-[-2rem] left-[-2rem]"></div>
      <div
        ref={sliderRef}
        className="keen-slider !h-[400px] !w-[600px] shadow shadow-black/60 dark:shadow-black/70 mr-7 absolute"
      >
        {Content.map((item, index) => (
          <div className="  keen-slider__slide " key={index}>
            <img
              className="w-full h-full object-cover absolute hover:scale-125 transition-all duration-200 ease-linear cursor-pointer"
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
    </div>
  );
};

export default ImageCarousel;
