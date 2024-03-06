import React, { useState, useEffect } from "react";
import services from "../Data/services.json";
import { logoHeader, strata } from "../assets";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";


const BarreMenu = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [currentSousCatIndex, setCurrentSousCatIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSousCat = (categoryIndex) => {
    if (currentSousCatIndex === categoryIndex) {
      setCurrentSousCatIndex(null);
    } else {
      setCurrentSousCatIndex(categoryIndex);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className={`fixed top-0 flex flex-row justify-center items-center w-full z-[100] px-3 md:px-6 py-4 xl:w-[100%] ${mobileMenuOpen ? "mobile-menu-open" : ""} ${scrolled ? 'bg-grayPerso-300 duration-300 ease-linear' : 'bg-transparent'}`}>
      <div className="flex w-[90%] justify-between items-center md:w-[95%] lg:w-[90%]">
        <img src={logoHeader} alt="" className="w-[190px] z-[100] mr-8" />

        {/* MENU DESKTOP */}
        <div className="md:w-full">
          <div className="hidden md:flex text-white flex-row justify-between items-center">
            <nav>
              <ul className="flex">
                <li className="mr-6">
                  <a href="#" onClick={() => setServicesOpen(!servicesOpen)}>
                    Services
                  </a>
                  {servicesOpen && (
                    <nav>
                      <ul>
                        {services.map((category, index) => (
                          <li key={index}>
                            <a href="#">{category.category}</a>
                            <ul>
                              {category.services.map((service, servicesIndex) => (
                                <li key={servicesIndex}>
                                  <a href="#">{service.nom}</a>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  )}
                </li>
                <li className="mr-6">
                  <a href="#">À propos</a>
                </li>
                <li className="mr-6">
                  <a href="#">Réalisations</a>
                </li>
              </ul>
            </nav>
            <nav>
              <ul className="flex">
                <li className="mr-6">
                  <a href="#">Carrières</a>
                </li>
                <li>
                  <a href="#">Nous joindre</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* MENU MOBILE */}
          <div className="md:hidden text-white">
            <div className="hamburger-menu text-4xl text-white z-[100]" onClick={toggleMobileMenu}>
              <IoIosMenu />
            </div>
            {mobileMenuOpen && (
              <ul className="absolute bg-grayPerso-300 w-full h-screen left-0 top-0 flex flex-col justify-start pt-72 items-center">
                <img src={strata} alt="strata" className="absolute top-20 h-[100vw] sm:h-[80vw] object-cover" />
                <IoClose className="absolute top-5 right-5 text-4xl cursor-pointer" onClick={toggleMobileMenu} />
                <li className="z-[200] mb-6 text-center w-[80%]">
                  <a href="#" className="catMenu" onClick={() => setServicesOpen(!servicesOpen)}>
                    Services
                  </a>
                  {servicesOpen && (
                    <nav className="mt-4 mb-4 w-[100%]">
                      <ul className="text-center">
                        {services.map((category, index) => (
                          <li key={index} className="w-full flex flex-col justify-between items-start">
                            <div className="w-full flex justify-between items-center">
                              <a href="#" className="sousCatMenu" onClick={() => toggleSousCat(index)}>
                                {category.category}
                              </a>
                              <MdArrowDropDown />
                            </div>
                            {currentSousCatIndex === index && (
                              <ul className="mt-2 mb-4 flex flex-col justify-start items-start w-full">
                                {category.services.map(
                                  (service, servicesIndex) => (
                                    <li key={servicesIndex} className="text-left">
                                      <a href="#">{service.nom}</a>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </nav>
                  )}
                </li>
                <li className="catMenu">
                  <a href="#">Carrières</a>
                </li>
                <li className="catMenu">
                  <a href="#">À propos</a>
                </li>
                <li className="catMenu">
                  <a href="#">Réalisations</a>
                </li>
                <li className="catMenu">
                  <a href="#">Nous joindre</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarreMenu;
