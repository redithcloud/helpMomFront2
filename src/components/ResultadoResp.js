import React, { Component } from 'react';

class Resultado extends Component {
  calcularResultado = () => {
    // Aquí puedes calcular el resultado de la prueba basado en las respuestas
    // Por ejemplo, podrías contar el número de respuestas 'feliz', 'asustado', etc.
    // y luego determinar el resultado basado en eso
    const respuestas = this.props.respuestas;
    let conteo = {};

    respuestas.forEach(respuesta => {
      if (!conteo[respuesta]) {
        conteo[respuesta] = 1;
      } else {
        conteo[respuesta]++;
      }
      console.log(respuesta);
    });

    // Aquí puedes determinar el resultado basado en el conteo de respuestas
    // Por ejemplo, si la mayoría de las respuestas son 'feliz', el resultado podría ser 'feliz'
    // Esto es solo un ejemplo y necesitarás adaptarlo a tus necesidades específicas
    let resultado = Object.keys(conteo).reduce((a, b) => conteo[a] > conteo[b] ? a : b);

    return resultado;
  }

  render() {
    const resultado = this.calcularResultado();

    return (
      <div>
        <h2>Resultado de la prueba</h2>
        <p>Tu resultado es: {resultado}</p>
      </div>
    );
  }
}

export default Resultado;
