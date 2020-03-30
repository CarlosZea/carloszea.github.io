import React from "react";
import miFoto from "../images/1.jpg";
class Cabeza extends React.Component {
  render() {
    return (
      <div>
        <div className="grid myheadmenu">
          <img className="logo" src={miFoto} alt="Logo" />
          <ul className="menu">
            <li className="listaMenu">
              <a href="#experiencia">Experiencia</a>
            </li>
            <li className="listaMenu">
              <a href="#aptitudes">Aptitudes</a>
            </li>
            <li className="listaMenu">
              <a href="#formacion">Formación</a>
            </li>
            <li className="listaMenu">
              <a href="#logros">Logros</a>
            </li>
            <li className="listaMenu">
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
        <section className="introduction grid">
          <figure className="photoContainer">
            <img className="photo" src={miFoto} alt="Mi Foto" />
          </figure>
          <p className="myintroduction">
            Soy una persona tranquila y de sangre liviana, amante del
            conocimiento y nuevos retos, me gusta investigar y perfeccionar
            procesos.
          </p>
        </section>
      </div>
    );
  }
}

export default Cabeza;
