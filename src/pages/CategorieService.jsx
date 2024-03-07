import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "../Data/services.json";

const CategorieService = () => {
  const { id, serviceid } = useParams();

  // Trouver la catégorie correspondante
  const categorie = servicesData.find((category) => category.id === id);
  console.log(servicesData);
  
  if (!categorie) {
    return <div>Catégorie non trouvée</div>;
  }

  return (
    <div>
      <h1>Nom de la catégorie : {categorie.category}</h1>
    </div>
  );
};

export default CategorieService;
