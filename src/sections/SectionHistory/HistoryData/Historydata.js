import { getAssetPath } from '../../../utils/assetPath';

const historyEvents = [
  {
    id: "campana-libertadora",
    eyebrow: "Mayo - agosto de 1819",
    title: "Campaña Libertadora",
    place: "Llanos, Andes y altiplano neogranadino",
    date: "1819",
    image: getAssetPath("/AssetsHistoria/campana-libertadora.png"),
    thumbnail: getAssetPath("/AssetsHistoria/campana-libertadora.png"),
    palette: "bronze",
    layout: "panorama",
    lead:
      "Una operación militar de 77 días que transformó una marcha imposible en el inicio decisivo de la independencia de la Nueva Granada.",
    body:
      "Bolívar y Santander unificaron en Tame a las tropas llaneras y neogranadinas para enfrentar el «Régimen del Terror» impuesto por Pablo Morillo. La campaña avanzó desde los llanos orientales hacia la cordillera, enfrentando hambre, lluvia, frío y deserciones antes de aparecer en el corazón estratégico del virreinato.",
    detail:
      "Su fuerza narrativa está en el contraste: una tropa agotada que, al cruzar los Andes, se convierte en sorpresa política y militar.",
    stats: [
      { label: "Duración", value: "77 días" },
      { label: "Objetivo", value: "Nueva Granada" },
      { label: "Clave", value: "Sorpresa" },
    ],
  },
  {
    id: "paramo-pisba",
    eyebrow: "1 - 6 de julio de 1819",
    title: "Cruce del Páramo de Pisba",
    place: "Cordillera Oriental, entre Boyacá y Casanare",
    date: "1819",
    image: getAssetPath("/AssetsHistoria/paramo-pisba.png"),
    thumbnail: getAssetPath("/AssetsHistoria/paramo-pisba.png"),
    palette: "indigo",
    layout: "diagonal",
    lead:
      "El hito estratégico más audaz de la campaña: un paso de más de 3.500 metros que el mando realista consideraba militarmente imposible de cruzar.",
    body:
      "Mientras las rutas fáciles permanecían fuertemente custodiadas, Bolívar optó por este páramo inhóspito para lograr un factor sorpresa absoluto. Los soldados, muchos llaneros acostumbrados al calor, enfrentaron lluvias torrenciales, hipotermia y «soroche», perdiendo casi la totalidad del ganado y las cabalgaduras antes de llegar a Socha en un estado descrito como «cuerpo moribundo».",
    detail:
      "Superar el páramo no fue solo resistencia física: fue la jugada táctica que le devolvió la iniciativa al Ejército Libertador.",
    stats: [
      { label: "Altitud", value: "+3.500 m" },
      { label: "Clima", value: "Glacial" },
      { label: "Costo", value: "Alta mortandad" },
    ],
  },
  {
    id: "batalla-gameza-topaga",
    eyebrow: "10 - 11 de julio de 1819",
    title: "Combates de Gámeza y Tópaga",
    place: "Gámeza y Tópaga, Boyacá",
    date: "1819",
    image: getAssetPath("/AssetsHistoria/batalla-gameza.png"),
    thumbnail: getAssetPath("/AssetsHistoria/batalla-gameza.png"),
    palette: "emerald",
    layout: "diagonal",
    lead:
      "El primer gran desafío militar tras el cruce de Pisba reveló que el avance patriota ya no era una expedición remota: era una amenaza real.",
    body:
      "El 10 de julio hubo escaramuzas en Corrales y Gámeza; Barreiro respondió ejecutando a bayoneta a prisioneros patriotas en La Ramada para desmoralizar al enemigo. El 11 de julio, la vanguardia de Santander intentó flanquear a los realistas en el Puente de Gámeza, donde el oficial Antonio Arredondo fue herido de muerte. El resultado fue tácticamente indeciso, pero obligó a Barreiro a replegarse a Tópaga en actitud defensiva, mientras Bolívar flanqueaba por Betéitiva y Cerinza hacia los valles de Duitama.",
    detail:
      "Más que una victoria limpia, esta acción funciona como una escena de tensión: tanteo, desgaste y el aprendizaje táctico que abrió el camino al Pantano de Vargas.",
    stats: [
      { label: "Terreno", value: "Montañoso" },
      { label: "Resultado", value: "Indeciso" },
      { label: "Efecto", value: "Flanqueo patriota" },
    ],
  },
  {
    id: "batalla-de-puente-de-boyaca",
    eyebrow: "7 de agosto de 1819",
    title: "Batalla del pueste Boyacá",
    place: "Puente de Boyacá, entre Tunja y Ventaquemada",
    date: "1819",
    image: getAssetPath("/AssetsHistoria/batalla-del-Puente-de-boyaca.png"),
    thumbnail: getAssetPath("/AssetsHistoria/batalla-del-Puente-de-boyaca.png"),
    palette: "crimson",
    layout: "monument",
    lead:
      "El evento culminante de la Campaña Libertadora: la victoria que selló la independencia de la Nueva Granada en menos de una tarde.",
    body:
      "En el cruce del río Teatinos, la vanguardia de Santander enfrentó a los realistas en el puente mientras la retaguardia de Anzoátegui atacaba el grueso del enemigo en el llano. La carga de los lanceros de Rondón y el flanqueo de los «Bravos de Apure» desorganizaron por completo a los cerca de 2.670 soldados de Barreiro, capturado por el joven soldado Pedro Pascacio Martínez.",
    detail:
      "Con apenas 13 muertos propios frente a más de 1.600 prisioneros capturados, la victoria provocó la huida del virrey Sámano y dio origen a la Gran Colombia.",
    stats: [
      { label: "Bajas patriotas", value: "13" },
      { label: "Prisioneros", value: "+1.600" },
      { label: "Resultado", value: "Independencia" },
    ],
  },
];

export default historyEvents;

