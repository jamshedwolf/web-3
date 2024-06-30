import React from 'react'
import Nav from '../../components/Nav'
import tickk from "../../assets/images/tick.svg"
import star from "../../assets/images/star.svg"
import "./clip.css"


function First() {
    return (
        <div className=' h-auto relative   lg:h-screen  px-6 pb-40 gap-3 flex flex-col justify-center items-center'>
            <p className="text-3xl text-white text-center">We offer <span className="text-[#69AF00]">INNOVATIVE SOLUTIONS</span> with cutting-edge technologies such as
            </p>
            <p className="text-[23px] pt-4 text-center text-white">Improving Energy Efficiency and Environmental Sustainability, managing <br />
                to professionally improve work flows and processes, this is WorkFlow.</p>
            <div className="flex flex-col gap-3">
                <div className="bg-white px-2 py-1 text-[12px] items-center rounded-full flex gap-2"><img src={tickk} alt="" className="" />  A.i. (neural intelligence networks)</div>
                <div className="bg-white px-2 py-1 text-[12px] items-center rounded-full flex gap-2"><img src={tickk} alt="" className="" />  A.i. (Blockchain, Web3.0)</div>
                <div className="bg-white px-2 py-1 text-[12px] items-center rounded-full flex gap-2"><img src={tickk} alt="" className="" />  A.i. (Quantum Computing)</div>


            </div>
            <div className="bg-[#69AF00]  absolute bottom-[-30px]  flex gap-3 flex-col p-5 rounded-full ">
                <div className=" flex gap-1  md:gap-3 justify-center ">
                    <img src={star} alt="" className="w-[90px] lg:w-[150px]" />
                    <img src={star} alt="" className=" w-[90px] lg:w-[150px]" />


                </div>

                



            </div>



        </div>
    )
}

export default First