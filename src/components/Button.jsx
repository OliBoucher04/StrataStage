import React from "react";
import { Link } from "react-router-dom";

const Button = ({ link, contenu }) => {
    return (
      <Link
        to={link}
        className="border-[2px] bg-tealPerso-300 bg-opacity-30 text-sm px-[28px] py-[14px] text-white font-bold"
      >
        {contenu} | &rarr;
      </Link>
    );
  };

export default Button;
