import React from 'react'
import play from "./play.svg";
import g1 from "./g1.svg";
import g2 from "./g2.svg";
import g3 from "./g3.svg";
function Club8() {
  return (
    <div><div className="xl:h-auto xl:p-20 flex items-center justify-center">
    <div className="max-w-[1400px] flex gap-10 items-center flex-col p-4 px-auto">
        <div
            style={{
                backgroundImage: `url(${play})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className='flex items-center lg:w-[900px] w-auto lg:py-20 text-center transition-all ease-linear duration-200 hover:scale-105 border max-w-[900px] rounded-lg lg:rounded-full justify-center flex-col px-10 py-10 gap-5'
        >
            <div className="flex gap-2 h mx-auto text-white text-center font-extrabold">GameFlow</div>
            <p className="text-center  text-white mx-auto">
            Healthy habits through games, as well as redemptions<br/> of all types of battle and season passes for your<br/> favorite games and fully customizable official items<br/> from the best teams…
            </p>
        </div>
        <div className="flex  gap-5 flex-col lg:flex-row ">

<img src={g1} alt="" className="lg:w-[300px] transition-all ease-linear duration-200 hover:scale-105" />
<img src={g3} alt="" className="lg:w-[300px] transition-all ease-linear duration-200 hover:scale-105" />
<img src={g2} alt="" className="lg:w-[300px] transition-all ease-linear duration-200 hover:scale-105" />

        </div>

    </div>
 

</div></div>
  )
}

export default Club8
