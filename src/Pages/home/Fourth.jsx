import React from 'react'
import leftb from "../../assets/images/leftb.svg"
import rightb from "../../assets/images/rightb.svg"
import slider from "../../assets/images/slider.svg"

import chain from "../../assets/images/chainmid.svg"

function Fourth() {
  return (
    <div className='flex flex-col py-20 justify-center gap-5 items-center h-auto  lg:h-[70vh]  xl:py-20 bg-white'>
<div className="text-center flex-col lg:flex-row gap-6 max-w-[1400px] mx-auto  px-5 lg:text-3xl flex justify-center items-center">
 <img src={leftb} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
 <img src={chain} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
 <img src={rightb} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />


</div>
<div className=" hidden lg:block pt-10 overflow-x-hidden w-full">
<img src={slider} alt="" className="" />

</div>

    </div>
  )
}

export default Fourth