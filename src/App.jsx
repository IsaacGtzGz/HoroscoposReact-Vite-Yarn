import React, { useState } from 'react';
import './App.css';

// Datos de los signos con información detallada
const zodiacSigns = [
  { name: 'Aries', start: '03-21', end: '04-19', horoscope: { general: 'Hoy se le presentará una situación donde deberá buscar una solución inmediata a un conflicto. Trate de no involucrarse.', amor: 'Mantenga un diálogo activo con su alma gemela, dígale que la necesita mucho y desea compartir sus emociones.', riqueza: 'Deberá priorizar el plano económico en este día, ya que podría surgir algún inconveniente inesperado.', bienestar: 'Ese estado de confusión mental continuará en el día de hoy. Intente no asustarse ni desesperarse, todo pasará rápidamente.' } },
  { name: 'Tauro', start: '04-20', end: '05-20', horoscope: { general: 'La paciencia será su mejor aliada para enfrentar los desafíos de la jornada. Tómese su tiempo antes de actuar.', amor: 'Una conversación honesta fortalecerá su relación. Exprese sus sentimientos sin miedo a ser vulnerable.', riqueza: 'Momento de revisar sus finanzas. Es probable que descubra una oportunidad para aumentar sus ingresos.', bienestar: 'Conecte con la naturaleza. Un paseo al aire libre le ayudará a liberar el estrés acumulado.' } },
  { name: 'Géminis', start: '05-21', end: '06-20', horoscope: { general: 'Tu mente está más aguda que nunca. Usa tu ingenio para resolver problemas y comunicarte con claridad.', amor: 'La comunicación es la clave en tu relación. Sorprende a tu pareja con un mensaje inesperado o una llamada sincera.', riqueza: 'Surgirán nuevas ideas de negocio. Presta atención a los detalles y no te precipites.', bienestar: 'Practica la meditación. Te ayudará a centrarte y calmar tu mente, evitando la sobrecarga de información.' } },
  { name: 'Cáncer', start: '06-21', end: '07-22', horoscope: { general: 'Conecta con tus emociones y tu hogar para encontrar la paz. Rodéate de las personas que te quieren.', amor: 'Es el momento de demostrarle a tu pareja cuánto la valoras. Planifiquen una velada tranquila en casa.', riqueza: 'Podrías recibir un dinero inesperado. Administra tus recursos con prudencia y no te dejes llevar por los impulsos.', bienestar: 'Cuida tu salud emocional. No reprimas tus sentimientos, busca un espacio seguro para expresarlos.' } },
  { name: 'Leo', start: '07-23', end: '08-22', horoscope: { general: 'Tu creatividad y carisma brillan. Usa tu energía para liderar y motivar a los que te rodean.', amor: 'Tu pasión se intensifica, atrayendo a nuevas personas o fortaleciendo tu relación actual. No temas ser el centro de atención.', riqueza: 'Se presentarán oportunidades para brillar en tu trabajo. Demuestra tu valía y serás recompensado.', bienestar: 'Realiza actividades que te hagan sentir bien contigo mismo. El ejercicio o un hobby te darán vitalidad.' } },
  { name: 'Virgo', start: '08-23', end: '09-22', horoscope: { general: 'El orden y la planificación te traerán paz mental. Concéntrate en organizar tus tareas y espacios.', amor: 'La honestidad es fundamental. Habla con tu pareja sobre lo que te preocupa, y juntos encontrarán una solución.', riqueza: 'Analiza tus gastos. Un control riguroso te ayudará a evitar futuras complicaciones financieras.', bienestar: 'Dedica tiempo para relajarte. Un buen libro o una taza de té te ayudarán a desconectar y recargar energías.' } },
  { name: 'Libra', start: '09-23', end: '10-22', horoscope: { general: 'Busca el equilibrio en todas tus relaciones. La diplomacia te abrirá puertas y evitará conflictos innecesarios.', amor: 'La armonía en tu relación será tu prioridad. Sorprende a tu pareja con un gesto que demuestre tu aprecio.', riqueza: 'Tu habilidad para negociar será tu mejor herramienta. Aprovecha para cerrar un acuerdo importante o conseguir un aumento.', bienestar: 'Realiza un balance de tu vida. Valora lo que tienes y no te compares con los demás, tu felicidad es única.' } },
  { name: 'Escorpio', start: '10-23', end: '11-21', horoscope: { general: 'Una profunda transformación está en marcha. Confía en tu intuición y no te resistas a los cambios.', amor: 'La intensidad de tus emociones podría causar tensiones. Controla tus celos y habla con tu pareja de forma calmada.', riqueza: 'Evita los riesgos. No es el momento para inversiones arriesgadas, mantente en un terreno seguro.', bienestar: 'Explora tu mundo interior. El autoconocimiento te dará una fuerza increíble para superar cualquier obstáculo.' } },
  { name: 'Sagitario', start: '11-22', end: '12-21', horoscope: { general: 'La aventura te llama. Es el momento perfecto para explorar nuevos horizontes, ya sea en un viaje o aprendiendo algo nuevo.', amor: 'La libertad es lo que más valoras. Asegúrate de que tu pareja entienda tus necesidades y busca un equilibrio entre el compromiso y la independencia.', riqueza: 'Podrías recibir una oferta de trabajo en el extranjero. No la rechaces sin analizarla, podría ser tu gran oportunidad.', bienestar: 'Sal de tu zona de confort. Descubre nuevas actividades que te llenen de energía y vitalidad.' } },
  { name: 'Capricornio', start: '12-22', end: '01-19', horoscope: { general: 'La disciplina y el trabajo duro darán sus frutos. Concéntrate en tus metas y no te desvíes del camino.', amor: 'El romance requiere esfuerzo. Planifica una cita especial con tu pareja, la rutina puede ser peligrosa.', riqueza: 'Recibirás el reconocimiento de tus superiores. Tu esfuerzo ha valido la pena, ahora es el momento de negociar un aumento.', bienestar: 'Aprende a delegar. No puedes hacerlo todo solo, busca ayuda y te darás cuenta de que eres más productivo en equipo.' } },
  { name: 'Acuario', start: '01-20', end: '02-18', horoscope: { general: 'Tu originalidad y visión de futuro están potenciadas. Usa tu creatividad para innovar y sorprender a los demás.', amor: 'La amistad es la base de tu relación. Sorprende a tu pareja con una actividad inusual que fortalezca su conexión.', riqueza: 'Una idea de negocio poco convencional podría darte grandes beneficios. Confía en tu intuición.', bienestar: 'Conéctate con tu comunidad. Trabajar en equipo por una causa social te llenará de paz y satisfacción.' } },
  { name: 'Piscis', start: '02-19', end: '03-20', horoscope: { general: 'Tu intuición y sensibilidad están en su punto más alto. Escucha a tu corazón y no te dejes guiar por la razón.', amor: 'La empatía es tu mejor cualidad. Conecta con las emociones de tu pareja y demuéstrale tu apoyo incondicional.', riqueza: 'No es el momento para las inversiones. Si alguien te ofrece una oportunidad muy atractiva, desconfía.', bienestar: 'Dedica tiempo a tus sueños. Escucha lo que tu subconsciente te quiere decir, te revelará verdades que no puedes ver a simple vista.' } },
];

// Íconos de Emojis para estabilidad
const zodiacIcons = {
  'Aries': '♈',
  'Tauro': '♉',
  'Géminis': '♊',
  'Cáncer': '♋',
  'Leo': '♌',
  'Virgo': '♍',
  'Libra': '♎',
  'Escorpio': '♏',
  'Sagitario': '♐',
  'Capricornio': '♑',
  'Acuario': '♒',
  'Piscis': '♓'
};


const getZodiacSign = (date) => {
  if (!date) return null;
  const monthDay = date.slice(5);
  for (const sign of zodiacSigns) {
    if (sign.name === 'Capricornio') {
      if (monthDay >= sign.start || monthDay <= sign.end) return sign;
    } else if (monthDay >= sign.start && monthDay <= sign.end) {
      return sign;
    }
  }
  return null;
};

function App() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [sign, setSign] = useState(null);

  const handleDateChange = (event) => {
    const date = event.target.value;
    setBirthDate(date);
    setSign(getZodiacSign(date));
  };

  return (
    <div className="app-container">
      <div className="card-principal">
        <h1 className="titulo-principal">Horóscopo de hoy</h1>
        <p className="subtitulo">Consulta el horóscopo de los signos</p>

        <div className="grid-container">
          <div className="card-columna">
            <h2>Ingresa tus datos</h2>
            <div className="input-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Escribe tu nombre" />
            </div>
            <div className="input-group">
              <label htmlFor="birthDate">Fecha de Nacimiento:</label>
              <input type="date" id="birthDate" value={birthDate} onChange={handleDateChange} />
            </div>
          </div>

          <div className="card-columna resultado">
            {sign ? (
              <div className="fade-in">
                <div className="signo-info">

                  {/* Ícono de Emoji corregido */}
                  <p className="signo-icono">{zodiacIcons[sign.name]}</p>

                  <div className="signo-nombre-contenedor">
                    <h2>Horóscopo de {sign.name}</h2>
                    <span className="signo-nombre">{name || 'Usuario'}</span>
                  </div>
                </div>

                <div className="horoscopo-seccion">
                  <h3>General:</h3>
                  <p>{sign.horoscope.general}</p>
                </div>

                <div className="horoscopo-seccion">
                  <h3>Amor:</h3>
                  <p>{sign.horoscope.amor}</p>
                </div>

                <div className="horoscopo-seccion">
                  <h3>Riqueza:</h3>
                  <p>{sign.horoscope.riqueza}</p>
                </div>

                <div className="horoscopo-seccion">
                  <h3>Bienestar:</h3>
                  <p>{sign.horoscope.bienestar}</p>
                </div>
              </div>
            ) : (
              <p className="placeholder-text">Por favor, selecciona tu fecha de nacimiento para ver tu horóscopo.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;