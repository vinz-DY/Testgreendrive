import { Link } from "react-router-dom";
import React from "react";
import Car1 from "../assets/Car1.jpg";
import "./headerHome.css";

function HeaderHome() {
  return (
    <div>
      <div className="headerContainer">
        <div className="leftContainer">
          <div className="slogContainer">
            <p className="Pindex">
              Avec <span className="greenTitle">GreenDrive</span>
            </p>
            <p className="Pindex">Partez en voyage avec votre véhicule</p>
            <p className="Pindex">en toute serenité</p>
          </div>
          <div className="buttonsContainer">
            <button type="button" className="button1">
              <Link to="/inscription">S'inscrire</Link>
            </button>
            <div className="buttonsSignContainer">
              <button type="button" className="buttonDeco">
                deconnexion
              </button>
              <button type="button" className="buttonCo">
                connexion
              </button>
            </div>
          </div>
        </div>
        <div>
          <img className="headerCar" src={Car1} alt="car header" />
        </div>
      </div>
    </div>
  );
}

export default HeaderHome;
