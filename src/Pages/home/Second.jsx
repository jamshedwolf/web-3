import React from 'react'
import leftven from "../../assets/images/leftven.svg"
import rightven from "../../assets/images/rightven.svg"
import mid from "../../assets/images/mid.svg"
import right from "../../assets/images/right.svg"
import rightr from "../../assets/images/rightr.svg"
import left from "../../assets/images/left.svg"

function Second() {
    return (
        <div className='  flex items-center justify-center'>
            <div className="flex gap-5 flex-col py-20 max-w-[1400px]  items-center justify-center mx-auto">

                <div className='bg-[#03C649]   text-[#ECDD91] transition-all ease-linear duration-200 text-center hover:scale-105 lg:text-2xl rounded-full px-14 py-3 exo'>Boost your BENEFITS, raise YOUR QUALITY of LIFE ,<br /> connecting with mutual PROFITS, thought our EXCLUSIVE <br /> ADVANTAGES...</div>

                <div className=" flex flex-col lg:flex-row gap-5">
                    <img src={leftven} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
                    <img src={mid} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
                    <img src={leftven} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />


                </div>
                <div className="flex gap-5 flex-col lg:flex-row">  
<img src={left} alt="" className="w-[300px] transition-all ease-linear duration-200 hover:scale-105 " />
<img src={right} alt="" className="w-[300px] transition-all ease-linear duration-200 hover:scale-105" />
<img src={rightr} alt="" className="w-[300px] transition-all ease-linear duration-200 hover:scale-105" />


                </div>
            </div>




        </div>
    )
}

export default Second