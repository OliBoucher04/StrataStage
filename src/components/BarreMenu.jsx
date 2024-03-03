import React, { useState } from "react";
import services from '../Data/services.json'

const BarreMenu = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <section>
      <div>Logo</div>
      <nav>
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
                        <a href="#">{category.category}</a>
                        <ul>
                            {category.services.map((service, servicesIndex) => (
                            <li key={servicesIndex}><a href="#">{service.nom}</a></li>
                            ))}
                        </ul> 
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Réalisations</a></li>
        </ul>
      </nav>
      <nav>
        <ul>
            <li><a href="#">Carrières</a></li>
            <li><a href="#">Nous joindre</a></li>
        </ul>
      </nav>
    </section>
  );
};

export default BarreMenu;
