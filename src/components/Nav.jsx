import React, { useState } from 'react';
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import telegram from "../assets/images/telegram.svg";
import discord from "../assets/images/discord.svg";
import world from "../assets/images/world.svg";
import x from "../assets/images/x.svg";
import logo from "../assets/images/logo.svg";
import { Link } from 'react-router-dom';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Academy', path: '/academy' },
        { name: 'Club', path: '/club' },
        { name: 'CoNetworking', path: '/co-networking' },
        { name: 'Mint', path: '/mint' }
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (index) => {
        setActiveIndex(index);
        setIsOpen(false); // Close menu on click (for mobile)
    };

    return (
        <div className="py-4 bg-transparent z-50 fixed top-0 left-0 w-full">
            {/* Mobile screen */}
            <div className="flex items-center z-50
             justify-between p-4 lg:hidden">
                <img src={logo} alt="Logo" className="w-[60px] h-auto" />
                <button onClick={toggleMenu} className="text-[#ECDD91]">
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
            {isOpen && (
                <div className="flex flex-col items-center bg-black space-y-2 p-4 lg:hidden">
                    {navItems.map((item, index) => (
                        <Link
                            to={item.path}
                            onClick={() => handleNavClick(index)}
                            key={index}
                            className={`${activeIndex === index ? "border-b-2" : ""} cursor-pointer hover:border-b-2 px-3 border-[#ECDD91] rounded-full text-[#ECDD91]`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex space-x-3">
                            <a href="https://discord.com">
                                <img src={discord} alt="Discord" className="w-10 h-10" />
                            </a>
                            <a href="https://telegram.org">
                                <img src={telegram} alt="Telegram" className="w-10 h-10" />
                            </a>
                            <a href="https://twitter.com">
                                <img src={x} alt="X" className="w-10 h-10" />
                            </a>
                            <a href="https://example.com">
                                <img src={world} alt="Website" className="w-10 h-10" />
                            </a>
                        </div>
                        <p className="border flex items-center text-[#ECDD91] border-[#ECDD91] justify-center  rounded-lg py-2 gap-2 w-40 h-12 text-center">
                            <MdOutlineAccountBalanceWallet size={25} className='text-[#ECDD91]' /> Connect Wallet
                        </p>
                    </div>
                </div>
            )}

            {/* Laptop screen */}
            <div className="hidden lg:flex items-center gap-5 justify-between px-4 py-2 max-w-[1400px] mx-auto">
                <div className="flex-[0.5] flex justify-center items-center gap-3">
                    {navItems.map((item, index) => (
                        <Link
                            to={item.path}
                            onClick={() => handleNavClick(index)}
                            key={index}
                            className={`${activeIndex === index ? "border-b-2" : ""} cursor-pointer hover:border-b-2 px-3 border-[#ECDD91] rounded-full text-[#ECDD91]`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="flex-[0.5] flex items-center justify-start">
                    <img src={logo} alt="Logo" className="w-24 h-auto" />
                </div>
                <div className="flex-[0.5] flex justify-center items-center gap-4">
                    <p className="border flex items-center text-[#ECDD91] text-[15px] border-[#ECDD91] justify-center rounded-lg gap-1 w-40 h-[40px] text-center">
                        <MdOutlineAccountBalanceWallet size={25} className='text-[#ECDD91]' /> Connect Wallet
                    </p>
                    <div className="flex space-x-3">
                        <a href="https://discord.com">
                            <img src={discord} alt="Discord" className="w-10 h-10" />
                        </a>
                        <a href="https://telegram.org">
                            <img src={telegram} alt="Telegram" className="w-10 h-10" />
                        </a>
                        <a href="https://twitter.com">
                            <img src={x} alt="X" className="w-10 h-10" />
                        </a>
                        <a href="https://example.com">
                            <img src={world} alt="Website" className="w-10 h-10" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
