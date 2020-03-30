import React from "react";
import Cabeza from "../components/cabeza";
import "../Estilos/styles.css";
import MyExperience from "../components/myexperience";
import Aptitudes from "../components/aptitudes";
import Logros from "../components/logros";
import Formacion from "../components/formacion";
import Footer from "../components/footer";
class Curriculum extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Cabeza></Cabeza>
        <MyExperience></MyExperience>
        <Aptitudes></Aptitudes>
        <Logros></Logros>
        <Formacion></Formacion>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Curriculum;
