import React from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "../Data/services.json";
import { videoHeader } from "../assets";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from '../components/Button'


const ServiceSpecifique = () => {
  const { id, serviceid } = useParams();

  // Trouver la catégorie correspondante
  const categorie = servicesData.find((category) => category.id === id);
  console.log(servicesData);

  if (!categorie) {
    return <div>Catégorie non trouvée</div>;
  }
  // Trouver le service spécifique correspondant dans la catégorie
  const serviceSpecifique = categorie.services.find(
    (service) => service.id === serviceid
  );

  console.log(categorie);

  console.log(serviceSpecifique.images);

  return (
    <>
      {/* HEADER */}
      <header className="h-screen bg-grayPerso-400 text-white flex flex-col justify-between md:justify-center items-between md:items-center w-full relative">

        {/* FIL ARIANE */}
        <div className="hidden md:flex w-[90%] xl:w-[80%] z-[100] justify-start items-center mb-8 xl:mb-4 filAriane">
          <Link to="/home">Accueil</Link>
          <MdKeyboardArrowRight />
          <Link to="/service">Services</Link>
          <MdKeyboardArrowRight />
          <Link to={`/service/${categorie.id}`}>{categorie.category}</Link>
          <MdKeyboardArrowRight  className="font-light text-gray-500"/>
          <Link to={`/service/${categorie.id}/${serviceSpecifique.id}`} className="font-light text-gray-500">{serviceSpecifique.nom}</Link>
        </div>

        {/* CONTENU HEADER */}
        <div className="hidden md:block w-[400px] h-screen bg-tealPerso-300 absolute right-0 top-0"></div>
        <div className="flex justify-between flex-col md:flex-row items-center md:w-[90%] xl:w-[80%]">
          <div className="relative">
            <video src={videoHeader} muted autoPlay className="h-[70vh] sm:h-[60vh] xl:h-[70vh] object-cover w-screen md:w-[80vw] md:h-[50vh] -z-2" />
            <div className="h-[15vw] sm:h-[20vh] w-full bg-tealPerso-300 bg-opacity-70 absolute z-[50] -bottom-[8vw] sm:-bottom-16 md:bottom-0 md:left-0 md:w-[10%] md:h-full"></div>
          </div>
          <div className="z-[70] relative w-[90%] md:absolute md:flex flex-col justify-end items-end">
            <h1 className="h1cat border-b-4 border-white pb-6 md:w-[50%]">{serviceSpecifique.nom}</h1>
            <p className="text-right md:text-left md:w-[50%]">{categorie.category}</p>
          </div>
        </div>
      </header>

      {/* À PROPOS DE CE SERVICE */}
      <section className="flex flex-col justify-center items-center py-32">
      <div className="flex flex-row justify-center items-center w-[90%]">
        <div className="hidden sm:block h-[100px] w-[5px] bg-tealPerso-300 mr-8"></div>
          <div>
            <h2 className="h2black">Comment ça marche?</h2>
            <h3 className="h3black">{serviceSpecifique.nom}</h3>
            <p className="text-[16px] xl:text-[21px] xl:leading-tight font-light text-black mb-4">{serviceSpecifique.description1}</p>
            <p className="pblack">{serviceSpecifique.description2}</p>
            <Button contenu="Demander une soumission" />
          </div>
      </div>
      </section>


      {/* {serviceSpecifique.images.map((images, index) => (
              <img src={"/src/assets/img/"+images} alt="" />
      ))} */}

    </>
  );
};

export default ServiceSpecifique;
