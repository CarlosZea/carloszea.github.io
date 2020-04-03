import React from "react";
import miFoto from "../images/1.jpg";
import hamburguesa from "../images/menu.svg";
class Cabeza extends React.Component {
  constructor(props) {
    super(props);
    this.activeMenu = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.activeMenu.current.classList.toggle("menu-active");
  }
  render() {
    return (
      <div>
        <div className="grid myheadmenu">
          <div>
            <img
              onClick={this.handleClick}
              src={hamburguesa}
              className="burger"
            />
          </div>
          <ul ref={this.activeMenu} className="menu">
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
