import React from "react";
import { Link } from "react-router-dom";

const ItemService = ({ nom, img, link }) => {
  return (
    <article className="flex flex-col justify-center items-start">
      <div className="border-[2px] bg-tealPerso-300 bg-opacity-30 text-sm w-64 px-[18px] py-[14px] text-white flex  justify-between items-center font-bold">
          <Link
            to={link}

          >
            {nom}
          </Link>
          <div>| &rarr;</div>
      </div>
      <img src={img} alt={nom} className="h-24" />
    </article>
  );
};

export default ItemService;
