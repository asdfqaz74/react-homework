import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

export default function AdSwiper() {
  return (
    <div className="bg-Contents-contentSecondary">
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        centeredSlides={true}
        loop={true}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        keyboard={true}
      >
        <SwiperSlide>
          <div className="h-48">
            <img
              src="/public/images/멋사하나.png"
              alt="멋사 광고 배너 첫 번째"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-48">
            <img
              src="/public/images/멋사둘.webp"
              alt="멋사 광고 배너 두 번째"
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
