import React, { useRef } from "react";
import ContactUsBtn from "./ContactUsBtn";
import { Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { frame_slide } from "../data/mboateam";
import Autoplay from "embla-carousel-autoplay";
function ProductMosst() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div className="bg-gray-400">
      <div className="mx-auto py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our product MOSST Payrollr
              <br />
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Payrollr is built for SMEs that need to focus on their core
              business. They cannot always afford an accountant, but still, they
              have to comply with the law. With our payrollr, companies do not
              need to hire an expert to look after their payroll. It totally
              takes the load off their shoulders, providing easy-to-use
              end-to-end functionalities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <ContactUsBtn />
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Go to Landing Page <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Carousel
              slideSize="70%"
              height="50%"
              align="end"
              orientation="vertical"
              slideGap="xs"
              controlsOffset="xs"
              controlSize={28}
              loop
              dragFree
            >
              {frame_slide.map((item) => (
                <Carousel.Slide>
                  <Image src={item} />
                </Carousel.Slide>
              ))}
              {/* ...other slides */}
            </Carousel>
            {/* <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://pbs.twimg.com/media/FccMJ5TXkAApKx3?format=jpg&name=900x900"
              alt="App screenshot"
              width={1824}
              height={1080}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductMosst;
