import { useSwiper } from "swiper/react";
import Button from "./Button";

export default function SwiperButton() {
  const swiper = useSwiper();
  return (
    <>
      <Button className="swiper-next" onClick={() => swiper.slideNext()}>
        <i className="fa-solid fa-arrow-right-long"></i>
      </Button>
      <Button className="swiper-prev" onClick={() => swiper.slidePrev()}>
        <i className="fa-solid fa-arrow-left-long"></i>
      </Button>
    </>
  );
}
