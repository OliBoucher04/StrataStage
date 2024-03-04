import "./Home.css";
import { imgHeader, linesHeader, imgAbout, strata, separateurTexture, geoArrangement, terrainEnviro, terrainGeo, milieuNaturel, batiment, autorisation } from "../assets";
import Button from "../components/Button";
import ItemService from "../components/ItemService";

const Home = () => {
  return (
    <>
      <header className="h-screen headerAccueil flex flex-col justify-center items-center">
        <section className="w-[90%] md:w-full flex flex-col-reverse justify-center items-start md:flex-row md:items-center relative">
          <img
            src={imgHeader}
            alt="imgHeader"
            className="h-36 md:h-[100%] w-full md:w-[40%] lg:w-[30%] object-cover object-center imgHeader hidden md:block"
          />
          <div className="md:px-14 z-10">
            <h1 className="h1">
              Vos experts en{" "}
              <span className="text-tealPerso-200">environnement</span> et en{" "}
              <span className="text-tealPerso-200">géotechnique</span>
            </h1>
            <p className="p mb-8 xl:mb-10">
              Découvrez Strata Environnement & Géotechnique Inc., votre
              partenaire dévoué en environnement et géotechnique. Fondée en
              décembre 2020, notre équipe dynamique de consultants et d'experts
              se distingue par une approche novatrice et personnalisée.{" "}
            </p>
            <Button link="/services" contenu="Voir nos services" />
          </div>
        </section>
        <img
          src={linesHeader}
          alt="imgHeader"
          className="absolute hidden md:block left-0 rotate-90 w-[35%] md:rotate-0 md:bottom-0 md:w-80"
        />
      </header>
      <section className="bg-grayPerso-400 relative flex flex-col md:flex-row justify-center items-center overflow-hidden">
        <img src={strata} alt="strata-arrangement" className="absolute -top-20 md:-right-10 md:w-[80%] md:-top-20"/>
        <div className="w-[90%] md:flex flex-row justify-center items-center lg:justify-between gap-10 py-0 md:py-32">
          <div className="pt-32 pb-20 md:py-0 lg:w-[60%]">
            <h2 className="h2">Une entreprise <span className="text-tealPerso-200">à l'écoute <br/>de vos besoins</span></h2>
            <h3 className="h3">Chez Strata, la passion guide nos actions.</h3>
            <p className="p">
              Notre vision va au-delà des chiffres; visant à construire une
              entreprise de 50 millions de dollars et à être parmi les meilleurs
              employeurs du Canada. Notre engagement envers la croissance humaine
              s'exprime par notre expertise, innovation, et responsabilité sociale.
              Bienvenue chez Strata, où la croissance rencontre l'humanité.
            </p>
            <Button link="/" contenu="À propos de Strata" />
          </div>
          <img src={imgAbout} alt="team-talking" className="w-full md:w-[30%] lg:w-[30%] pb-32 md:p-0 h-full z-10"/>
        </div>
      </section>
      <section>
        <img src={separateurTexture} alt="separateur-sable" className="h-24 object-cover md:h-full"/>
      </section>
      <section className="bg-stats flex justify-center">
        <div className="py-32 md:flex justify-between items-center w-[90%]">
          <div className="text-center pb-8">
            <p className="stats">302</p>
            <p className="text-[14px] leading-none text-grayPerso-200 mb-8 xl:mb-10">fiers employés <br/> pour vous aider</p>
          </div>
          <div className="text-center pb-8">
            <p className="stats">205</p>
            <p className="text-[14px] leading-none text-grayPerso-200 mb-8 xl:mb-10">entreprises nous <br/> font confiance</p>
          </div>
          <div className="text-center pb-8">
            <p className="stats">105</p>
            <p className="text-[14px] leading-none text-grayPerso-200 mb-8 xl:mb-10">projets en chantier</p>
          </div>
          <div className="text-center pb-8">
            <p className="stats">4</p>
            <p className="text-[14px] leading-none text-grayPerso-200 mb-8 xl:mb-10">années de fier service <br/> depuis 2020</p>
          </div>
        </div>
      </section>
      <section className="bg-grayPerso-400 relative overflow-hidden flex flex-col justify-center items-center">
        <img src={ geoArrangement } alt="texte-arrangement-geotechnique" className="absolute -left-48"/>
        <section className="py-32 w-[90%]">
          <div></div>
          <div>
            <h2 className="h2">Noss <span className="text-tealPerso-200">services</span></h2>
            <h3 className="h3">Choisissez Strata Environnement & Géotechnique Inc. <br/> pour une tranquillité d'esprit totale.</h3>
            <p className="p">De l'évaluation à la décontamination, nous prenons en charge chaque étape, protégeant l'environnement et sécurisant votre demeure. Avec Strata comme partenaire dévoué, libérez-vous des soucis et concentrez-vous sur l'essentiel. Excellence garantie à chaque étape. Faites confiance à Strata pour des solutions sans souci.</p>
            <Button link="/services" contenu="Tous nos services" />
          </div>
        </section>
        <section>
          <ItemService link="/" nom="Terrains et environnement" img={terrainEnviro} />
          <ItemService link="/" nom="Terrains géotechnique" img={terrainEnviro} />
          <ItemService link="/" nom="Milieu naturel" img={terrainEnviro} />
          <ItemService link="/" nom="Bâtiment" img={terrainEnviro} />
          <ItemService link="/" nom="Autorisation" img={terrainEnviro} />
        </section>
      </section>
    </>
  );
};

export default Home;
