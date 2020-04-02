import React from "react";
import "../Estilos/aptitudes.css";
import Networks from "../images/data.svg";
import programming from "../images/Capa8.svg";
import servers from "../images/api.svg";
class Aptitudes extends React.Component {
  constructor(props) {
    super(props);
    this.seeMore1 = React.createRef();
    this.seeMore2 = React.createRef();
    this.seeMore3 = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      valor1: "Ver más...",
      valor2: "Ver más...",
      valor3: "Ver más..."
    };
  }
  handleClick(valor, e) {
    console.log(valor);
    switch (valor) {
      case "1":
        console.log("nanai");
        this.seeMore1.current.classList.toggle("show");
        if (this.state.valor1 === "Ver más...") {
          this.setState({ valor1: "cerrar" });
        } else {
          this.setState({ valor1: "Ver más..." });
        }
        break;
      case "2":
        this.seeMore2.current.classList.toggle("show");
        if (this.state.valor2 === "Ver más...") {
          this.setState({ valor2: "cerrar" });
        } else {
          this.setState({ valor2: "Ver más..." });
        }

        break;
      case "3":
        this.seeMore3.current.classList.toggle("show");
        if (this.state.valor3 === "Ver más...") {
          this.setState({ valor3: "cerrar" });
        } else {
          this.setState({ valor3: "Ver más..." });
        }

        break;
    }
  }
  render() {
    return (
      <section id="aptitudes" className="aptitudes">
        <h2>Aptitudes</h2> <br />
        <div className="aptdivision">
          <div className="aptcontainer">
            <img src={servers} alt="Servidores y redes" />
            <h4>Administración de redes y servidores</h4>
            <div onClick={e => this.handleClick("1", e)} className="more">
              {this.state.valor1}
            </div>
            <ul ref={this.seeMore1} className="aptadquiridas cerrado">
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
            <div onClick={this.handleClick.bind(this, "2")} className="more">
              {this.state.valor2}
            </div>
            <ul ref={this.seeMore2} className="aptadquiridas cerrado">
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
            <div onClick={this.handleClick.bind(this, "3")} className="more">
              {this.state.valor3}
            </div>
            <ul ref={this.seeMore3} className="aptadquiridas cerrado">
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
