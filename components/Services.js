import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Pagination, Navigation } from "swiper";

function Services() {
    return (
        <>
            <div className="mt-20 lg:mx-32 lg:p-10 md:p-5 p-2  rounded-lg ">
                <div className="flex gap-x-5 md:mb-10 items-center justify-center" >
                    <div className="h-1 lg:w-3/12 w-1/12 bg-one-primary"></div>
                    <h1 className="lg:text-6xl text-3xl md:text-5xl  text-center uppercase font-bold font-heading text-one-primary py-4 lg:text-left ">Our services
                    </h1>
                    <div className="h-1 lg:w-3/12 w-1/12 bg-one-primary"></div>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="lg:w-4/6 md:w-5/6 w-full"
                >
                    <SwiperSlide>
                        <div className="lg:h-[60vh] h-96 px-20 rounded-lg flex flex-col items-center justify-center text-center">
                            <img className="object-cover object-center md:w-4/6 rounded-md" src="./3.png" />
                            <h2 className="text-center md:text-lg text-sm font-semibold capitalize">Digital Transformation using Microsoft D365</h2></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="lg:h-[60vh] h-96 px-20 rounded-lg flex flex-col items-center justify-center text-center">

                            <img className="object-cover object-center rounded-md md:w-2/6" src="https://www.firstdigital.co.uk/wp-content/uploads/2021/04/bl2-1-1355x1020.jpg" />
                            <h2 className="text-center md:text-lg text-sm font-semibold capitalize">Microsoft Power Platform</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="lg:h-[60vh] h-96 px-20 rounded-lg flex flex-col items-center justify-center text-center">
                            <img className="object-cover object-center rounded-md md:w-2/6" src="./4.png" />
                            <h2 className="text-center md:text-lg text-sm font-semibold mt-5 capitalize">E-Commerce</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="lg:h-[60vh] h-96 px-20 rounded-lg flex flex-col items-center justify-center text-center">
                            <img className="object-cover object-center rounded-md md:w-2/6" src="./5.png" />
                            <h2 className="text-center md:text-lg text-sm font-semibold mt-5 capitalize">Website Development</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="lg:h-[60vh] h-96 px-20 rounded-lg flex flex-col items-center justify-center text-center">
                            <img className="object-cover object-center rounded-md md:w-2/6" src="./6.png" />
                            <h2 className="text-center md:text-lg text-sm font-semibold mt-5 capitalize">Power BI and Azure AI</h2>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className="container px-6 py-8">
                    <div className="items-center  lg:justify-between">
                        <div className="md:grid lg:grid-cols-3 md:gap-x-20 md:gap-y-5 text-gray-900">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services