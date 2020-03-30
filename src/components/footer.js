import React from "react";
import github from "../images/github.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import "../Estilos/footer.css";
class Footer extends React.Component {
  render() {
    return (
      <section id="contacto" className="footer">
        <div className="foocontenedor">
          <div className="foopersona">
            <h2>Carlos Zea</h2>
          </div>
          <div className="foosecciones">
            <h4>Personal</h4>
            <ul>
              <li>
                <a href="#experiencia">Experiencia</a>
              </li>
              <li>
                <a href="#">Blog </a>
              </li>
              <li>
                <a href="#aptitudes">Aptitudes</a>
              </li>
              <li>
                <a href="#logros">Logros</a>
              </li>
              <li>
                <a href="#formacion">Formación</a>
              </li>
              <li>
                <a href="#Contacto">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="foosocialMedia">
            <h4>Contacto</h4>
            <div className="fooRedContainer">
              <a target="_blank" href="https://github.com/CarlosZea">
                <img src={github} alt="github" />
              </a>
            </div>
            <div className="fooRedContainer">
              <a target="_blank" href="https://twitter.com/CarlosZea_CAZ">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
            <div className="fooRedContainer">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/carlos-zea-10a218169"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
