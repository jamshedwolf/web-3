import React from 'react'
import First from './First'
import bgabout from "../../assets/images/bgabout.svg"
import Second from './Second'

function AboutMain() {
  return (
    <div 
     style={{
        backgroundImage: `url(${bgabout})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',


    }}
    
    className=' bg-fixed pt-[100px]    lg:pt-16'>


<First/>
<Second/>

        

    </div>
  )
}

export default AboutMain