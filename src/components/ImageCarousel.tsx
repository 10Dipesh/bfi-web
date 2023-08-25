import React from "react";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Container from "./layout/Container";

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
    <div className="h-[400px] flex-col md:h-[800px] bg-primary flex justify-center items-center">
      <Container>
        <div className="flex md:flex-row justify-center items-center gap-4 mx-16">
          <div className="absolute z-10 md:relative w-[60%] h-[500px] flex flex-col justify-center items-center gap-10 pr-14">
            <h1 className="font-bold md:text-5xl text-white text-start">
              Bright <span>Future</span> International
              Pvt. Ltd.
            </h1>
            <p className="text-lg text-white hidden md:block text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              aliquam incidunt neque sunt ad dolorum corrupti similique
              necessitatibus vero vel, non alias tenetur dicta omnis enim,
              delectus deserunt repellendus. Praesentium. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Expedita ipsa eos illum
              voluptate, incidunt veritatis itaque quos corporis perspiciatis
              necessitatibus, totam aut delectus molestiae ex error consequatur
              cum! Nihil, dolores. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Natus saepe veritatis sequi quidem sint,
              corrupti dignissimos ipsam, explicabo maiores quisquam nulla?
              Mollitia, aspernatur reprehenderit numquam facilis nobis
              repudiandae nesciunt deleniti?
            </p>
            <div className="w-full flex justify-start items-start gap-8 mt-11">
              <Link href="/projects">
                <button
                  type="button"
                  className=" px-8 py-4 bg-[#F2864A] rounded-[40px] font-semibold inline-flex md:text-lg text-center shadow drop-shadow-lg hover:bg-green hover:text-white hover:animate-bounce"
                >
                  Our Work
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>
                </button>
              </Link>
              <Link href="/about">
                <button className="flex px-8 py-4 font-semibold text-lg text-center rounded-[40px] hover:shadow hover:drop-shadow-lg hover:bg-white hover:text-black text-white">
                  Learn about us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-2 animate-pulse"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="relative flex-1 ">
            <div className="absolute h-[400px] w-[600px] bg-white opacity-20 bottom-[1rem] right-[1rem] animate-bounce"></div>
            <div
              ref={sliderRef}
              className="keen-slider h-full w-full md:!h-[400px] md:!w-[600px] shadow shadow-black/60 dark:shadow-black/70 absolute"
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
      </Container>
    </div>
  );
};

export default ImageCarousel;
