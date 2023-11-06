import React from 'react';

class Resultado extends React.Component {
  /*componentDidMount() {
    console.log("entre componentDidMount")
    this.guardarRespuestas();
  }*/

  calcularPuntaje = () => {
    let puntajeTotal = 0;
    this.props.respuestas.forEach(respuesta => {
      puntajeTotal += respuesta.puntaje;
    });
    return puntajeTotal;
  }

  guardarRespuestas = () => {
    console.log("entre a guardar");
    fetch('http://127.0.0.1:5000/respuestas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pregunta1: this.props.respuestas[0].respuesta,
        valor1: this.props.respuestas[0].puntaje,
        pregunta2: this.props.respuestas[1].respuesta,
        valor2: this.props.respuestas[1].puntaje,
        
        // ... añade más campos aquí según sea necesario
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => console.log('Respuestas guardadas:', data.id))
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  render() {
    return (
      <div>
        <h2>Tu puntaje total es: {this.calcularPuntaje()}</h2>
        <button onClick={this.guardarRespuestas}>Guardar respuestas</button>

        {/* Aquí puedes mostrar más detalles sobre las respuestas si lo deseas */}
      </div>
    );
  }
}

export default Resultado;
