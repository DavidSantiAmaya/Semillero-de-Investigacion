import { getAssetPath } from '../utils/assetPath';
const img = (personaje, archivo) => getAssetPath(`/AssetsPersonajes/${personaje}/${archivo}`);

export const personajesData = [
  {
    id: "bolivar",

    hero: {
      kicker: "Batalla del Pantano de Vargas · Campaña Libertadora de 1819",
      title: "EL LIBERTADOR",
      subtitle: "Simón Bolívar (1783–1830)",
      description:
        "Simón Bolívar lideró el Ejército Libertador durante la Campaña Libertadora de 1819. En la Batalla del Pantano de Vargas dirigió las maniobras que permitieron contener al ejército realista, manteniendo viva la lucha por la independencia de la Nueva Granada.",
      note:
        "Desliza las tarjetas para descubrir los momentos más importantes de la participación de Simón Bolívar durante la Batalla del Pantano de Vargas. Toca una tarjeta para conocer más información en su reverso.",
      cards: [
        {
          id: 1,
          year: "1819",
          title: "La Campaña Libertadora",
          image: img("bolivar", "card1.png"),
          frontLabel: "Antes del combate",
          frontText:
            "Tras cruzar el Páramo de Pisba, Bolívar condujo al Ejército Libertador hacia el altiplano cundiboyacense para enfrentar a las tropas realistas.",
          backTitle: "El cruce del Páramo de Pisba",
          backText:
            "El paso por el Páramo de Pisba fue una de las maniobras más arriesgadas de la campaña. Aunque el ejército sufrió grandes pérdidas, logró sorprender a las fuerzas españolas.",
        },
        {
          id: 2,
          year: "25 JUL 1819",
          title: "El Pantano de Vargas",
          image: img("bolivar", "card2.png"),
          frontLabel: "La batalla",
          frontText:
            "Durante el combate, Bolívar reorganizó constantemente a sus tropas para impedir el avance del ejército comandado por José María Barreiro.",
          backTitle: "Una decisión estratégica",
          backText:
            "El liderazgo de Bolívar permitió mantener la resistencia del Ejército Libertador cuando la batalla parecía inclinarse a favor de los realistas.",
        },
      ],
    },

    accordion: {
      title: "Simón Bolívar",
      subtitle: "Libertador de América",
      image: img("bolivar", "card1.png"),
      description:
        "Militar y líder político que dirigió el Ejército Libertador durante la Campaña Libertadora de 1819.",
    },
  },

  {
    id: "santander",

    hero: {
      kicker: "Batalla del Pantano de Vargas · Campaña Libertadora de 1819",
      title: "EL HOMBRE DE LAS LEYES",
      subtitle: "Francisco de Paula Santander (1792–1840)",
      description:
        "Militar y estadista neogranadino, Francisco de Paula Santander fue una figura fundamental en la independencia de la Nueva Granada. Durante la Campaña Libertadora de 1819 participó en importantes acciones militares y, tras la independencia, se destacó por consolidar las instituciones republicanas y el Estado de derecho, razón por la cual es recordado como «El Hombre de las Leyes» y «Organizador de la Victoria».",
      note:
        "Desliza las tarjetas para conocer la participación de Francisco de Paula Santander en la Campaña Libertadora y su legado en la construcción de la República. Toca una tarjeta para descubrir más información en el reverso.",
      cards: [
        {
          id: 1,
          year: "1819",
          title: "La Campaña Libertadora",
          image: img("santander", "card1.png"),
          frontLabel: "Preparación",
          frontText:
            "Santander comandó la vanguardia del Ejército Libertador durante la Campaña Libertadora de 1819, demostrando disciplina y capacidad estratégica.",
          backTitle: "Un líder militar",
          backText:
            "Su experiencia en el campo de batalla fue clave para organizar las tropas patriotas y preparar el avance hacia el altiplano cundiboyacense.",
        },
        {
          id: 2,
          year: "25 JUL 1819",
          title: "Pantano de Vargas",
          image: img("santander", "card2.png"),
          frontLabel: "La batalla",
          frontText:
            "Durante la Batalla del Pantano de Vargas dirigió a las fuerzas patriotas junto a Simón Bolívar, contribuyendo a mantener la resistencia frente al ejército realista.",
          backTitle: "Resistencia patriota",
          backText:
            "Su liderazgo permitió reorganizar las tropas en los momentos más difíciles del combate, ayudando a evitar la derrota del Ejército Libertador.",
        },
      ],
    },

    accordion: {
      title: "Francisco de Paula Santander",
      subtitle: "El Hombre de las Leyes",
      image: img("santander", "card1.png"),
      description:
        "Militar y estadista neogranadino que participó en la Campaña Libertadora de 1819 y luego consolidó las instituciones de la nueva república.",
    },
  },

  {
    id: "rondon",

    hero: {
      kicker: "Batalla del Pantano de Vargas · Campaña Libertadora de 1819",
      title: "EL HÉROE DE LOS CATORCE LANCEROS",
      subtitle: "Juan José Rondón Delgadillo (1790–1822)",
      description:
        "Juan José Rondón fue un militar llanero venezolano y uno de los héroes más destacados de las guerras de independencia de Venezuela y Colombia. Su valentía al liderar la histórica carga de los Catorce Lanceros durante la Batalla del Pantano de Vargas fue decisiva para cambiar el rumbo del combate y asegurar la continuidad de la Campaña Libertadora.",
      note:
        "Desliza las tarjetas para conocer la participación de Juan José Rondón en la Batalla del Pantano de Vargas y descubrir por qué su carga de caballería es uno de los episodios más memorables de la independencia. Toca una tarjeta para ver más información en el reverso.",
      cards: [
        {
          id: 1,
          year: "1819",
          title: "Un llanero al servicio de la libertad",
          image: img("rondon", "card1.png"),
          frontLabel: "Antes del combate",
          frontText:
            "Juan José Rondón era un experimentado jinete de los llanos venezolanos que se unió al Ejército Libertador, destacándose por su valentía y habilidad en la caballería.",
          backTitle: "Experiencia en combate",
          backText:
            "Su dominio del caballo y de la lanza lo convirtió en uno de los oficiales de caballería más importantes de la Campaña Libertadora de 1819.",
        },
        {
          id: 2,
          year: "25 JUL 1819",
          title: "¡Coronel, salve usted la patria!",
          image: img("rondon", "card2.png"),
          frontLabel: "El momento decisivo",
          frontText:
            "Cuando la batalla parecía perdida, Simón Bolívar ordenó a Rondón liderar una carga de caballería que cambiaría el destino del combate.",
          backTitle: "La orden de Bolívar",
          backText:
            "La célebre frase «¡Coronel, salve usted la patria!» marcó el inicio de una de las acciones militares más recordadas de la independencia colombiana.",
        },
      ],
    },

    accordion: {
      title: "Juan José Rondón",
      subtitle: "Los Catorce Lanceros",
      image: img("rondon", "card1.png"),
      description:
        "Héroe de la Batalla del Pantano de Vargas gracias a la histórica carga de los lanceros que cambió el rumbo del combate.",
    },
  },

  {
  id: "barreiro",

  hero: {
    kicker: "Historia · Ejército Realista · 1819",

    title: "JOSÉ MARÍA BARREIRO",

    subtitle: "General Realista (1793–1819)",

    description:
      "Militar español que comandó las fuerzas realistas durante la Campaña Libertadora de 1819 en el Virreinato de la Nueva Granada. Fue uno de los principales opositores del Ejército Libertador liderado por Simón Bolívar.",

    note:
      "Participó en varios enfrentamientos contra las fuerzas independentistas hasta su derrota en la Batalla de Boyacá, acontecimiento que consolidó la independencia de la Nueva Granada.",

    cards: [
      {
        id: 1,
        year: "1793",
        title: "Nacimiento",
        image: img("barreiro", "card1.png"),
        frontLabel: "Primeros años",
        frontText:
          "Nació en España y siguió la carrera militar dentro del ejército realista.",
        backTitle: "Formación militar",
        backText:
          "Recibió instrucción militar y participó en distintas campañas al servicio de la Corona española.",
      },

      {
        id: 2,
        year: "1818",
        title: "Nueva Granada",
        image: img("barreiro", "card2.png"),
        frontLabel: "Campaña militar",
        frontText:
          "Fue enviado a combatir los movimientos independentistas en América.",
        backTitle: "Defensa de la Corona",
        backText:
          "Su misión era mantener el control español sobre los territorios de la Nueva Granada.",
      },
    ],
  },

  accordion: {
    title: "José María Barreiro",

    subtitle: "General Realista",

    image: img("barreiro", "card1.png"),

    description:
      "Militar español del siglo XIX que dirigió las fuerzas realistas durante la Campaña Libertadora de 1819. Fue derrotado y capturado después de la Batalla de Boyacá, uno de los acontecimientos más importantes en el proceso de independencia de la Nueva Granada.",
  },
  },

  {
    id: "rooke",

    hero: {
      kicker: "Batalla del Pantano de Vargas · Legión Británica · 1819",
      title: "EL HÉROE IRLANDÉS",
      subtitle: "James Rooke (c. 1770–1819)",
      description:
        "Militar irlandés que combatió en las Guerras Napoleónicas antes de unirse a la Legión Británica y al Ejército Libertador. Su carga a la bayoneta en el Cerro del Picacho, durante la Batalla del Pantano de Vargas, resultó decisiva para el triunfo patriota.",
      note:
        "Desliza las tarjetas para conocer la participación de James Rooke en la Batalla del Pantano de Vargas y el sacrificio que le costó la vida días después. Toca una tarjeta para descubrir más información en el reverso.",
      cards: [
        {
          id: 1,
          year: "1815",
          title: "Las Guerras Napoleónicas",
          image: img("rooke", "card1.png"),
          frontLabel: "Antes de América",
          frontText:
            "Rooke sirvió en el Ejército Británico y se distinguió en la Batalla de Waterloo antes de unirse a la Legión Británica que apoyó la independencia americana.",
          backTitle: "La Legión Británica",
          backText:
            "Cientos de veteranos europeos, atraídos por la causa bolivariana, cruzaron el Atlántico para combatir junto al Ejército Libertador en la Nueva Granada.",
        },
        {
          id: 2,
          year: "25 JUL 1819",
          title: "La carga del Picacho",
          image: img("rooke", "card2.png"),
          frontLabel: "El momento decisivo",
          frontText:
            "Cuando el ejército patriota estaba cerca de la derrota, Bolívar ordenó a Rooke cargar contra el Cerro del Picacho. Su bayoneta desalojó al enemigo y cambió el rumbo del combate.",
          backTitle: "«¡Viva la Patria!»",
          backText:
            "Herido de gravedad, Rooke perdió el brazo izquierdo. Antes de morir el 28 de julio en Belencito, respondió a quien le preguntaba por su patria: «La que me ha de dar sepultura».",
        },
      ],
    },

    accordion: {
      title: "James Rooke",
      subtitle: "Legión Británica",
      image: img("rooke", "card1.png"),
      description:
        "Militar irlandés que lideró la carga decisiva de la Legión Británica en el Pantano de Vargas y murió días después a causa de sus heridas.",
    },
  },

  {
    id: "anzoategui",

    hero: {
      kicker: "Batalla del Pantano de Vargas · División de Retaguardia · 1819",
      title: "EL BRAZO DE HIERRO",
      subtitle: "José Antonio Anzoátegui (1789–1819)",
      description:
        "General venezolano que, con apenas 30 años, comandó la División de Retaguardia del Ejército Libertador. Su disciplina táctica fue clave tanto en el Pantano de Vargas como en la posterior Batalla de Boyacá.",
      note:
        "Desliza las tarjetas para conocer la participación de José Antonio Anzoátegui en la Campaña Libertadora de 1819. Toca una tarjeta para descubrir más información en el reverso.",
      cards: [
        {
          id: 1,
          year: "1819",
          title: "General de Brigada",
          image: img("anzoategui", "card1.png"),
          frontLabel: "La División de Retaguardia",
          frontText:
            "Al mando de cerca de 1.050 soldados de los batallones Rifles, Barcelona, Bravos de Páez y la Legión Británica, Anzoátegui se convirtió en uno de los oficiales de mayor confianza de Bolívar.",
          backTitle: "Guardia de Honor",
          backText:
            "Formó parte de la Guardia de Honor del Libertador antes de asumir el mando de una de las divisiones más importantes de la Campaña de 1819.",
        },
        {
          id: 2,
          year: "25 JUL 1819",
          title: "Pantano de Vargas",
          image: img("anzoategui", "card2.png"),
          frontLabel: "El centro del combate",
          frontText:
            "Comandó el centro y el ala derecha del ejército patriota, resistiendo cuerpo a cuerpo el embate de los Húsares de Fernando VII antes de la carga definitiva de los lanceros.",
          backTitle: "La Batalla de Boyacá",
          backText:
            "Días después dirigió el ataque principal en Boyacá, cercando al ejército realista y forzando la rendición de José María Barreiro.",
        },
      ],
    },

    accordion: {
      title: "José Antonio Anzoátegui",
      subtitle: "División de Retaguardia",
      image: img("anzoategui", "card1.png"),
      description:
        "General venezolano que comandó la División de Retaguardia en el Pantano de Vargas y dirigió el ataque decisivo en la Batalla de Boyacá.",
    },
  },

  {
    id: "amaya",

    hero: {
      kicker: "Batalla del Pantano de Vargas · Combate de Paya · 1819",
      title: "LA SARGENTO QUE DESAFIÓ LA HISTORIA",
      subtitle: "Simona Amaya (¿?–1819)",
      description:
        "Nacida en Paya, Boyacá, ocultó su identidad femenina bajo el nombre de «Simón Amaya» para combatir en el Ejército Libertador. Su valor en el Combate de Paya la convirtió en la primera mujer ascendida a sargento en las fuerzas republicanas.",
      note:
        "Desliza las tarjetas para conocer la historia de Simona Amaya, heroína y mártir de la independencia. Toca una tarjeta para descubrir más información en el reverso.",
      cards: [
        {
          id: 1,
          year: "27 JUN 1819",
          title: "El Combate de Paya",
          image: img("amaya", "card1.png"),
          frontLabel: "El Trincherón",
          frontText:
            "Vestida de hombre bajo el nombre de «Simón Amaya», demostró un liderazgo tan excepcional en el asalto al Trincherón que fue ascendida a sargento por orden del mando militar.",
          backTitle: "La primera sargento",
          backText:
            "Se convirtió en la primera mujer de la historia de las fuerzas republicanas en ostentar el rango de sargento, sin que sus superiores conocieran su identidad.",
        },
        {
          id: 2,
          year: "25 JUL 1819",
          title: "Pantano de Vargas",
          image: img("amaya", "card2.png"),
          frontLabel: "El sacrificio final",
          frontText:
            "Tras cruzar el Páramo de Pisba al frente de su unidad de infantería, Simona cayó mortalmente herida en el combate más sangriento de la campaña.",
          backTitle: "Una identidad descubierta",
          backText:
            "Solo después de su muerte, al retirarle el uniforme, sus compañeros descubrieron que el valiente sargento era en realidad una mujer.",
        },
      ],
    },

    accordion: {
      title: "Simona Amaya",
      subtitle: "Combate de Paya",
      image: img("amaya", "card1.png"),
      description:
        "Primera mujer ascendida a sargento en el Ejército Libertador; murió en el Pantano de Vargas tras ocultar su identidad para combatir por la independencia.",
    },
  },
];
