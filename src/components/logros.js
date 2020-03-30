import React from "react";
import "../Estilos/logros.css";
import champion from "../images/success.svg";

class Logros extends React.Component {
  render() {
    return (
      <section id="logros" className="logros">
        <h2>Logros</h2>
        <div className="contener">
          <div className="Datos">
            <p>
              <span>
                Ganador del hackathon Nacional de soluciones inalambricas
              </span>{" "}
              con la tecnología emergente Lora realizada por la universidad
              politécnica Salesiana y TARPUQ en GYE. <br />
              Octubre 2018
            </p>
            <p>
              <span>Ganador del hackathon soluciones para la movilidad</span>{" "}
              realizado por la universidad politécnica salesiana y la EMOV{" "}
              <br />
              Marzo 2018
            </p>
            <p>
              Desarrollo del{" "}
              <span>
                Paper Optimun desing and dimensioning model of a Mesh-Wifi
                network for emergency services in protected areas
              </span>{" "}
              y su sustentación en el congreso ETCM Salinas
              <br />
              Octubre 2017
            </p>
          </div>
          <img className="champion" src={champion} alt="We are Champion" />
        </div>
      </section>
    );
  }
}
export default Logros;
