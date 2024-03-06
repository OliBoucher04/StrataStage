import React, { useState, useEffect } from "react";
import services from "../Data/services.json";
import { logoHeader } from "../assets";
import { IoIosMenu } from "react-icons/io";

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
        <img src={logoHeader} alt="" className="w-[190px] mr-8"/>
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
          <div className="md:hidden">
            <div className="hamburger-menu text-4xl text-white" onClick={toggleMobileMenu}>
              <IoIosMenu />
            </div>
            {mobileMenuOpen && (
              <ul>
                <li>
                  <a href="#" onClick={() => setServicesOpen(!servicesOpen)}>
                    Services
                  </a>
                  {servicesOpen && (
                    <nav>
                      <ul>
                        {services.map((category, index) => (
                          <li key={index}>
                            <a href="#" onClick={() => toggleSousCat(index)}>
                              {category.category}
                            </a>
                            {currentSousCatIndex === index && (
                              <ul>
                                {category.services.map(
                                  (service, servicesIndex) => (
                                    <li key={servicesIndex}>
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
                <li>
                  <a href="#">Carrières</a>
                </li>
                <li>
                  <a href="#">À propos</a>
                </li>
                <li>
                  <a href="#">Réalisations</a>
                </li>
                <li>
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
