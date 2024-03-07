import React, { useState, useEffect } from "react";
import services from "../Data/services.json";
import { logoHeader, strata, imgMenu } from "../assets";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import './BarreMenu.css'
import { Link } from "react-router-dom";


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

  const closeMenu = () => {
    toggleMobileMenu();
    setServicesOpen(false);
    setCurrentSousCatIndex(null);
  }

  useEffect(() => {
    const handleResize = () => {
      // Mettez à jour l'état mobileMenuOpen si la largeur de la fenêtre est inférieure à 768 pixels
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    // Attachez l'événement de redimensionnement de la fenêtre
    window.addEventListener("resize", handleResize);

    // Détachez l'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Utilisez une dépendance vide pour exécuter cet effet de manière similaire à componentDidMount


  useEffect(() => {
    const handleScrollLock = () => {
      if (mobileMenuOpen || servicesOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    };
    handleScrollLock();
    return () => {
      document.body.style.overflow = 'auto'; // Reset overflow on unmount
    };
  }, [mobileMenuOpen, servicesOpen]);

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
    <section className={`fixed top-0 flex flex-row justify-center items-center w-full z-[100] px-3 md:px-6 py-4 xl:w-[100%] ${mobileMenuOpen ? "" : ""} ${scrolled ? 'bg-grayPerso-300 duration-300 ease-linear' : 'bg-transparent'}`}>
      <div className={`bg-gradient-to-b from-grayPerso-300 via-grayPerso-300 to-grayPerso-300/0 z-[250] h-[200px] w-full absolute ${mobileMenuOpen ? 'block md:hidden' : 'hidden'}`}></div>
      <div className="flex w-[90%] justify-between items-center md:w-[95%] lg:w-[90%]">
        <img src={logoHeader} alt="" className="w-[190px] z-[300] mr-8" />


        {/* MENU DESKTOP */}
        <div className="md:w-full">
          <div className="hidden md:flex text-white flex-row justify-between items-center">
            <nav>
              <ul className="flex">
                <li className="mr-6">
                  <div className="w-full flex justify-between items-center" onClick={() => setServicesOpen(!servicesOpen)}>
                    <button className="text-white z-[100]">
                      Services
                    </button>
                    <MdArrowDropDown className={`transition  z-[100] transform ${servicesOpen ? '-scale-100' : 'scale-1'}`} />
                  </div>
                  {servicesOpen && (
                    <nav className="absolute bg-grayPerso-300 pt-44 w-full left-0 top-0 h-[100vh] gridMenu">
                      <div className="absolute w-full h-[1px] bg-gray-600 top-24"></div>
                      <div className="imgMenu">
                        <img src={imgMenu} alt="img-menu" />
                      </div>
                      <ul className="flex flex-col justify-start items-start pl-10">
                        {services.slice(0, 2).map((category, index) => (
                          <li key={index}>
                            <Link to={`/service/${category.id}`} className="catMenu">
                              {category.category}
                            </Link>
                            <ul className="mt-4 mb-8">
                              {category.services.map((service, servicesIndex) => (
                                <li key={servicesIndex} className="sousSousCatMenu">
                                  <Link to={`/service/${category.id}/${service.id}`}>
                                    {service.nom}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                      <ul className="flex flex-col justify-start items-start pr-10">
                        {services.slice(2, 5).map((category, index) => (
                          <li key={index}>
                            <a href="#" className="catMenu">{category.category}</a>
                            <ul className="mt-4 mb-8">
                              {category.services.map((service, servicesIndex) => (
                                <li key={servicesIndex} className="sousSousCatMenu">
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
                <li className="mr-6 z-[100]">
                  <a href="#">À propos</a>
                </li>
                <li className="mr-6 z-[100]">
                  <a href="#">Réalisations</a>
                </li>
              </ul>
            </nav>
            <nav>
              <ul className="flex">
                <li className="mr-6 z-[100]">
                  <a href="#">Carrières</a>
                </li>
                <li className="z-[100]">
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
              <ul className="absolute bg-grayPerso-300 w-full h-screen left-0 top-0 flex flex-col justify-start pt-64 items-center overflow-y-scroll">
                <img src={strata} alt="strata" className="absolute top-20 h-[100vw] sm:h-[80vw] object-cover" />
                <IoClose className="fixed top-5 right-5 text-4xl cursor-pointer z-[300]" onClick={closeMenu} />
                <li className="z-[200] mb-6 catMenu">
                  <div className="w-full flex justify-between items-start" onClick={() => setServicesOpen(!servicesOpen)}>
                    <a href="#">
                      Services
                    </a>
                    <MdArrowDropDown className={`transition transform ${servicesOpen ? '-scale-100' : 'scale-1'}`} />
                  </div>
                  {servicesOpen && (
                    <nav className="mt-4 mb-4 w-[100%]">
                      <ul>
                        {services.map((category, index) => (
                          <li key={index} className="w-full flex flex-col justify-between items-start">
                            <div className="w-full flex justify-between items-start" onClick={() => toggleSousCat(index)}>
                              <a href="#" className="sousCatMenu">
                                {category.category}
                              </a>
                              <MdArrowDropDown className={`transition transform ${currentSousCatIndex === index ? '-scale-100' : 'scale-1'}`} />
                            </div>
                            {currentSousCatIndex === index && (
                              <ul className="mt-2 mb-4 flex flex-col justify-start items-start w-full">
                                {category.services.map(
                                  (service, servicesIndex) => (
                                    <li key={servicesIndex} className="text-left sousSousCatMenu">
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
