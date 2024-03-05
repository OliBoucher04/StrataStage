import React from "react";
import './Realisation.css'
import ItemRealisation from "./ItemRealisation";
import {
    montmartre,
    chu,
    nationalShrine,
    citemirabel,
    uqo
} from '../assets';

const ListeRealisation = () => {
    return (
        <article className="grilleRea z-[10] max-w-">
            <div className="card">
                <ItemRealisation nom="Quartier Montmartre" img={montmartre}/>
            </div>

            <div className="card">
                <ItemRealisation nom="CHU Sainte-Justine" img={chu}/>
            </div>
            <div className="card">
                <ItemRealisation nom="National Shrine Sainte-Thérèse" img={nationalShrine}/>
            </div>
            <div className="card">
                <ItemRealisation nom="Cité Mirabel" img={citemirabel}/>
            </div>
            <div className="card">
                <ItemRealisation nom="UQO Saint-Jérôme" img={uqo}/>
            </div>
        </article>
    );
};

export default ListeRealisation;
