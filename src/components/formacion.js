import React from "react";
import colegio from "../images/colegio.svg";
import Universidad from "../images/university.svg";
import startup from "../images/book.svg";
import "../Estilos/formacion.css";

class Formacion extends React.Component {
  render() {
    return (
      <section className="educacion">
        <h2>Formación</h2>
        <div className="edudivision">
          <div className="educontainer">
            <img src={colegio} />
            <p>
              <span className="edutitulo">
                Colegio Hermano Miguel "La Salle"
              </span>{" "}
              <br />
              Bachiller en especialización Fisico - Matemático <br />
              Julio 2012, Cuenca
            </p>
          </div>
          <div className="educontainer">
            <img src={Universidad} />
            <p>
              <span className="edutitulo">
                Universidad Politécnica Salesiana
              </span>
              <br />
              Ingeniero Electrónico con mención en Telecomunicaciones <br />{" "}
              Septiembre 2012 - Julio 2018, Cuenca
            </p>
          </div>
          <div className="educontainer">
            <img src={startup} />
            <p>
              <span className="edutitulo">Startup de educación platzi</span>
              <br />
              Desarrollo de software y ciencia de datos <br />
              Enero 2019 - Actualidad
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Formacion;
