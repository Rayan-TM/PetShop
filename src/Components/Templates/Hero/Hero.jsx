import { Swiper, SwiperSlide } from "swiper/react";
import CTAButton from "../../../Shared/CTAButton";
import RowWrapper from "../../../Shared/RowWrapper";

import { Navigation, Autoplay } from "swiper/modules";
import Wrapper from "./Wrapper";
import MainSlide from "./MainSlide";
import Circle from "../../../Shared/Circle";
import SecondSlide from "./SecondSlide";
import SwiperButton from "../../Modules/SwiperButton/SwiperButton";
import useAnimateOnScroll from "../../../Hooks/useAnimateOnScroll";
import Container from "../../../Shared/Container";

export default function Hero() {
  const [container, isVisible] = useAnimateOnScroll({ initialStatus: true });

  return (
    <Wrapper ref={container}>
      <Swiper
        direction="vertical"
        loop
        speed={700}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        onInit={(swiper) => {
          setTimeout(() => swiper.slides[0].classList.add("animate"), 10);
        }}
        onRealIndexChange={(swiper) => {
          if (isVisible) {
            swiper.slides.forEach((slide) => slide.classList.remove("animate"));

            setTimeout(() => swiper.slides[1].classList.add("animate"), 10);
          }
        }}
      >
        <SwiperSlide className="main-slide">
          <MainSlide>
            <RowWrapper as={Container}>
              <div className="content">
                <Circle
                  className="corner-circle"
                  $size="300px"
                  $bgColor="var(--secondary-color-200)"
                  $position={{ top: "-150px", left: "-150px" }}
                />
                <h1>
                  <span className="small">a place for</span> <br />{" "}
                  <span className="big">your pet</span>
                </h1>
                <p>
                  We are the best pet care facility you will ever know. Please
                  contact us as soon as possible to receive special offers.
                </p>

                <CTAButton>Contact Us</CTAButton>
              </div>
              <div className="right">
                <img className="main-img" src="/images/hero.png" />
                <img className="cat" src="/images/cat.png" />
                <img className="dog" src="/images/dog.png" />
              </div>
            </RowWrapper>
          </MainSlide>
        </SwiperSlide>
        <SwiperSlide className="second-slide">
          <SecondSlide>
            <RowWrapper as={Container}>
              <div className="content">
                <small>DOG BED</small>
                <h2>Dog Bed for Medium Dogs</h2>

                <Circle
                  className="text-circle"
                  $size="200px"
                  $bgColor="var(--primary-color)"
                  $position={{ top: "-20%", left: "5%" }}
                />
                <CTAButton $hoverBgColor="var(--secondary-color)">
                  SHOP NOW
                </CTAButton>
              </div>
              <div className="right">
                <Circle
                  className="dog-circle"
                  $size="300px"
                  $bgColor="var(--primary-color-200)"
                  $position={{ top: "50%", right: "40%" }}
                />
                <img className="main-img" src="/images/dog-bed.png" />
              </div>
            </RowWrapper>
          </SecondSlide>
        </SwiperSlide>
        <SwiperButton />
      </Swiper>
    </Wrapper>
  );
}
