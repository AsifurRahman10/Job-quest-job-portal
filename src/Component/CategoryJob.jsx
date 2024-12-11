import { Title } from "./Title";
import job1 from "../assets/marketing.png";
import job2 from "../assets/customer-service.png";
import job3 from "../assets/developer.png";
import job4 from "../assets/employment.png";
import job5 from "../assets/hr-manager.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export const CategoryJob = () => {
  return (
    <div>
      <Title
        title={"Browse by category"}
        para={
          "Explore a variety of topics, organized into easy-to-navigate categories."
        }
      ></Title>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex items-center gap-8 mt-6 border-2 p-8 rounded-lg">
            <div>
              <img className="w-20" src={job1} alt="" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Marketing and sales Jobs</h4>
              <p className="text-gray-700 font-medium">1654 job available</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center gap-8 mt-6 border-2 p-8 rounded-lg">
            <div>
              <img className="w-20" src={job2} alt="" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Customer care Jobs</h4>
              <p className="text-gray-700 font-medium">5454 job available</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center gap-8 mt-6 border-2 p-8 rounded-lg">
            <div>
              <img className="w-20" src={job3} alt="" />
            </div>
            <div>
              <h4 className="text-xl font-bold">IT Jobs</h4>
              <p className="text-gray-700 font-medium">7854 job available</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center gap-8 mt-6 border-2 p-8 rounded-lg">
            <div>
              <img className="w-20" src={job4} alt="" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Finance Jobs</h4>
              <p className="text-gray-700 font-medium">1578 job available</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center gap-8 mt-6 border-2 p-8 rounded-lg">
            <div>
              <img className="w-20" src={job5} alt="" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Human resource Jobs</h4>
              <p className="text-gray-700 font-medium">1578 job available</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center gap-8 mt-6 border-2 p-8 rounded-lg">
            <div>
              <img className="w-20" src={job5} alt="" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Human resource Jobs</h4>
              <p className="text-gray-700 font-medium">1578 job available</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center gap-8 mt-6 border-2 p-8 rounded-lg">
            <div>
              <img className="w-20" src={job5} alt="" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Human resource Jobs</h4>
              <p className="text-gray-700 font-medium">1578 job available</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center gap-8 mt-6 border-2 p-8 rounded-lg">
            <div>
              <img className="w-20" src={job5} alt="" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Human resource Jobs</h4>
              <p className="text-gray-700 font-medium">1578 job available</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center gap-8 mt-6 border-2 p-8 rounded-lg">
            <div>
              <img className="w-20" src={job5} alt="" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Human resource Jobs</h4>
              <p className="text-gray-700 font-medium">1578 job available</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
