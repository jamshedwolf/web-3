import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgearth from "../../assets/images/earth.svg";
import mint from "../../assets/images/mint.svg";
import copy from "../../assets/images/copy.svg";
import live from "../../assets/images/live.svg";
import academy from "../../assets/images/academy.svg";
import crd2 from "../../assets/images/crd2.svg";
import crd3 from "../../assets/images/crd3.svg";
import crd4 from "../../assets/images/crd4.svg";
import "./card.css"











function CustomSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };




  return (
    <div
      // style={{
      //   backgroundImage: `url(${bgearth})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
      className="flex flex-col w-[100%]  overflow-x-hidden justify-center items-center gap-5 mx-auto h-[70vh]"
    >
      <div className="lg:max-w-[1200px] w-full">
        <Slider className="mx-auto" {...settings}>
          <div className="h-[300px] gap-5 relative overflow-hidden  custom-card mx-7    lg:mx-5  border bg-[#03C649] rounded-[40px]">

            <img src={copy} alt="" className=" w-[200px] h-[150px] mx-auto mt-10" />

            <button className=""> <img src={mint} alt="" className=" mx-auto" /></button>

            <button className='absolute   top-0 right-0 rounded-full py-1 tracking-[2px] w-[125px] bg-[#69AF00] text-white'>LIVE</button>
            <button className='absolute    top-0 left-0 rounded-full py-2 tracking-[2px] w-[125px] text-[10px] pl-5 bg-[#69AF00] text-[#ECDD91]'> A Crypto token</button>

          </div>
         
          <div className="h-[300px] gap-5 relative overflow-hidden  custom-card  mx-7   lg:mx-5 border bg-[#03C649] rounded-[40px]">

            <img src={crd2} alt="" className=" w-[200px] h-[150px] mx-auto mt-10" />

            <button className=""> <img src={mint} alt="" className=" mx-auto" /></button>

            <button className='absolute   top-0 right-0 rounded-full py-1 tracking-[2px] w-[125px] bg-[#69AF00] text-white'>LIVE</button>
            <button className='absolute    top-0 left-0 rounded-full py-2 tracking-[2px] w-[125px] text-[10px] pl-5 bg-[#69AF00] text-[#ECDD91]'> Acadeny</button>

          </div>
         
          <div className="h-[300px] gap-5 relative overflow-hidden  custom-card  mx-7   lg:mx-5 border bg-[#03C649] rounded-[60px]">

            <img src={crd3} alt="" className=" w-[200px] h-[150px] mx-auto mt-10" />

            <button className=""> <img src={mint} alt="" className=" mx-auto" /></button>

            <button className='absolute   top-0 right-0 rounded-full py-1 tracking-[2px] w-[125px] bg-[#69AF00] text-white'>LIVE</button>
            <button className='absolute   top-0 left-0 rounded-full py-2 tracking-[2px] w-[125px] text-[10px] pl-5 bg-[#69AF00] text-[#ECDD91]'> A Clubs</button>

          </div>
         
          <div className="h-[300px] gap-5 relative overflow-hidden  custom-card  mx-7 lg:ml-6  lg:mx-5border bg-[#03C649] rounded-[40px]">

            <img src={crd4} alt="" className="w-[200px] h-[150px] mx-auto mt-10" />

            <button className=""> <img src={mint} alt="" className=" mx-auto" /></button>

            <button className='absolute   top-0 right-0 rounded-full py-1 tracking-[2px] w-[125px] bg-[#69AF00] text-white'>LIVE</button>
            <button className='absolute    top-0 left-0 rounded-full py-2 tracking-[2px] w-[125px] text-[10px] pl-5 bg-[#69AF00] text-[#ECDD91]'> A CoNetworking</button>

          </div>
         
          <div className="h-[300px] gap-5 relative overflow-hidden  custom-card  mx-7  lg:ml-3  lg:mx-10 border bg-[#03C649] rounded-[40px]">

            <img src={copy} alt="" className=" w-[200px] h-[150px] mx-auto mt-10" />

            <button className=""> <img src={mint} alt="" className=" mx-auto" /></button>

            <button className='absolute   top-0 right-0 rounded-full py-1 tracking-[2px] w-[125px] bg-[#69AF00] text-white'>LIVE</button>
            <button className='absolute    top-0 left-0 rounded-full py-2 tracking-[2px] w-[125px] text-[10px] pl-5 bg-[#69AF00] text-[#ECDD91]'> A Crypto token</button>

          </div>
         
          <div className="h-[300px] gap-5 relative overflow-hidden  custom-card  mx-7   lg:mx-5 border bg-[#03C649] rounded-[40px]">

            <img src={copy} alt="" className=" w-[200px] h-[150px] mx-auto mt-10" />

            <button className=""> <img src={mint} alt="" className=" mx-auto" /></button>

            <button className='absolute   top-0 right-0 rounded-full py-1 tracking-[2px] w-[125px] bg-[#69AF00] text-white'>LIVE</button>
            <button className='absolute    top-0 left-0 rounded-full py-2 tracking-[2px] w-[125px] text-[10px] pl-5 bg-[#69AF00] text-[#ECDD91]'> A Crypto token</button>

          </div>
         

        </Slider>
      </div>
    </div>
  );
}

export default CustomSlider;
