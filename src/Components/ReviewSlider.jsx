// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import SliderNavButtons from './SliderNavButtons';
const ReviewSlider = () => {
  const reviews = [
    {
      authorName: 'Mily Ramson',
      type: 'Satisfied Customer',
      description:
        'Lorem ipsum dolor sit amett consectetur. Est pellentesque pellentesque rhoncus vitae augue. Purus eleifend hac phasellus diam mi gravida velit. Semper adipiscing leo ut lectus enim. Nisi sit pellentesque penatibus ac.',
    },
    {
      authorName: 'Ederson Smith',
      type: 'Happy Customer',
      description:
        'Lorem ipsum dolor sit amet consectetur. Est pellentesque pellentesque rhoncus vitae augue. Purus eleifend hac phasellus diam mi gravida velit. Semper adipiscing leo ut lectus enim. Nisi sit pellentesque penatibus ac.',
    },
    {
      authorName: 'Zine Adam',
      type: 'Satisfied Customer',
      description:
        'Lorem ipsum dolor sit amet consectetur. Est pellentesque pellentesque rhoncus vitae augue. Purus eleifend hac phasellus diam mi gravida velit. Semper adipiscing leo ut lectus enim. Nisi sit pellentesque penatibus ac.',
    },
    {
      authorName: 'John Doe',
      type: 'Satisfied Customer',
      description:
        'Lorem ipsum dolor sit amet consectetur. Est pellentesque pellentesque rhoncus vitae augue. Purus eleifend hac phasellus diam mi gravida velit. Semper adipiscing leo ut lectus enim. Nisi sit pellentesque penatibus ac.',
    },
  ];

  return (
    <div className="relative">
      <Swiper
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviews?.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div>
              <p>{review?.description}</p>
            </div>
            <div className="mt-3 ">
              <h5
                style={{
                  background:
                    'linear-gradient(270deg, #116DFF 0%, #23C0B6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                className="font-semibold mb-2"
              >
                {review?.authorName}{' '}
              </h5>
              <p>{review?.type}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute bottom-0 right-0 w-full flex items-center justify-end z-10">
          <SliderNavButtons />
        </div>
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
