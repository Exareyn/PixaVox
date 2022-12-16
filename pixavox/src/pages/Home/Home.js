import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="section-container">
        <div className="section-content left">
          <span className="subtitle-text">We are PixaVOX</span>
          <span className="bigtitle-text">
            Création de vos voxels aux{" "}
            <span style={{ color: "#2B55B4" }}>pixels près</span>
          </span>
          <span className="description-text">
            La création de vos Pixas depuis vos idées, <br /> Grâce à notre
            intelligence artificielle
          </span>
        </div>
      </div>
      <div className="section-container">
        <div className="section-content right">
          <span className="subtitle-text">Qui sommes-nous ?</span>
          <span className="description-text">
            PixaVOX est un groupe de sept jeunes étudiants en informatique.
            <br />
            Passionnés de jeux vidéo, notre objectif est d'apporter une solution
            <span style={{ color: "#2B55B4" }}> simple et efficace </span> à la
            créations de nouveau voxel grâce à l'intelligence artificielle.
          </span>
          <Link to="/about" className="more-info-text">
            En savoir plus sur nous
          </Link>
        </div>
      </div>
      <div className="section-container">
        <div className="section-content left">
          <span className="subtitle-text">Notre Market place</span>
          <span className="description-text"></span>
          <Link to="/marketplace" className="more-info-text">
            Voir notre market place
          </Link>
        </div>
      </div>
      <div className="section-container">
        <div className="section-content right">
          <span className="subtitle-text">Tarifs & Abonnement</span>
          <span className="description-text">
            PixaVOX est basé sur un système d'abonnement afin d'accéer à certaines fonctionnalités de l'application.
          </span>
          <Link to="/subscribe" className="more-info-text">
            En savoir plus sur les tarifs & abonnement
          </Link>
        </div>
      </div>
      <div className="section-container">
        <div className="section-content left">
          <span className="subtitle-text">Commencer l'aventure !</span>
          <span className="description-text">
            La créations de bos Pixas est plus qu'à quelques cliques... <br/>
            Commencer l'aventure et partager nous vos meilleures idées !
          </span>
        </div>
        <Link to="/create" className="button-style">Commencer l'aventure</Link>
      </div>
    </div>
  );
};

export default Home;
