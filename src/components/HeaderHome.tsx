import React from 'react'
import headerImg from '../assets/headerImg.svg'


function HeaderHome() {
  return (
    <div className="relative isolate overflow-hidden h-screen sm:py-32">
      <img
        src={headerImg}
        alt=""
        className="absolute inset-0 -z-10 h-100 w-100 
        object-cover object-right md:object-center animate-none"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold font-serif tracking-tight text-dark sm:text-6xl">
            made-for-mboa
          </h2>
          <p className="mt-6 text-4xl leading-8 text-dark font-serif font-thin">
            [Expression]
          </p>
          <p className="mt-6 text-5xl font-serif text-indigo-400 font-light leading-tight font-thin">
            Outstanding
            <br /> user experience
            <br /> product
          </p>
        </div>
        <div className="mt-12"></div>
      </div>
    </div>
  );
}

export default HeaderHome