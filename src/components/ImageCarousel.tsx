import React from 'react';
import {useKeenSlider} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

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
    image: '/images/bfi1.jpg'
  },
  {
    text: 'hello world',
    image: '/images/bfi2.jpg'
  },
  {
    text: 'hello world',
    image: '/images/bfi3.jpg'
  },
  {
    text: 'hello world',
    image: '/images/bfi4.jpg'
  }
];
const ImageCarousel = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true
    },
    [
      (slider) => {
        const moveToNextSlide = () => slider.next();
        setInterval(moveToNextSlide, 3000);
      }
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider">
      {Content.map((item, index) => (
        <div className="w-screen h-[500px] bg-secondary keen-slider__slide" key={index}>
          <img className="w-full h-full object-cover absolute" src={item.image} alt="" />
          <div className="relative top-20 left-20 text-3xl font-bold text-white">
            {typeof item.text === 'string' ? item.text : item.text()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
