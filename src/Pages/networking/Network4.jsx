import React from 'react'
import circulr from "../../assets/images/circle.svg"
;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../home/card.css"
import "./n.css"
import eth from "./eth.svg"
import org from "./org.svg"
import bubles from "./bubles.svg"
import reakt from "./reakt.svg"

import xmr from "../../assets/images/xmr.svg";
import polygon from "../../assets/images/polygon.svg";



const settings = {
    dots: true,
    infinite: true,


    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const slides = [
    {
        imgSrc:xmr,
        buttonLabel: "A Crypto token"
    },
    {
        imgSrc: polygon,
        buttonLabel: "Academy"
    },
    {
        imgSrc:eth,
        buttonLabel: "Clubs"
    },
    {
        imgSrc:org ,
        buttonLabel: "CoNetworking"
    },
    {
        imgSrc: bubles,
        buttonLabel: "A Crypto token"
    },
    {
        imgSrc: reakt,
        buttonLabel: "A Crypto token"
    },{
        imgSrc: polygon,
        buttonLabel: "Academy"
    }
];

function Network4() {
    return (
        <div className='text-center  items-center flex-col mx-auto flex overflow-x-hidden justify-center'>
            <img src={circulr} alt="" className="transition-all ease-linear duration-200 hover:scale-105" />
            <div className="">


                <div className="w-full py-10 lg:max-w-[1200px] mx-auto overflow-x-hidden ">


                    <Slider className="mx-auto" {...settings}>
                        {slides.map((slide, index) => (
                            <div key={index} className="   h-[170px] w-[170px]  flex items-center justify-center overflow-hidden custom    bg-[#03C649] rounded-full ">
                                <img src={slide.imgSrc} alt="" className="w-[170px]  p-5  h-[150px] " />
                                
                            </div>
                        ))}
                    </Slider>
                </div>




            </div>




        </div>



    )
}

export default Network4