import React from "react";
import { Link } from "react-router-dom";

const ItemService = ({ nom, img, link }) => {
  return (
    <article className="flex flex-col sm:flex-row justify-center sm:justify-end items-start sm:items-center sm:relative w-[90%] xl:w-[80%] mb-10 z-10">
      <div className="border-[2px] z-[10] bg-tealPerso-300 bg-opacity-30 text-sm md:text-base lg:text-lg w-72 md:w-[40%] px-[8px] sm:px-7 py-[14px] sm:py-4 lg:py-8 text-white flex  justify-between items-center font-regular uppercase sm:absolute sm:left-0">
        <Link
          to={link}

        >
          {nom}
        </Link>
        <div>| &rarr;</div>
      </div>
      <div className="overflow-hidden max-h-[150px] -mt-3 sm:mt-0 sm:max-w-[70%] md:max-h-[200px]">
        <img src={img} alt={nom} className="w-[100%] object-cover max-h-fit block"/>
      </div>
    </article>
  );
};

export default ItemService;
