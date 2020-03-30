import React from "react";
import "../Estilos/aptitudes.css";
import Networks from "../images/data.svg";
import programming from "../images/Capa8.svg";
import servers from "../images/api.svg";
class Aptitudes extends React.Component {
  render() {
    return (
      <section id="aptitudes" className="aptitudes">
        <h2>Aptitudes</h2> <br />
        <div className="aptdivision">
          <div className="aptcontainer">
            <img src={servers} alt="Servidores y redes" />
            <h4>Administración de redes y servidores</h4>
            <div className="more">Ver más...</div>
            <ul className="aptadquiridas">
              <li>GNU/LINUX</li>
              <li>Scripting</li>
              <li>Docker</li>
              <li>Data Bases</li>
              <li>Virtualización</li>
              <li>Cloud: GCP, AWS.</li>
            </ul>
          </div>
          <div className="aptcontainer">
            <img src={programming} alt="Programación" />
            <h4>Programación</h4>
            <div className="more">Ver más...</div>
            <ul className="aptadquiridas">
              <li>POO</li>
              <li>Python 3</li>
              <li>React js</li>
              <li>HTML5 Y CSS3</li>
              <li>Javascript Vainilla</li>
              <li>MicroControladores</li>
            </ul>
          </div>
          <div className="aptcontainer">
            <img src={Networks} alt="Networking" />
            <h4>Infraestructura y Networking</h4>
            <div className="more">Ver más...</div>
            <ul className="aptadquiridas">
              <li>Redes Gpon</li>
              <li>Diseño de infraestructura</li>
              <li>Routing and switching</li>
              <li>Gestión de ancho de banda</li>
              <li>Configuración OLTs ZTE y Huawei</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Aptitudes;
