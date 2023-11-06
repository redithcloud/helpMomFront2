import React, { Component } from 'react';
import Pregunta from './Pregunta';
import Resultado from './ResultadoResp';

import imagen1 from '../assets/imagen1.png';
import imagen2 from '../assets/imagen2.png';
import imagen3 from '../assets/imagen3.png';
import imagen4 from '../assets/imagen4.png';
import imagen5 from '../assets/imagen5.png';
import imagen6 from '../assets/imagen6.png';
import imagen7 from '../assets/imagen7.png';
import imagen8 from '../assets/imagen8.png';
import imagen9 from '../assets/imagen9.png';
import imagen10 from '../assets/imagen10.png';
import imagen11 from '../assets/imagen11.png';
import imagen12 from '../assets/imagen12.png';
import imagen13 from '../assets/imagen13.png';
import imagen14 from '../assets/imagen14.png';
import imagen15 from '../assets/imagen15.png';
import imagen16 from '../assets/imagen16.png';
import imagen17 from '../assets/imagen17.png';
import imagen18 from '../assets/imagen18.png';
import imagen19 from '../assets/imagen17.png';
import imagen20 from '../assets/imagen18.png';

class Prueba extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preguntaActual: 0,
      preguntas: [
        {
          pregunta: '¿Cuántos años tienes?',
          opciones: [
            { imagen: imagen1, valor: '2-5' },
            { imagen: imagen2, valor: '6-10' },
            { imagen: imagen3, valor: '11-15' },
          ],
        },
        {
          pregunta: '¿Cómo te sientes cuando llegas a casa?',
          opciones: [
            { imagen: imagen4, valor: 'feliz' },
            { imagen: imagen5, valor: 'asustado' },
            { imagen: imagen6, valor: 'triste' },
          ],
        },
        {
          pregunta: '¿Cómo juegas en casa?',
          opciones: [
            { imagen: imagen7, valor: 'solo' },
            { imagen: imagen8, valor: 'con hermanos' },
            { imagen: imagen9, valor: 'con amigos' },
          ],
        },
        {
          pregunta: '¿Qué haces cuando tu padre llega a casa?',
          opciones: [
            { imagen: imagen10, valor: 'me escondo' },
            { imagen: imagen11, valor: 'lo saludo' },
            { imagen: imagen12, valor: 'sigo jugando' },
          ],
        },
        {
          pregunta: '¿Cómo ves a tus padres juntos?',
          opciones: [
            { imagen: imagen13, valor: 'felices' },
            { imagen: imagen14, valor: 'separados' },
          ],
        },
        {
          pregunta: '¿Cómo ves a tus padres cuando se enfadan?',
          opciones: [
            { imagen: imagen15, valor: 'callados' },
            { imagen: imagen16, valor: 'papá gritando' },
          ],
        },
        {
          pregunta: '¿Cómo te sientes cuando tus padres se enfadan?',
          opciones: [
            { imagen: imagen17, valor: 'enfadada' },
            { imagen: imagen18, valor: 'triste' },
          ],
        },
        {
          pregunta: '¿Qué pasa cuando tu padre se enfada contigo?',
          opciones: [
            { imagen: imagen19, valor: 'hablamos' },
            { imagen: imagen20, valor: 'lloro' },
          ],
        },
        // Agrega más preguntas aquí
      ],
      respuestas: [],
      mostrarResultado: false,
    };
  }

  manejarRespuesta = (respuesta) => {
    this.setState(prevState => ({
      respuestas: [...prevState.respuestas, respuesta],
      preguntaActual: prevState.preguntaActual + 1,
    }), () => {
      if (this.state.preguntaActual >= this.state.preguntas.length) {
        this.setState({ mostrarResultado: true });
      }
    });
  }

  render() {
    const { preguntaActual, preguntas, mostrarResultado } = this.state;
    return (
      <div>
        {mostrarResultado ? 
          <Resultado respuestas={this.state.respuestas} /> : 
          <Pregunta 
            pregunta={preguntas[preguntaActual]} 
            manejarRespuesta={this.manejarRespuesta} 
          />
        }
      </div>
    );
  }
}

export default Prueba;