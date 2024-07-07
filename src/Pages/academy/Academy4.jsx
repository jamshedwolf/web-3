import React from 'react'
import al from "../../assets/images/al.svg"
import two from "../../assets/images/two.svg"
import three from "../../assets/images/three.svg"
import openupp from "../../assets/images/openupp.svg"
import globl from "../../assets/images/globl.svg"
import leftlogo from "../../assets/images/leftlogo.svg"
import ed from "../../assets/images/ed.svg"
import gogl from "../../assets/images/gogl.svg"
import mo from "../../assets/images/mo.svg"
import udemy from "../../assets/images/udemy.svg"
import mask from "../../assets/images/mask.svg"
import realeng from "../../assets/images/realeng.svg"
import hot from "../../assets/images/hot.svg"

function Academy4() {
  return (
    <div className='h-auto p-2 py-10'
>
<div className="max-w-[1400px] gap-10 mx-auto flex flex-col items-center justify-center">
<div className="flex flex-col lg:flex-row  gap-5  justify-between items-center">

<img src={al} alt="" className=" transition-all ease-linear duration-200 hover:scale-105" />
<img src={two} alt="" className=" transition-all ease-linear duration-200 hover:scale-105" />
<img src={three} alt="" className=" transition-all ease-linear duration-200 hover:scale-105" />
</div>
<div className="flex flex-col lg:flex-row  gap-5 justify-between items-center">

<img src={globl} alt="" className=" transition-all ease-linear duration-200 hover:scale-105" />
<img src={openupp} alt="" className=" transition-all ease-linear duration-200 hover:scale-105" />
<img src={leftlogo} alt="" className=" transition-all ease-linear duration-200 hover:scale-105" />

</div>
<div className="flex flex-col lg:flex-row gap-5 justify-between items-center">

<img src={ed} alt="" className=" transition-all ease-linear duration-200 hover:scale-105" />
<img src={gogl} alt="" className=" transition-all ease-linear duration-200 hover:scale-105" />
<img src={mo} alt="" className=" transition-all ease-linear duration-200 hover:scale-105" />

</div>
<div className="flex flex-col lg:flex-row gap-10  justify-evenly items-center">

<img src={hot

} alt="" className=" transition-all ease-linear duration-200 hover:scale-105" />
<img src={udemy} alt="" className=" transition-all ease-linear duration-200 hover:scale-105" />


</div>
<div className="flex flex-col lg:flex-row gap-10  justify-evenly items-center">

<img src={mask

} alt="" className=" transition-all ease-linear duration-200 hover:scale-105" />
<img src={realeng} alt="" className="rounded-full transition-all ease-linear duration-200 hover:scale-105" />


</div>


</div>








    </div>
  )
}

export default Academy4