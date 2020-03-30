import React from "react";
import github from "../images/github.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import "../Estilos/footer.css";
class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div className="foocontenedor">
          <div className="foopersona">
            <h2>Carlos Zea</h2>
          </div>
          <div className="foosecciones">
            <h4>Personal</h4>
            <ul>
              <li>
                <a>Experiencia</a>
              </li>
              <li>
                <a>Blog </a>
              </li>
              <li>
                <a>Aptitudes</a>
              </li>
              <li>
                <a>Formación</a>
              </li>
              <li>
                <a>Logros</a>
              </li>
              <li>
                <a>Contacto</a>
              </li>
            </ul>
          </div>
          <div className="foosocialMedia">
            <h4>Redes Sociales</h4>
            <div className="fooRedContainer">
              <img src={github} alt="github" />
              <span>https://github.com/CarlosZea</span>
            </div>
            <div className="fooRedContainer">
              <img src={twitter} alt="twitter" />
              <span>https://twitter.com/CarlosZea_CAZ</span>
            </div>
            <div className="fooRedContainer">
              <img src={linkedin} alt="linkedin" />
              <span>https://www.linkedin.com/in/carlos-zea-10a218169</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
