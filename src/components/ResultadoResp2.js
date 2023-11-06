import React from 'react';

class Resultado extends React.Component {
  calcularPuntaje = () => {
    let puntajeTotal = 0;
    this.props.respuestas.forEach(respuesta => {
      puntajeTotal += respuesta.puntaje;
      console.log(respuesta.respuesta,respuesta.puntaje);
    });

    // Guardar las respuestas en la base de datos
    fetch('http://localhost:5000/guardar-respuestas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        respuesta1: this.props.respuestas[0].respuesta,
        valor1: this.props.respuestas[0].puntaje,
        respuesta2: this.props.respuestas[1].respuesta,
        valor2: this.props.respuestas[1].puntaje,
        // ... añade más campos aquí según sea necesario
      }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });

    return puntajeTotal;
  }

  render() {
    return (
      <div>
        <h2>Tu puntaje total es: {this.calcularPuntaje()}</h2>
        {/* Aquí puedes mostrar más detalles sobre las respuestas si lo deseas */}
      </div>
    );
  }
}

export default Resultado;
