"use client";
import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const TestimonialsSlider = ({ testimonials }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="relative">
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className=" mb-10 max-w-md mx-auto text-center rounded-lg">
              <p className="mb-4 text-sm">{testimonial.text}</p>
              <div className="flex items-center justify-center">
                <Image
                  width={50}
                  height={50}
                  src={testimonial.image}
                  alt="Testimonial"
                  className="w-12 h-12 rounded-full mr-4 object-fill"
                />
                <div>
                  <p className="text-gray-300 font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-300">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSlider;
