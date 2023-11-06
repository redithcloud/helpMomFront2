import React, { Component } from 'react';
import '../App.css';


class Pregunta extends Component {
  render() {
    const { pregunta, manejarRespuesta } = this.props;

    // Comprueba si la pregunta existe antes de intentar acceder a sus propiedades
    if (!pregunta) {
      return <div>Cargando pregunta...</div>;
    }

    return (
      <div>
        <h2>{pregunta.pregunta}</h2>
        {pregunta.opciones.map((opcion, index) => (
          <div key={index} onClick={() => manejarRespuesta(opcion.valor,opcion.puntaje)}>
            <img className="imagen-opcion" src={opcion.imagen} alt={opcion.valor} />
            <p>{opcion.valor}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Pregunta;
