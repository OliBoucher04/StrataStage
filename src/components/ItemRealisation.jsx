import React from "react";
import { Link } from "react-router-dom";
import './Realisation.css'

const ItemRealisation = ({ nom, img }) => {
    return (
        <>
            <img src={img} alt={nom} className="-mt-20 w-full sm:-mt-10 md:h-content md:m-0" />
            <div className="hoverLayer z-[20] flex bg-black bg-opacity-[60%] text-white flex-col justify-center items-center w-full gap-2">
                <p className="text-center">{nom}</p>
                <div className="border-[2px] z-[10] bg-tealPerso-300 bg-opacity-30 text-sm md:text-base lg:text-lg w-32 md:w-[40%] px-[8px] py-[5px] lg:py-3 text-white flex  justify-around items-center font-regular">
                    <Link to="/">
                        Détails
                    </Link>
                    <div>| &rarr;</div>
                </div>
            </div>
        </>


    );
};

export default ItemRealisation;
