import React, { useState, useEffect } from "react";
import services from "../Data/services.json";
import { logoCouleur, strataFooter } from "../assets";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsFillClockFill } from "react-icons/bs";



const Footer = () => {
    return (
        <section className="py-32 lg:py-20 flex justify-center items-center w-full w-[100%] bg-grayPerso-400 text-white relative overflow-hidden">
            <img src={strataFooter} alt="icone strata" className="absolute -left-28 w-[120%]" />
            <div className="flex flex-col w-[90%] justify-center items-center lg:items-start">
                <img src={logoCouleur} alt="" className="w-[190px] -ml-10 lg:m-0 lg:mb-20" />
                <div className="md:w-full">

                    {/* MENU DESKTOP */}
                    <div className="hidden lg:flex text-white ">
                        <nav className="w-full">
                            <a href="#" className="titreMenu">Services</a>
                            <ul className="flex flex-row justify-between items-start gap-x-6 mt-8">
                                <li className="w-[36%]">
                                    <nav>
                                        <ul>
                                            {services.slice(0, 2).map((category, index) => (
                                                <li key={index}>
                                                    <a href="#" className="sousCatFooter">{category.category}</a>
                                                    <ul className="mt-2 mb-6">
                                                        {category.services.map((service, servicesIndex) => (
                                                            <li key={servicesIndex}>
                                                                <a href="#" className="sousTitreMenu leading-none">{service.nom}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>

                                </li>
                                <li className="w-[36%] h-full">
                                    <nav>
                                        <ul >
                                            {services.slice(2, 5).map((category, index) => (
                                                <li key={index}>
                                                    <a href="#" className="sousCatFooter">{category.category}</a>
                                                    <ul className="mt-2 mb-6">
                                                        {category.services.map((service, servicesIndex) => (
                                                            <li key={servicesIndex}>
                                                                <a href="#" className="sousTitreMenu">{service.nom}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </li>
                                <div className="titreMenu w-[27%] border-l-2">
                                    <li className="mb-8 border-b-2 pb-8 ml-8">
                                        <a href="#">Nous joindre</a>
                                        <div className="flex flex-col justify-center items-start text-left mt-8">
                                            <div className="text-sm font-light text-gray-400 text-left flex flex-row justify-center items-start mb-2">
                                                <MdLocationOn className="text-4xl" />
                                                <p className="ml-2">5455, Avenue de Gaspé, 710, Montréal Québec  H2T 3B3</p>
                                            </div>
                                            <div className="infoJoindre flex">
                                                <FaPhoneAlt />
                                                <p className="ml-2">+ 514 268.2040</p>
                                            </div>
                                            <div className="infoJoindre flex">
                                                <IoIosMail />
                                                <p className="ml-2">info@strataconseils.com</p>
                                            </div>
                                            <div className="infoJoindre flex">
                                                <BsFillClockFill />
                                                <p className="ml-2">Lun - Ven 8:00 à 17:00</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-8 pl-8">
                                        <a href="#">À propos</a>
                                    </li>
                                    <li className="mb-8 pl-8">
                                        <a href="#">Réalisations</a>
                                    </li>
                                    <li className="mb-8 pl-8">
                                        <a href="#">Carrières</a>
                                    </li>
                                </div>
                            </ul>
                        </nav>
                    </div>

                    {/* MENU MOBILE */}
                    <div className="lg:hidden mt-8">
                        <ul className="text-center">
                            <li className="mb-6">
                                <a href="#" className="titreMenu">Services</a>
                                <nav className="mt-2">
                                    <ul className="text-center">
                                        {services.map((category, index) => (
                                            <li key={index} className="sousTitreMenu">
                                                <a href="#" className="text-center">
                                                    {category.category}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </li>
                            <li className="mb-6">
                                <a href="#" className="titreMenu">Carrières</a>
                            </li>
                            <li className="mb-6">
                                <a href="#" className="titreMenu">À propos</a>
                            </li>
                            <li className="mb-6">
                                <a href="#" className="titreMenu">Réalisations</a>
                            </li>
                            <li className="mb-6">
                                <a href="#" className="titreMenu">Nous joindre</a>
                                <div className="flex flex-col justify-center items-center text-center mt-2">
                                    <div className="text-sm font-light text-gray-400 flex flex-row justify-start items-start w-[70%] md:w-[40%] mb-2">
                                        <MdLocationOn className="text-3xl" />
                                        <p className="ml-2">5455, Avenue de Gaspé, 710, Montréal Québec  H2T 3B3</p>
                                    </div>
                                    <div className="infoJoindre flex">
                                        <FaPhoneAlt />
                                        <p className="ml-2">+ 514 268.2040</p>
                                    </div>
                                    <div className="infoJoindre flex">
                                        <IoIosMail />
                                        <p className="ml-2">info@strataconseils.com</p>
                                    </div>
                                    <div className="infoJoindre flex">
                                        <BsFillClockFill />
                                        <p className="ml-2">Lun - Ven 8:00 à 17:00</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
