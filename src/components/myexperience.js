import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "../Estilos/myexperiencie.css";
// import "../Estilos/carrusel.css";
import t1 from "../images/t1.svg";
import t2 from "../images/t2.svg";
import t3 from "../images/t3.svg";
class MyExperience extends React.Component {
  constructor(props) {
    super(props);
    this.$carouselContainer = React.createRef();
    // NextSlide(this.$carouselContainer, 1);
  }
  handleClick() {
    const node = this.$carouselContainer.current;
    console.log(node);
  }
  componentDidMount() {}
  componentDidUpdate() {}

  render() {
    return (
      <section id="experiencia" className="experiencieDetail">
        <h2>Experiencia</h2> <br />
        {/* carousel */}
        <Carousel>
          <Carousel.Item>
            <div className="d-block w-100 car-container">
              <img className="miti" src={t1} alt="First slide" />
              <div className="miti texto">
                <span className="Empresa">
                  Telecom Austro, Ingeniero en Telecomunicaciones
                </span>
                <br />
                <span className="fecha">junio del 2019 - actualidad</span>
                <ul className="proyectos">
                  <li>
                    Diseño, planificación e implementacion de una red Gpon para
                    3600 usuarios.
                  </li>
                  <li>
                    Instalación de servidores VPN, DNS, Streaming para ISP
                  </li>
                  <li>Migracion de OLT C300 para 4000 usuarios</li>
                  <li>
                    Configuración de equipos de networking and switching:
                    Mikrotik, OLT ZTE, OLT Huawei.
                  </li>
                </ul>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-block w-100">
              <img className="miti" src={t2} alt="Third slide" />
              <div className="miti texto">
                <span className="Empresa">
                  DeviaHard, Ingeniero en proyectos y programación
                </span>{" "}
                <br />
                <span className="fecha">
                  junio del 2018 - junio del 2019
                </span>{" "}
                <ul className="proyectos">
                  <li>
                    Diseño y construccion de un prototipo para el analisis de
                    corriente y voltaje de sensores automotrices
                  </li>
                  <li>
                    Despliegue y configuración de un E-commerce y punto de venta
                    en google cloud
                  </li>
                  <li>
                    Programación y despliegue de página web:{" "}
                    <a target="_blank" href="https://ecuareplacementparts.com">
                      https://ecuareplacementparts.com/
                    </a>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-block w-100">
              <img className="miti" src={t3} alt="Third slide" />
              <div className="miti texto">
                <span className="Empresa">
                  CNT Coorporacion Nacional de Telecomunicaciones, Pasante
                </span>
                <br />
                <span className="fecha">
                  junio del 2018 - junio del 2019
                </span>{" "}
                <ul className="proyectos">
                  <li>
                    Operación y mantenimiento de nodos y clientes coorporativos.
                  </li>
                </ul>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    );
  }
}

export default MyExperience;
