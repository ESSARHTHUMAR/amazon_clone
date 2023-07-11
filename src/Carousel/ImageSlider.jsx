import Slider from "react-slick";
import "./imageSlider.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const ImageSlider = ({ images }) => {
  
  const settings = {
    infinite: true,
    dots: false,
    slickNext: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 5000,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const slider = useRef(null);

  return (
    <>
    {/* scale-[2] text-center mt-[84px] sm:mt-0 md:mt-0 sm:scale-[1] */}
      <div style={{}} className="imageSlider scale-150 md:scale-100 md:mt-0 mt-[43px] sm:mt-[70px]">
        <Slider ref={slider} {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              {/* <button onClick={() => slider?.current?.slickPrev()}> Prev </button> */}
              <img className="home__image" src={item.src} alt={item.alt} />
              {/* <button onClick={() => slider?.current?.slickNext()}> Next </button> */}
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default ImageSlider;
