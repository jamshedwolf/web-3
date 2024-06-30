import React, { useState } from 'react';
import img from "../../assets/images/foterimg.svg";
import foterbg from "../../assets/images/foterbg.svg";

const navItems = [
    'Home',
    'About',
    'Contact',
    'Academy',
    'Club',
    'CoNetworking',
    'Mint'
];

function Footer() {
    const [activeIndex, setActiveIndex] = useState(null);

    function activator(index) {
        setActiveIndex(index);
    }

    return (
        <div
            // style={{
            //     backgroundImage: `url(${foterbg})`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            // }}
            className='flex justify-center py-5 h-[70vh] lg:h-auto text-[#69AF00] items-center p-6 bg-black'
        >
            <div className="max-w-[1400px] flex flex-col items-center justify-between lg:flex-row w-full">
                <div className="flex gap-5 items-center justify-center lg:justify-start">
                    <img src={img} alt="Logo" />
                    <p>AlienFlow.space © DAO Earth Powered $pac€</p>
                </div>
                <div className="flex flex-col gap-3 mt-4 lg:mt-0 lg:flex-row">
                    {navItems.map((item, index) => (
                        <p
                            key={index}
                            onClick={() => activator(index)}
                            className={`cursor-pointer hover:text-white px-3  text-center rounded-lg py-1 transition duration-200 ${activeIndex === index ? "bg-[#69AF00] border text-white border-[#69AF00]" : ""}`}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;
