// Fuentes organizadas por dónde se usan dentro del proyecto. Dentro de cada
// categoría, los items están ordenados alfabéticamente por título.
// Cuando una misma fuente institucional se usó para varios personajes o
// secciones, se dejó una sola entrada indicándolo en la descripción, en vez
// de repetirla, para evitar duplicados.

export const CATEGORIES = [
  {
    id: "home",
    label: "Página Principal",
    icon: "home",
    items: [
      {
        type: "Libro académico",
        title: "1819: Campaña de la Nueva Granada",
        author: "Gutiérrez Ardila, D. (2019)",
        year: "2019",
        description:
          "Estudio sobre el desarrollo militar y político de la Campaña Libertadora de 1819, que culminó en las batallas del Pantano de Vargas y Boyacá. Universidad Externado de Colombia.",
        url: "https://club-lectura.uexternado.edu.co/wp-content/uploads/sites/46/2019/08/Lectura-Boyaca-1819-copymas.pdf",
      },
      {
        type: "Libro de divulgación",
        title: "Bicentenario de la Campaña Libertadora 1819-2019",
        author: "Zuluaga Gil, R. / Academia Antioqueña de Historia",
        year: "2019",
        description:
          "Folleto de divulgación educativa sobre los antecedentes de la independencia y la Campaña Libertadora, con énfasis en el aporte antioqueño y el general José María Córdova.",
        url: "#",
      },
      {
        type: "Revista académica",
        title:
          "Boletín de Historia y Antigüedades — Núms. 657, 658 y 659 (Sesquicentenario de la Campaña Libertadora)",
        author: "Academia Colombiana de Historia",
        year: "1969",
        description:
          "Edición conmemorativa del sesquicentenario de la Campaña Libertadora de 1819, con documentos primarios, proclamas de Bolívar y partes oficiales de las batallas del Pantano de Vargas y Boyacá.",
        url: "https://academiahistoria.org.co/",
      },
      {
        type: "Fuente primaria",
        title: "Cartas del Libertador — Memorias del General O'Leary (Tomo I)",
        author: "Bolívar, S. (cartas); recopilación de O'Leary, D. F.",
        year: "1888",
        description:
          "Colección de cartas originales de Simón Bolívar depositadas en el Salón Bolívar del Museo Nacional de Venezuela, publicada como complemento de las Memorias del General O'Leary.",
        url: "#",
      },
      {
        type: "Fuente primaria",
        title: "El General Simón Bolívar en la Campaña de la Nueva Granada de 1819",
        author: '"Un Granadino" (testigo anónimo del Estado Mayor del Ejército Libertador)',
        year: "1820",
        description:
          "Relato de un testigo presencial de la Campaña de 1819, publicado apenas un año después de los hechos. Fondo Pineda, Biblioteca Nacional de Colombia.",
        url: "#",
      },
      {
        type: "Libro académico",
        title: "Gentes, Pueblos y Batallas: Microhistorias de la Ruta de la Libertad (Volumen 1)",
        author: "Guerrero Barón, J. y Calderón Fonseca, J. S. (comps.); UPTC",
        year: "2014",
        description:
          "Compilación de microhistorias sobre la participación de pueblos boyacenses en la Campaña Libertadora de 1819, incluida la Legión Británica y la vida de Pedro Pascasio Martínez Rojas.",
        url: "#",
      },
      {
        type: "Proyecto digital",
        title: "Historia de Colombia — Capítulo 6: La Guerra Grande",
        author: "Biblioteca Nacional de Colombia",
        year: "s.f.",
        description:
          "Capítulo narrativo del proyecto digital de la Biblioteca Nacional sobre la etapa final de la independencia, incluida la Campaña Libertadora y las batallas del Pantano de Vargas y Boyacá.",
        url: "#",
      },
      {
        type: "Artículo académico",
        title: "La Batalla del Pantano de Vargas. 25 de julio de 1819 (Paipa, Boyacá, Nueva Granada)",
        author: "Rodríguez Cuenca, J. V. y Borrero, L. D. (2014)",
        year: "2014",
        description:
          "Artículo de la Revista Maguaré (Universidad Nacional de Colombia) sobre la batalla, desde una mirada complementaria a la historiografía tradicional.",
        url: "https://revistas.unal.edu.co/index.php/maguare/article/view/54727",
      },
      {
        type: "Artículo / selección de revista",
        title: "La Campaña Libertadora (según el relato de O'Leary)",
        author: "O'Leary, D. F. (relato original)",
        year: "s.f.",
        description:
          "Selección editorial del relato de O'Leary sobre la Campaña Libertadora de 1819, publicada como homenaje en el sesquicentenario de la gesta.",
        url: "#",
      },
    ],
  },
  {
    id: "personajes-historicos",
    label: "Personajes Históricos",
    icon: "person",
    items: [
      {
        type: "Portal institucional",
        title: "Academia Colombiana de Historia",
        author: "Academia Colombiana de Historia",
        year: "s.f.",
        description:
          "Boletín de Historia y Antigüedades. Consultado para las biografías de Anzoátegui, Barreiro, Rondón, Rooke y Amaya.",
        url: "https://academiahistoria.org.co/",
      },
      {
        type: "Archivo digital",
        title: "Archivo General de la Nación de Colombia",
        author: "Archivo General de la Nación",
        year: "s.f.",
        description:
          "Consultado para las biografías de James Rooke, Francisco de Paula Santander y Juan José Rondón.",
        url: "https://www.archivogeneral.gov.co/",
      },
      {
        type: "Biblioteca virtual",
        title: "Banco de la República – Biblioteca Virtual",
        author: "Banco de la República",
        year: "s.f.",
        description:
          "Consultado para las biografías de Anzoátegui, Amaya, Santander, Barreiro y Bolívar.",
        url: "https://www.banrepcultural.org/",
      },
      {
        type: "Biblioteca digital",
        title: "Biblioteca Virtual Miguel de Cervantes",
        author: "Biblioteca Virtual Miguel de Cervantes",
        year: "s.f.",
        description:
          "Consultada para las biografías de Francisco de Paula Santander y Juan José Rondón.",
        url: "https://www.cervantesvirtual.com/",
      },
      {
        type: "Institución oficial",
        title: "Comando General de las Fuerzas Militares de Colombia",
        author: "Comando General de las Fuerzas Militares",
        year: "s.f.",
        description:
          "Reseña de la Medalla Militar «Simona Amaya», otorgada en su honor a mujeres oficiales y suboficiales destacadas.",
        url: "https://www.cgfm.mil.co/",
      },
      {
        type: "Diccionario biográfico",
        title: "Dictionary of Irish Latin American Biography",
        author: "Society for Irish Latin American Studies",
        year: "s.f.",
        description: "Biografía de James Rooke.",
        url: "https://www.irlandeses.org/dilab_rookej.htm",
      },
      {
        type: "Reseña institucional",
        title: "Ejército Nacional de Colombia – Reseña Histórica",
        author: "Ejército Nacional de Colombia",
        year: "s.f.",
        description:
          "Consultado para las biografías de Rooke, Anzoátegui, Santander, Barreiro, Rondón y Bolívar.",
        url: "https://www.ejercito.mil.co/",
      },
      {
        type: "Enciclopedia digital",
        title: "Enciclopedia de la Red Cultural del Banco de la República",
        author: "Banco de la República",
        year: "s.f.",
        description:
          "Consultada para las biografías de James Rooke, Francisco de Paula Santander, Simona Amaya y Simón Bolívar.",
        url: "https://enciclopedia.banrepcultural.org/",
      },
      {
        type: "Diccionario histórico",
        title: "Fundación Empresas Polar – Diccionario de Historia de Venezuela",
        author: "Fundación Empresas Polar",
        year: "s.f.",
        description:
          "Consultado para las biografías de José Antonio Anzoátegui, Juan José Rondón y Simón Bolívar.",
        url: "https://bibliofep.fundacionempresaspolar.org/dhv",
      },
      {
        type: "Diccionario biográfico",
        title: "Real Academia de la Historia (España)",
        author: "Real Academia de la Historia",
        year: "s.f.",
        description:
          "Diccionario Biográfico Español. Consultado para las biografías de José María Barreiro y José Antonio Anzoátegui.",
        url: "https://dbe.rah.es/biografias/13494/jose-maria-barreiro-manjon",
      },
      {
        type: "Enciclopedia colaborativa",
        title: "Wikipedia – José María Barreiro Manjón",
        author: "Wikipedia",
        year: "s.f.",
        description: "Biografía de José María Barreiro Manjón.",
        url: "https://es.wikipedia.org/wiki/José_María_Barreiro_Manjón",
      },
    ],
  },
  {
    id: "lugares",
    label: "Lugares Importantes e Históricos",
    icon: "map",
    items: [
      {
        type: "Portal institucional",
        title: "Academia Colombiana de Historia",
        author: "Academia Colombiana de Historia",
        year: "s.f.",
        description:
          "Boletín de Historia y Antigüedades. Consultado para Boyacá, El Chicamocha, los cerros El Picacho y El Cangrejo, Paipa, el Pantano de Vargas, Pisba, el Puente de Boyacá, el Parque Jaime Rooke y las Termópilas de Paya.",
        url: "https://academiahistoria.org.co/",
      },
      {
        type: "Portal turístico",
        title: "Alcaldía de Paipa – Portal Turístico (Descubre Paipa)",
        author: "Alcaldía de Paipa",
        year: "s.f.",
        description:
          "Consultado para el Parque Jaime Rooke, el municipio de Paipa y el Pantano de Vargas.",
        url: "https://descubrepaipa.com/",
      },
      {
        type: "Archivo digital",
        title: "Archivo General de la Nación de Colombia",
        author: "Archivo General de la Nación",
        year: "s.f.",
        description:
          "Consultado para Boyacá, El Chicamocha, los cerros El Picacho y El Cangrejo, Paipa, el Pantano de Vargas y el Puente de Boyacá.",
        url: "https://www.archivogeneral.gov.co/",
      },
      {
        type: "Biblioteca virtual",
        title: "Banco de la República – Biblioteca Virtual",
        author: "Banco de la República",
        year: "s.f.",
        description:
          "Consultado para Boyacá, El Chicamocha, los cerros El Picacho y El Cangrejo, Paipa y el Pantano de Vargas.",
        url: "https://www.banrepcultural.org/",
      },
      {
        type: "Biblioteca digital",
        title: "Biblioteca Virtual Miguel de Cervantes",
        author: "Biblioteca Virtual Miguel de Cervantes",
        year: "s.f.",
        description: "Consultada como referencia general sobre Boyacá.",
        url: "https://www.cervantesvirtual.com/",
      },
      {
        type: "Documento oficial",
        title: "Concejo Municipal de Paipa – Acuerdo 036 de 2004",
        author: "Concejo Municipal de Paipa",
        year: "2004",
        description:
          "Acuerdo que declara la Casa Varguitas, la Casa de las Seis Ventanas y el Cerro de la Guerra como Patrimonio Histórico y Cultural de Paipa.",
        url: "https://concejo-municipal-de-paipa.micolombiadigital.gov.co/sites/concejo-municipal-de-paipa/content/files/000442/22053_acuerdo-036-de-2004.pdf",
      },
      {
        type: "Reseña institucional",
        title: "Ejército Nacional de Colombia – Reseña Histórica",
        author: "Ejército Nacional de Colombia",
        year: "s.f.",
        description:
          "Consultado para Boyacá, El Chicamocha, los cerros El Picacho y El Cangrejo, Paipa, el Pantano de Vargas (reseña de la batalla), la Casa de las Seis Ventanas, Pisba, el Puente de Boyacá y el Parque Jaime Rooke.",
        url: "https://www.ejercito.mil.co/index.php?idcategoria=410068",
      },
      {
        type: "Enciclopedia digital",
        title: "Enciclopedia de la Red Cultural del Banco de la República",
        author: "Banco de la República",
        year: "s.f.",
        description:
          "Consultada para el Parque Jaime Rooke, el Páramo de Pisba, el Puente de Boyacá y las Termópilas de Paya.",
        url: "https://enciclopedia.banrepcultural.org/",
      },
      {
        type: "Diccionario histórico",
        title: "Fundación Empresas Polar – Diccionario de Historia de Venezuela",
        author: "Fundación Empresas Polar",
        year: "s.f.",
        description:
          "Entrada sobre la Batalla del Pantano de Vargas, consultada para el Parque Jaime Rooke.",
        url: "https://bibliofep.fundacionempresaspolar.org/dhv/entradas/p/pantano-de-vargas-batalla-de/",
      },
      {
        type: "Guía institucional",
        title: "Gobernación de Boyacá – Ruta Libertadora",
        author: "Gobernación de Boyacá",
        year: "s.f.",
        description:
          "Guía de la Ruta Libertadora y los municipios boyacenses ligados a la Campaña de 1819. Consultada para El Chicamocha, la Casa de las Seis Ventanas, Paipa, Pisba, el Puente de Boyacá, las Termópilas de Paya y, previamente, para Simona Amaya.",
        url: "http://sedboyaca.gov.co/wp-content/uploads/2019/02/ruta-libertadora-guia-ruta.pdf",
      },
      {
        type: "Instituto de investigación",
        title: "Instituto Colombiano de Antropología e Historia (ICANH)",
        author: "ICANH",
        year: "s.f.",
        description:
          "Consultado para Boyacá, los cerros El Picacho y El Cangrejo, y el Pantano de Vargas.",
        url: "https://www.icanh.gov.co/",
      },
      {
        type: "Medio de comunicación",
        title: "Radio Nacional de Colombia",
        author: "Radio Nacional de Colombia",
        year: "s.f.",
        description:
          "Consultada para el Combate de Paya («Qué fue el combate de Paya») y para el Parque Jaime Rooke («La Legión Británica en la independencia de la Nueva Granada»).",
        url: "https://www.radionacional.co/cultura/que-fue-el-combate-de-paya",
      },
      {
        type: "Archivo audiovisual",
        title: "Señal Memoria",
        author: "Señal Memoria",
        year: "s.f.",
        description: "Consultado para las Termópilas de Paya.",
        url: "https://www.senalmemoria.co/piezas/termopilas-de-paya-historia",
      },
      {
        type: "Artículo académico",
        title: "Universidad Nacional de Colombia – Revista Maguaré",
        author: "Rodríguez Cuenca, J. V. y Borrero, L. D. (2014)",
        year: "2014",
        description:
          "«La batalla del Pantano de Vargas. 25 de julio de 1819, Paipa, Boyacá, Nueva Granada». Consultado para los cerros El Picacho y El Cangrejo, y para la Casa de las Seis Ventanas.",
        url: "https://revistas.unal.edu.co/index.php/maguare/article/view/54727",
      },
    ],
  },
  {
    id: "historia-antecedentes",
    label: "Historia y Antecedentes de la Batalla",
    icon: "scroll",
    items: [
      {
        type: "Portal institucional",
        title: "Academia Colombiana de Historia",
        author: "Academia Colombiana de Historia",
        year: "s.f.",
        description:
          "Boletín de Historia y Antigüedades. Consultado para la Campaña Libertadora, el Combate de Paya, el cruce del Páramo de Pisba, los combates de Gámeza y Tópaga, y la Batalla de Boyacá.",
        url: "https://academiahistoria.org.co/",
      },
      {
        type: "Archivo digital",
        title: "Archivo General de la Nación de Colombia",
        author: "Archivo General de la Nación",
        year: "s.f.",
        description:
          "Consultado para la Campaña Libertadora, el cruce del Páramo de Pisba, los combates de Gámeza y Tópaga, y la Batalla de Boyacá.",
        url: "https://www.archivogeneral.gov.co/",
      },
      {
        type: "Biblioteca virtual",
        title: "Banco de la República – Biblioteca Virtual",
        author: "Banco de la República",
        year: "s.f.",
        description:
          "Consultado para la Campaña Libertadora y los combates de Gámeza y Tópaga.",
        url: "https://www.banrepcultural.org/",
      },
      {
        type: "Biblioteca digital",
        title: "Biblioteca Virtual Miguel de Cervantes",
        author: "Biblioteca Virtual Miguel de Cervantes",
        year: "s.f.",
        description:
          "Consultada para la Campaña Libertadora y el parte oficial de la Batalla de Boyacá.",
        url: "https://www.cervantesvirtual.com/",
      },
      {
        type: "Reseña institucional",
        title: "Ejército Nacional de Colombia – Reseña Histórica",
        author: "Ejército Nacional de Colombia",
        year: "s.f.",
        description:
          "Consultado para la Campaña Libertadora, el cruce del Páramo de Pisba, los combates de Gámeza y Tópaga, y la Batalla de Boyacá.",
        url: "https://www.ejercito.mil.co/",
      },
      {
        type: "Enciclopedia digital",
        title: "Enciclopedia de la Red Cultural del Banco de la República",
        author: "Banco de la República",
        year: "s.f.",
        description:
          "Consultada para el Páramo de Pisba y la Batalla de Boyacá (Puente de Boyacá).",
        url: "https://enciclopedia.banrepcultural.org/",
      },
      {
        type: "Diccionario histórico",
        title: "Fundación Empresas Polar – Diccionario de Historia de Venezuela",
        author: "Fundación Empresas Polar",
        year: "s.f.",
        description: "Consultado como contexto general de la Campaña Libertadora.",
        url: "https://bibliofep.fundacionempresaspolar.org/dhv",
      },
      {
        type: "Guía institucional",
        title: "Gobernación de Boyacá – Ruta Libertadora",
        author: "Gobernación de Boyacá",
        year: "s.f.",
        description:
          "Consultada para el cruce del Páramo de Pisba, los combates de Gámeza y Tópaga, y la Batalla de Boyacá.",
        url: "http://sedboyaca.gov.co/wp-content/uploads/2019/02/ruta-libertadora-guia-ruta.pdf",
      },
      {
        type: "Instituto de investigación",
        title: "Instituto Colombiano de Antropología e Historia (ICANH)",
        author: "ICANH",
        year: "s.f.",
        description: "Consultado como contexto general de la Campaña Libertadora.",
        url: "https://www.icanh.gov.co/",
      },
      {
        type: "Archivo audiovisual",
        title: "Señal Memoria",
        author: "Señal Memoria",
        year: "s.f.",
        description: "«El paso por el Páramo de Pisba», consultado para el cruce de Pisba.",
        url: "https://www.senalmemoria.co/",
      },
      {
        type: "Artículo académico",
        title: "Universidad Nacional de Colombia – Revista Maguaré",
        author: "Universidad Nacional de Colombia",
        year: "s.f.",
        description:
          "Arqueología de campos de batalla, consultada para los combates de Gámeza y Tópaga.",
        url: "https://revistas.unal.edu.co/index.php/maguare",
      },
    ],
  },
  {
    id: "creditos",
    label: "Créditos",
    icon: "credits",
    items: [
      {
        type: "Créditos",
        title: "Dirección Académica del Proyecto",
        author: "Manuel Francisco Corredor Rodríguez",
        year: "2025",
        description:
          "Director del anteproyecto de semillero de investigación «Narrativa Web Interactiva para Divulgar la Historia de la Batalla del Pantano de Vargas, Paipa», Universidad de Boyacá.",
        url: "#",
      },
      {
        type: "Créditos",
        title:
          "Narrativa Web Interactiva para Divulgar la Historia de la Batalla del Pantano de Vargas, Paipa",
        author: "David Santiago Amaya Reyes",
        year: "2025",
        description:
          "Trabajo de anteproyecto de semillero de investigación a cargo de David Santiago Amaya Reyes, estudiante del Programa de Ingeniería en Multimedia, Facultad de Ciencia e Ingeniería, Universidad de Boyacá (Tunja). Investigación, diseño narrativo, ilustración y desarrollo del sitio.",
        url: "#",
      },
    ],
  },
];
