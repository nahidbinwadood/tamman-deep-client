import { useSwiper } from 'swiper/react';
import { SliderNextSvg, SliderPrevSvg } from './SvgContainer';
const SliderNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-white p-2 rounded-lg"
      >
        <SliderPrevSvg />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="bg-white p-2 rounded-lg"
      >
        <SliderNextSvg />
      </button>
    </div>
  );
};

export default SliderNavButtons;
