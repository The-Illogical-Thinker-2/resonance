import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import MoviesCarousel from "../../Components/MoviesCarousel/MoviesCarousel";

const Achievements = () => {
  return (
    <>
      <div
        id="ACHIEVEMENTS"
        className="relative text-center w-full py-[10px] pt-0 mt-[80px]"
        
      >
        <Splide
          options={{
            type: "loop",
            drag: false,
            arrows: false,
            pagination: false,
            autoScroll: {
              speed: 1.5,
              pauseOnHover: true,
              pauseOnFocus: true,
            },
          }}
          extensions={{ AutoScroll }}
          className="w-full"
          aria-label="Smooth Scrolling Work Slider"
        >
          <SplideSlide>
            <div className="section-title">ACHIEVEMENTS</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">ACHIEVEMENTS</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">ACHIEVEMENTS</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">ACHIEVEMENTS</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">ACHIEVEMENTS</div>
          </SplideSlide>
        </Splide>
      </div>

      <section className="py-10">
        <MoviesCarousel autoplay={true} interval={2500} />
      </section>
    </>
  );
};

export default Achievements;
