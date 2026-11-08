export type Seccion = {
  titulo: string;
  parrafos: string[];
};

export type Herramienta = {
  slug: string;
  nombre: string;
  tagline: string;
  resumen: string;
  tipo: string;
  enlace: string;
  etiquetas: string[];
  secciones: Seccion[];
};

export type Bloque = {
  slug: string;
  nombre: string;
  titulo: string;
  descripcion: string;
  herramientas: Herramienta[];
};

export const BLOQUES: Bloque[] = [
  {
    slug: "ideacion",
    nombre: "Ideación",
    titulo: "De la chispa al concepto compartido",
    descripcion:
      "Herramientas para generar, estructurar y validar ideas: lluvia de ideas, mapas mentales, pizarras colaborativas y ejes visuales que convierten las conversaciones en conceptos accionables.",
    herramientas: [
      {
        slug: "miro",
        nombre: "Miro",
        tagline: "La pizarra colaborativa infinita por excelencia.",
        resumen:
          "Miro es una pizarra digital infinita pensada para que los equipos trabajen juntos de forma visual y en tiempo real. Durante la ideación es, probablemente, la herramienta más usada del mercado porque reúne lluvia de ideas, diagramas y votación en un único lienzo.",
        tipo: "Pizarra colaborativa",
        enlace: "https://miro.com",
        etiquetas: ["Pizarra", "Tiempo real", "Retrospectivas", "Mapas mentales", "Plantillas"],
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Miro es una plataforma de colaboración visual basada en un lienzo infinito de zoom. Puedes arrastrar notas adhesivas, conectores, marcos, imágenes y documentos mientras el resto del equipo mira y edita simultáneamente desde cualquier dispositivo.",
              "Nació como RealtimeBoard y hoy es el estándar de facto para pizarras en remoto: se integra con Zoom, Slack, Microsoft Teams y prácticamente cualquier herramienta de trabajo.",
            ],
          },
          {
            titulo: "Cómo encaja en la fase de ideación",
            parrafos: [
              "Durante la ideación, Miro aporta un espacio único donde conviven el brainstorming, la agrupación de ideas, la votación y la documentación. Un flujo típico consiste en abrir una plantilla de lluvia de ideas, fijar un temporizador, dejar que cada persona aporte sus post-its y, después, agruparlos y votar con gomets (stickers).",
              "El resultado es un mapa visual que se puede exportar o convertir directamente en una matriz de priorización o en tareas dentro de otra herramienta.",
            ],
          },
          {
            titulo: "Casos de uso",
            parrafos: [
              "Brainstorming y brainwriting sincrónico o asíncrono, donde la asincronía (mundo async) es especialmente valiosa para equipos de husos horarios distintos.",
              "Mapas mentales y diagramas de flujo rápidos durante la exploración de soluciones.",
              "Retrospectivas ágiles (bien, mejorar, hacer) tras una iteración.",
              "Priorización con matrices (impacto/esfuerzo), votación con stickers y tomas de decisión grupales.",
            ],
          },
          {
            titulo: "Ventajas",
            parrafos: [
              "Curva de aprendizaje muy corta: cualquier persona puede empezar a usar el lienzo en minutos.",
              "Gran ecosistema de plantillas oficiales y comunitarias para todo tipo de dinámicas.",
              "Integraciones con las herramientas del día a día (Slack, Teams, Zoom, Jira, Confluence).",
              "El lienzo infinito permite conectar ideas grandes con nivel de detalle creciente.",
            ],
          },
          {
            titulo: "Limitaciones",
            parrafos: [
              "Sin moderación, un lienzo abierto puede convertirse en caos visual; necesita un facilitador que lo estructure.",
              "La versión gratuita limita el número de tableros privados y los diagramas complejos pueden volverse pesados cuando hay cientos de objetos.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Define siempre un objetivo y un facilitador antes de lanzar la sesión.",
              "Usa los marcos (frames) para ordenar la pizarra por fases y evitar el scroll infinito desorientador.",
              "Termina cada sesión con una síntesis visible: qué decidimos y cuáles son los siguientes pasos.",
            ],
          },
        ],
      },
      {
        slug: "xmind",
        nombre: "XMind",
        tagline: "Mapas mentales para estructurar el pensamiento.",
        resumen:
          "XMind es una herramienta especializada en mapas mentales. Mientras que una pizarra sirve para abrir el abanico de ideas, XMind ayuda a cerrarlo: convierte la dispersión inicial en una estructura jerárquica clara con ramas, prioridades y relaciones.",
        tipo: "Mapas mentales",
        enlace: "https://xmind.app",
        etiquetas: ["Mapas mentales", "Estructura", "Jerarquía", "Diagramas"],
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "XMind es un software de mapas mentales disponible en escritorio, móvil y web. Permite crear diagramas radiales partiendo de una idea central y ramificando subtemas, con notas, iconos, marcadores y estilos visuales predefinidos.",
              "Su enfoque es muy distinto al de una pizarra: en lugar de explorar en horizontal, fuerza un orden jerárquico que resulta ideal para entender la estructura de un problema.",
            ],
          },
          {
            titulo: "Cómo encaja en la fase de ideación",
            parrafos: [
              "La ideación tiene dos momentos: divergir (generar muchas ideas) y convergir (seleccionar y ordenar). XMind es la herramienta perfecta para la convergencia: después de un brainstorming en Miro, se puede volcar lo aprendido en un mapa mental que muestre de un vistazo las alternativas, sus relaciones y sus dependencias.",
              "También es muy útil antes de la ideación, para abrir el espacio mental: descomponer el problema en partes para atacar cada una por separado.",
            ],
          },
          {
            titulo: "Casos de uso",
            parrafos: [
              "Descomposición de un problema o reto en subproblemas manejables (por ejemplo, un árbol de objetivos).",
              "Mapas de comparación de alternativas de solución con notas y pesos.",
              "Planificación de la estructura de un documento, entregable o presentación.",
              "Toma de notas visuales de una sesión de lluvia de ideas.",
            ],
          },
          {
            titulo: "Ventajas",
            parrafos: [
              "Fuerza la estructura y la jerarquía, lo que ayuda a que el equipo hable sobre prioridades.",
              "Exportación a múltiples formatos (PNG, PDF, Markdown, texto plano) para arrastrar el resultado a otras herramientas.",
              "Rápido: crear un mapa mental bien ordenado cuesta minutos.",
            ],
          },
          {
            titulo: "Limitaciones",
            parrafos: [
              "La colaboración en tiempo real es limitada comparada con una pizarra; es más una herramienta individual o de síntesis.",
              "No es adecuada para flujos muy visuales o jerárquicos no radiales; sus diagramas de espina de pescado o árbol cubren la mayoría de casos.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Usa los marcadores de prioridad (P1, P2, P3) en cada rama para que el mapa sirva también como planificación.",
              "Limita la profundidad: si superas cuatro niveles de subramas, probablemente necesitas dividir el mapa.",
              "Una sola idea por rama mantiene el mapa legible.",
            ],
          },
        ],
      },
      {
        slug: "figjam",
        nombre: "FigJam",
        tagline: "Pizarras ligeras que nacen pegadas al diseño.",
        resumen:
          "FigJam es la pizarra colaborativa de la familia Figma. Si el equipo ya trabaja con Figma para diseño, FigJam ofrece la transición más natural entre la ideación y el prototipado, porque los elementos de la pizarra se conectan directamente con los proyectos de diseño.",
        tipo: "Pizarra colaborativa",
        enlace: "https://www.figma.com/figjam/",
        etiquetas: ["Pizarra", "Diseño", "Sticky notes", "Diagramas", "Figma"],
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "FigJam es la herramienta de pizarra blanca de Figma: un lienzo colaborativo con plumas, notas adhesivas, formas, stencils (plantillas de diagramas) y una estética cuidada y ligera.",
              "Está pensada para la fase de descubrimiento y lluvia de ideas dentro del ecosistema Figma, de forma que lo que nace en la pizarra puede saltar a un archivo de diseño con un único clic.",
            ],
          },
          {
            titulo: "Cómo encaja en la fase de ideación",
            parrafos: [
              "FigJam brilla en equipos de producto y diseño que necesitan pasar rápido de la conversación al diseño. La lluvia de ideas clásica con post-its, la votación con emojis y los diagramas rápidos funcionan muy fluidos, y el salto a Figma para prototipar es inmediato.",
            ],
          },
          {
            titulo: "Casos de uso",
            parrafos: [
              "Sesiones de idea a diseño: de una hipótesis en post-its a un flujo de pantallas.",
              "Customer journey y service blueprint dibujados en directo con el equipo.",
              "Votaciones rápidas con emoticonos y reacciones en tiempo real.",
              "Talleres con la comunidad FigJam que comparte plantillas listas para usar.",
            ],
          },
          {
            titulo: "Ventajas",
            parrafos: [
              "Integración total con Figma: lo que se dibuja en FigJam puede pasar al canvas de diseño.",
              "Tiene widgets y plantillas muy logradas para talleres y dinámicas ágiles.",
              "Interfaz limpia y ágil que invita a participar, incluso a personas no técnicas.",
            ],
          },
          {
            titulo: "Limitaciones",
            parrafos: [
              "El lienzo es menos potente para diagramas técnicos grandes que herramientas específicas.",
              "La promoción separada de Figma hace que, fuera de equipos de diseño, muchos prefieran Miro.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Aprovecha el modo jam con temporizador integrado para mantener el ritmo de la sesión.",
              "Conecta los resultados con un archivo Figma de seguimiento para no perder lo decidido.",
            ],
          },
        ],
      },
      {
        slug: "stormboard",
        nombre: "Stormboard",
        tagline: "Tormentas de ideas organizadas por columnas.",
        resumen:
          "Stormboard es una herramienta de brainstorming digital que organiza la lluvia de ideas en tableros tipo kanban de ideas. Cada idea es una tarjeta que se puede votar, agrupar, convertir en tarea y discutir, lo que la hace ideal para sesiones con un flujo claro de entradas, análisis y decisiones.",
        tipo: "Brainstorming",
        enlace: "https://stormboard.com",
        etiquetas: ["Brainstorming", "Tarjetas", "Votación", "Decisiones"],
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Stormboard es una pizarra de ideas digital donde los participantes escriben sus aportaciones como tarjetas (sticky notes) en columnas predeterminadas. Al ser una cuadrícula, combina lo visual de una pizarra con el orden de una tabla.",
              "Cada tarjeta admite discusión, comentarios, votos, adjuntos y la conversión directa en tareas dentro de herramientas de gestión como Jira o Asana.",
            ],
          },
          {
            titulo: "Cómo encaja en la fase de ideación",
            parrafos: [
              "Su estructura por columnas encaja con procesos de ideación guiados: una columna para generar ideas, otra para agruparlas por temas, otra para votarlas y otra para convertirlas en acciones. La herramienta acompaña todo el ciclo de vida de la idea sin salir del tablero.",
            ],
          },
          {
            titulo: "Casos de uso",
            parrafos: [
              "Talleres estructurados de generación de ideas con un moderador que fija tiempos por columna.",
              "Detección de ideas comunes votando tarjetas duplicadas.",
              "Reuniones de priorización donde cada tarjeta acaba siendo una tarea en el gestor de proyectos.",
            ],
          },
          {
            titulo: "Ventajas",
            parrafos: [
              "El paso de idea a tarea es directo y no se pierde información entre sesiones.",
              "Muy adecuada para equipos que quieren órdenes de trabajo claras, no un lienzo libre.",
            ],
          },
          {
            titulo: "Limitaciones",
            parrafos: [
              "Menos flexible que un lienzo infinito para dibujos y diagramas.",
              "Si el equipo prefiere libertad total, una pizarra tipo Miro puede resultar más natural.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Predefine las columnas del tablero antes de la sesión para que la dinámica no se desvíe.",
              "Fija un número máximo de votos por persona para forzar priorización.",
            ],
          },
        ],
      },
      {
        slug: "whimsical",
        nombre: "Whimsical",
        tagline: "Mapas, diagramas y prototipos en un santiamén.",
        resumen:
          "Whimsical es una herramienta de diagramas y mapas conceptuales que destaca por su velocidad y su estética limpia. Combina mapas mentales, diagramas de flujo, wireframes y tableros en una sola aplicación pensada para la fase temprana de cualquier proyecto.",
        tipo: "Diagramas y mapas",
        enlace: "https://whimsical.com",
        etiquetas: ["Diagramas", "Mapas mentales", "Wireframes", "Flujos"],
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Whimsical ofrece un creador de diagramas rápido y minimalista con modo de dibujo a mano alzada (el llamado infinity mode), mapas mentales, diagramas de flujo, calendarios, tableros y simples wireframes.",
              "Su propuesta es la de 'antes de las herramientas pesadas': cubrir las necesidades de comunicación visual de la fase de descubrimiento sin complejidad.",
            ],
          },
          {
            titulo: "Cómo encaja en la fase de ideación",
            parrafos: [
              "Es perfecta para pasar de la idea a la visualización en minutos. Un mapa mental para desplegar opciones, un diagrama de flujo para entender el recorrido del usuario o un wireframe rápido para dar forma a una pantalla, todo en una sola aplicación.",
            ],
          },
          {
            titulo: "Casos de uso",
            parrafos: [
              "Mapas mentales para la descomposición de retos de negocio.",
              "Diagramas de flujo de procesos antes de la ejecución técnica.",
              "Wireframes descartables para validar la forma de una pantalla con el usuario.",
            ],
          },
          {
            titulo: "Ventajas",
            parrafos: [
              "Rapidez absoluta: en dos clics tienes un diagrama presentable.",
              "Interfaz minimalista que reduce el ruido y la fricción.",
              "Buenas bases de plantillas para procesos estándar (recorridos, historias de usuario).",
            ],
          },
          {
            titulo: "Limitaciones",
            parrafos: [
              "La colaboración en tiempo real es algo más limitada que en grandes pizarras.",
              "La versión gratuita tiene límite de elementos en cada archivo.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Usa el modo espejo o copiar enlace para compartir borradores sin sesión.",
              "Combínalo con una herramienta de ejecución: lo que aquí se dibuja, allí se ejecuta.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "conocimiento",
    nombre: "Conocimiento",
    titulo: "Ordena lo que el equipo aprende",
    descripcion:
      "Herramientas para capturar, documentar y compartir el conocimiento del equipo: wikis, bases de conocimiento, notas y espacios colaborativos que evitan que el saber quede en conversaciones sueltas.",
    herramientas: [
      {
        slug: "notion",
        nombre: "Notion",
        tagline: "El espacio de trabajo todo-en-uno.",
        resumen:
          "Notion combina notas, documentación, bases de datos, wikis y gestión de tareas en una única herramienta flexible. Gracias a sus bases de datos relacionales es la opción favorita de muchos equipos para construir un centro de conocimiento vivo sin comprar varias aplicaciones.",
        tipo: "Notas y wiki",
        enlace: "https://www.notion.so",
        etiquetas: ["Wiki", "Bases de datos", "Notas", "Documentación"],
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Notion es una aplicación que permite construir páginas con bloques de distintos tipos: texto, tablas, bases de datos, kanban, calendarios, fórmulas o rollups. Es un lienzo flexible donde cada equipo define su propia estructura.",
              "Esta flexibilidad la ha convertido en el cubre-todo más popular: sirve como escritorio personal, wiki de empresa, gestor de tareas, base de datos de clientes o espacio de cursos, a menudo a la vez.",
            ],
          },
          {
            titulo: "Cómo encaja en la fase de conocimiento",
            parrafos: [
              "El conocimiento necesita de tres prácticas: capturarlo, estructurarlo y difundirlo. Notion aborda las tres: se captura rápido con una página, se estructura con bases de datos (por ejemplo, por área, autor o estado) y se difunde compartiendo enlaces o exportando.",
              "Su verdadera potencia está en las bases de datos: una misma lista puede verse como tabla, kanban, calendario o galería, lo que hace que la información se adapte al contexto, no al revés.",
            ],
          },
          {
            titulo: "Casos de uso",
            parrafos: [
              "Centro de conocimiento del proyecto: decisiones, glosarios, preguntas frecuentes y aprendizajes.",
              "Base de datos de herramientas y herramientas evaluadas en la fase de ideación.",
              "Portal de onboarding para recién llegados con guías y enlaces.",
              "Acta de reuniones con acción y responsable enlazados a tareas.",
            ],
          },
          {
            titulo: "Ventajas",
            parrafos: [
              "Flexibilidad casi ilimitada para modelar la información como quieras.",
              "Ecosistema amplio de plantillas de la comunidad.",
              "Apis e integraciones con la mayoría de herramientas del ecosistema.",
              "Buen balance precio/funcionalidad para equipos pequeños.",
            ],
          },
          {
            titulo: "Limitaciones",
            parrafos: [
              "La flexibilidad tiene un coste: sin convenciones puede convertirse en un caos de páginas.",
              "El editor de texto es menos potente que el de herramientas específicas tipo Google Docs.",
              "Permisos granulares avanzados (por fila o metadatos) son más complicados que en wikis tradicionales.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Define un índice maestro (hub) que enlace las áreas principales del conocimiento.",
              "Establece responsables por página o por base de datos para mantenerla al día.",
              "Usa plantillas por tipo de documento (lección aprendida, acta, guía) para mantener la coherencia.",
            ],
          },
        ],
      },
      {
        slug: "confluence",
        nombre: "Confluence",
        tagline: "La wiki corporativa de referencia en entornos Jira.",
        resumen:
          "Confluence es la plataforma de documentación y wiki de Atlassian. Pensada para equipos que ya trabajan con Jira, integra la documentación del proyecto con las incidencias y los flujos de trabajo, convirtiéndose en la fuente de verdad del equipo técnico y de producto.",
        tipo: "Wiki corporativa",
        enlace: "https://www.atlassian.com/software/confluence",
        etiquetas: ["Wiki", "Documentación", "Jira", "Corporativo"],
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Confluence es una wiki empresarial donde los equipos redactan páginas estructuradas en espacios (espacios de proyecto, de equipo o de producto). Cada página admite macros, tablas, adjuntos y un historial de versiones completo.",
              "Es el repositorio documental clásico de las empresas que ya usan el ecosistema Atlassian: el plan, las actas, las decisiones y las especificaciones viven en Confluence mientras las tareas viven en Jira.",
            ],
          },
          {
            titulo: "Cómo encaja en la fase de conocimiento",
            parrafos: [
              "Confluence ofrece lo que los equipos corporativos necesitan para que el conocimiento deje de ser tribal: espacios con permisos claros, plantillas de buenas prácticas, aprobaciones, versionado y búsqueda potente en toda la organización.",
              "La integración con Jira permite enlazar una especificación con las incidencias que la implementan, cerrando el círculo entre lo que se sabe y lo que se hace.",
            ],
          },
          {
            titulo: "Casos de uso",
            parrafos: [
              "Documentación de requisitos y especificaciones técnicas de un proyecto.",
              "Bases de conocimiento de producto y de soporte.",
              "Actas de comités de seguimiento con acciones enlazadas a Jira.",
              "Normativa interna, guías de estilo y procesos de empresa.",
            ],
          },
          {
            titulo: "Ventajas",
            parrafos: [
              "Estructura de espacios y permisos muy adecuada para organizaciones grandes.",
              "Integración nativa con Jira y todo el ecosistema Atlassian.",
              "Plantillas oficiales de calidad y sistema de aprobación de contenidos.",
            ],
          },
          {
            titulo: "Limitaciones",
            parrafos: [
              "Editor de páginas menos fluido y moderno que Notion.",
              "Curva de aprendizaje para administración (espacios, permisos, macros).",
              "Coste por usuario que penaliza a equipos pequeños.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Estructura los espacios por proyecto/producto y por equipo transversal.",
              "Designa un 'bibliotecario' de conocimiento que valide la calidad de las páginas clave.",
              "Aprovecha los enlaces entre páginas para no duplicar información entre espacios.",
            ],
          },
        ],
      },
      {
        slug: "obsidian",
        nombre: "Obsidian",
        tagline: "Conocimiento enlazado con Markdown local.",
        resumen:
          "Obsidian es una aplicación de notas basada en archivos Markdown locales donde cada nota puede enlazarse con otras, creando una red de conocimiento (grafo). Es la herramienta predilecta de quienes piensan que el conocimiento se construye enlazando y reutilizando ideas.",
        tipo: "Notas enlazadas",
        enlace: "https://obsidian.md",
        etiquetas: ["Markdown", "Grafo", "Notas", "Privacidad"],
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Obsidian es un editor de notas en Markdown plano almacenadas en tu propio disco. Su característica estrella es el grafo: cada nota puede enlazar otras mediante [[wikilinks]], y esas conexiones dibujan un mapa visual de cómo se relacionan las ideas.",
              "Todo el conocimiento vive en archivos .md locales, lo que garantiza propiedad total de los datos, exportación trivial y velocidad.",
            ],
          },
          {
            titulo: "Cómo encaja en la fase de conocimiento",
            parrafos: [
              "Es perfecta para conocimiento personal y de investigación: la técnica del segundo cerebro (Zettelkasten) se apoya en este tipo de herramientas. Cada lección aprendida, referencia o decisión puede convertirse en una nota enlazada que se reutiliza en distintos contextos.",
              "Su grafo ayuda a descubrir conexiones no evidentes entre temas aparentemente sueltos, algo muy valioso en la investigación y la maduración de ideas.",
            ],
          },
          {
            titulo: "Casos de uso",
            parrafos: [
              "Investigación y síntesis académica o de producto.",
              "Diario de decisiones (decision log) con enlaces a los documentos que las motivaron.",
              "Base de conocimiento personal reutilizable por el equipo de trabajos seleccionados.",
              "Desarrollo de metodologías y plantillas conectadas entre sí.",
            ],
          },
          {
            titulo: "Ventajas",
            parrafos: [
              "Datos locales y abiertos: sin vendor lock-in, se puede migrar a cualquier editor Markdown.",
              "Velocidad y ligereza, incluso con miles de notas.",
              "Ecosistema enorme de plugins de la comunidad.",
            ],
          },
          {
            titulo: "Limitaciones",
            parrafos: [
              "La colaboración en tiempo real es débil fuera de soluciones de sincronización de pago.",
              "No es una wiki hecho a medida para equipos: carece de permisos nativos por rol.",
              "El grafo puede convertirse en una telaraña poco útil sin una disciplina de enlaces.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Enlaza todo: una nota sin enlaces es una isla que se pierde.",
              "Crea una planta MOC (mapa de contenido) superior que organice las notas del área.",
              "Sincroniza con un repositorio de archivos para tener copia y colaboración.",
            ],
          },
        ],
      },
      {
        slug: "google-workspace",
        nombre: "Google Workspace (Docs & Drive)",
        tagline: "Documentación colaborativa en la nube, sin instalar nada.",
        resumen:
          "Google Workspace, con Docs, Drive y Sheets, es la solución de colaboración documental más extendida del mundo. Su edición simultánea, los comentarios y los permisos sencillos la convierten en la puerta de entrada natural al conocimiento de cualquier equipo, especialmente en entornos no técnicos.",
        tipo: "Suites documental",
        enlace: "https://workspace.google.com",
        etiquetas: ["Docs", "Drive", "Colaboración", "Permisos"],
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Es el conjunto de herramientas ofimáticas en la nube de Google: documentos, hojas de cálculo, presentaciones, formularios, Drive para almacenamiento y Calendar. Todo con edición en tiempo real y control de versiones automático.",
              "No existe 'guardar': la herramienta guarda continuamente, y cada cambio queda registrado en el historial de versiones con su autor.",
            ],
          },
          {
            titulo: "Cómo encaja en la fase de conocimiento",
            parrafos: [
              "El conocimiento, en su forma más básica, es un documento compartido: una guía, un acta, un análisis. Google Docs hace esa barrera de entrada mínima: cualquier persona puede crear, editar, comentar y sugerir cambios sin formación previa.",
              "Los comentarios y las sugerencias permiten revisar de forma transparente, y los permisos (lectura, comentario, edición) controlan quién puede tocar qué.",
            ],
          },
          {
            titulo: "Casos de uso",
            parrafos: [
              "Documentos de partida y borradores colaborativos en reuniones.",
              "Matriz de decisiones con Sheets y validaciones.",
              "Repositorio documental inicial por carpetas compartidas de Drive.",
              "Formularios de feedback y recogida de conocimiento del equipo.",
            ],
          },
          {
            titulo: "Ventajas",
            parrafos: [
              "Barrera de entrada casi nula: todo el mundo sabe usarlo.",
              "Edición y comentarios en tiempo real impecables.",
              "Integración total con el ecosistema Google y correo.",
              "Gratuito para equipos pequeños y escalable de forma simple.",
            ],
          },
          {
            titulo: "Limitaciones",
            parrafos: [
              "El conocimiento vive en carpetas, no en una estructura wiki potente (sin relación entre documentos).",
              "Escasa potencia de búsqueda semántica frente a wikis específicas.",
              "Los permisos a gran escala pueden convertirse en una maraña de carpetas.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Crea una estructura de carpetas estándar por proyecto/etapa y documentala.",
              "Usa siempre 'sugerencias' en documentos a revisar, no edición directa.",
              "Eleva los documentos clave a una wiki (Notion o Confluence) cuando la estructura de carpetas se quede corta.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "ejecucion",
    nombre: "Ejecución",
    titulo: "De las ideas claras a los resultados",
    descripcion:
      "Herramientas para planificar, organizar y hacer seguimiento del trabajo: tableros, sprints, cronogramas y gestión de tareas que convierten los conceptos en entregables medibles.",
    herramientas: [
      {
        slug: "jira",
        nombre: "Jira Software",
        tagline: "El estándar para la gestión ágil de proyectos de software.",
        resumen:
          "Jira Software de Atlassian es la herramienta de ejecución por excelencia en entornos de desarrollo de software y equipos ágiles. Sus tableros de sprint, el backlog y la trazabilidad de incidencias la convierten en el centro de operaciones de miles de equipos de producto y tecnología.",
        tipo: "Gestión ágil de proyectos",
        enlace: "https://www.atlassian.com/software/jira",
        etiquetas: ["Scrum", "Kanban", "Sprints", "Backlog", "Incidencias"],
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Jira Software es un gestor de proyectos y seguimiento de incidencias orientado a metodologías ágiles (Scrum y Kanban). Organiza el trabajo en issues (historias, tareas, bugs) que fluyen por un tablero de columnas y que se agrupan en sprints.",
              "Aunque nació para software, su flexibilidad de flujos de trabajo la ha llevado también a equipos de negocio, marketing y operaciones.",
            ],
          },
          {
            titulo: "Cómo encaja en la fase de ejecución",
            parrafos: [
              "La ejecución exige tres cosas: un backlog priorizado, sprints con compromiso y visibilidad del progreso. Jira da soporte a las tres: el backlog es el embudo de todo el trabajo por hacer, los sprints en Scrum fijan ciclos de entrega y los tableros muestran el flujo real del trabajo.",
              "Su densidad de información (burndown, velocidad, diagrama de flujo acumulado) permite a los responsables tomar decisiones basadas en datos, no en impresiones.",
            ],
          },
          {
            titulo: "Casos de uso",
            parrafos: [
              "Equipos Scrum que trabajan por sprints de 2 semanas con backlog refinado.",
              "Equipos Kanban con flujo continuo (soporte, operaciones).",
              "Roadmaps de producto conectando épicas e incidencias.",
              "Informes de seguimiento (burndown, velocidad, CFD) para el comité de proyecto.",
            ],
          },
          {
            titulo: "Ventajas",
            parrafos: [
              "Altísima capacidad de personalización de flujos, campos y permisos.",
              "Ecosistema de integraciones enorme (Slack, CI/CD, Confluence, tiempos).",
              "Estándar de mercado: plantilla para contratar, pedir y auditar.",
            ],
          },
          {
            titulo: "Limitaciones",
            parrafos: [
              "Curva de aprendizaje alta, tanto para usuarios como para administración.",
              "La configuración abierta puede generar flujos heterogéneos entre equipos.",
              "Coste por usuario y configuración compleja para equipos pequeños.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Simplifica el flujo: empieza con pocas columnas e issues y añade complejidad solo con necesidad.",
              "Define una Definition of Done clara para que el tablero refleje la realidad.",
              "Configura fechas de vencimiento y usa los informes, no el color, para gestionar el riesgo.",
            ],
          },
        ],
      },
      {
        slug: "trello",
        nombre: "Trello",
        tagline: "Kanban sencillo que vale para todo.",
        resumen:
          "Trello es la herramienta de tableros kanban más simple y reconocible del mercado. Es ideal para equipos y procesos que necesitan ordenar tareas visualmente sin cargar con la complejidad de Jira. Su modelo de listas y tarjetas se entiende en cinco minutos.",
        tipo: "Tableros kanban",
        enlace: "https://trello.com",
        etiquetas: ["Kanban", "Tarjetas", "Sencillez", "Equipos pequeños"],
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Trello organiza el trabajo en tableros compuestos por listas; dentro de cada lista hay tarjetas que representan tareas. Cada tarjeta puede tener descripción, checklist, fechas, etiquetas de color, comentarios y adjuntos.",
              "Es la materialización pura de la metodología Kanban: ver todo el trabajo en pila, arrastrarlo de columna y limitar lo que está 'en curso'.",
            ],
          },
          {
            titulo: "Cómo encaja en la fase de ejecución",
            parrafos: [
              "Sirve cuando lo importante es el orden visual y la simplicidad: un tablero de 'por hacer / en curso / hecho' que toda la organización entiende. Brilla en equipos pequeños, procesos transversales y fases donde el coste de la herramienta no debe superar al trabajo que se gestiona.",
            ],
          },
          {
            titulo: "Casos de uso",
            parrafos: [
              "Organización de paneles personales o de pequeño equipo.",
              "Procesos de onboarding, embudo comercial o gestión de contenidos.",
              "Seguimiento del lanzamiento de una iniciativa con listas por fase.",
              "Comité de seguimiento sencillo donde cada tarjeta es una acción con responsable.",
            ],
          },
          {
            titulo: "Ventajas",
            parrafos: [
              "Aprendizaje inmediato: el paradigma de las tarjetas es intuitivo para todo el mundo.",
              "Gratuito para uso básico y amplio catálogo de power-ups (integraciones).",
              "Responsabilidades y fechas claras dentro de cada tarjeta.",
            ],
          },
          {
            titulo: "Limitaciones",
            parrafos: [
              "Poca estructura: un tablero grande se vuelve difícil de manejar sin disciplina.",
              "Informes y métricas básicas comparados con Jira o ClickUp.",
              "No está pensada para gestión de dependencias complejas ni roadmaps.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Limita el número de tarjetas 'en curso' (WIP) para que el tablero motive terminar.",
              "Define etiquetas de tipo y prioridad desde el primer día.",
              "Usa checklists dentro de las tarjetas para tareas compuestas, sin crear micro-tarjetas.",
            ],
          },
        ],
      },
      {
        slug: "asana",
        nombre: "Asana",
        tagline: "Gestión de tareas equilibrada entre sencillez y potencia.",
        resumen:
          "Asana es una plataforma de gestión de trabajo que se sitúa en un punto medio muy cómodo: más potente que Trello, más sencilla de operar que Jira. Permite ver el trabajo como lista, kanban, calendario, línea de tiempo o cargas de trabajo, todo sobre una misma base de tareas.",
        tipo: "Gestión de tareas y proyectos",
        enlace: "https://asana.com",
        etiquetas: ["Tareas", "Calendario", "Timeline", "Equipos"],
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Asana organiza el trabajo en proyectos compuestos por tareas. Cada tarea tiene asignados, fechas, subtareas, dependencias, secciones y campos personalizados. Un mismo trabajo puede visualizarse de múltiples formas sin duplicar datos.",
              "Ese es su gran acierto: el dato (la tarea) es único y la vista es una interpretación (lista, tablero, calendario, timeline o workloads).",
            ],
          },
          {
            titulo: "Cómo encaja en la fase de ejecución",
            parrafos: [
              "En la ejecución, Asana aporta una visión equilibrada: los equipos de negocio encuentran el orden de Trello pero con fechas y responsables serios, y los equipos técnicos pueden usar dependencias y timeline sin la rigidez de Jira.",
              "La vista de cargas de trabajo (workloads) permite además detectar a simple vista quién se está saturando, un dato crítico para no romper la ejecución.",
            ],
          },
          {
            titulo: "Casos de uso",
            parrafos: [
              "Gestión de proyectos transversales con equipos de distintos departamentos.",
              "Planificación de campañas y lanzamientos con cronogramas.",
              "Seguimiento de cargas de trabajo dentro de un equipo.",
              "Portafolio de iniciativas para dirección de proyecto.",
            ],
          },
          {
            titulo: "Ventajas",
            parrafos: [
              "Múltiples vistas sobre la misma base de datos sin duplicar tareas.",
              "Interfaz pulida y curva de aprendizaje suave.",
              "Potentes campos personalizados y automatizaciones sencillas.",
              "Buen equilibro entre precio y funcionalidad.",
            ],
          },
          {
            titulo: "Limitaciones",
            parrafos: [
              "Menos personalización profunda de flujos que Jira.",
              "La estructura de proyectos requiere disciplina para no duplicar tareas entre proyectos.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Usa tareas maestras y subtareas: detalles como subtareas, macro como plan.",
              "Aprovecha las dependencias en la vista timeline para construir el cronograma de ejecución.",
              "Revisa la vista de cargas de trabajo una vez por semana.",
            ],
          },
        ],
      },
      {
        slug: "clickup",
        nombre: "ClickUp",
        tagline: "El 'todo-en-uno' con una potencia imparable.",
        resumen:
          "ClickUp es una plataforma de productividad que promete sustituir a casi todas las demás: tareas, documentos, metas, wikis, chats y gestión de tiempo en una única aplicación. Es la opción favorita de equipos que quieren consolidar sus herramientas y cerrar el círculo entre ideación y ejecución.",
        tipo: "Plataforma integral",
        enlace: "https://clickup.com",
        etiquetas: ["Todo-en-uno", "Tareas", "Docs", "Metas", "Tiempo"],
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "ClickUp organiza todo en espacios, carpetas y listas, y cada vista (lista, tabla, calendario, kanban, gantt) es configurable. Incluye documentos integrados, objetivos (goals), gestión de tiempo, native chats y una librería enorme de plantillas.",
              "Su ambición es ser la única herramienta de trabajo: de la idea al documento y de la tarea a la métrica, sin cambiar de aplicación.",
            ],
          },
          {
            titulo: "Cómo encaja en la fase de ejecución",
            parrafos: [
              "Para ejecución, ClickUp aporta una potencia de personalización superior: jerarquías 4 niveles (Espacio → Carpeta → Lista → Tarea), vistas Gantt para cronogramas, y un sistema de relaciones y campos que permite modelar procesos complejos.",
              "Al incluir documentación y objetivos dentro de la misma herramienta, facilita que el conocimiento y la ejecución vivan en el mismo sitio.",
            ],
          },
          {
            titulo: "Casos de uso",
            parrafos: [
              "Equipos que quieren consolidar varias herramientas en una sola.",
              "Proyectos con cronogramas Gantt sobre una base de tareas enriquecida.",
              "Gestión de metas y OKRs con sus iniciativas conectadas.",
              "Seguimiento del tiempo imputado sin herramientas externas.",
            ],
          },
          {
            titulo: "Ventajas",
            parrafos: [
              "Todo-en-uno: elimina la fricción de cambiar de herramienta.",
              "Altísima personalización de vistas, estados y campos.",
              "Precios agresivos por usuario.",
            ],
          },
          {
            titulo: "Limitaciones",
            parrafos: [
              "La sobremultiplicidad de opciones puede abrumar y ralentizar la adopción.",
              "Rendimiento ocasionalmente pesado en tableros muy grandes.",
              "Requiere configurar bien desde el inicio para no perderse en jerarquías.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Empieza con una jerarquía simple de 1-2 niveles antes de explotar la personalización.",
              "Usa plantillas de vista para que todos en el equipo vean el trabajo con el mismo criterio.",
              "Configura los automatismos (cambio de estado, notificaciones) nada más montar el espacio.",
            ],
          },
        ],
      },
      {
        slug: "microsoft-project",
        nombre: "Microsoft Project",
        tagline: "El clásico del cronograma y la gestión de fechas.",
        resumen:
          "Microsoft Project es la herramienta de referencia histórica en planificación de proyectos con enfoque de cascada: cronogramas, dependencias, rutas críticas, recursos y curvas de coste. Sigue siendo el estándar en ingeniería, construcción y grandes proyectos donde la técnica de programación manda.",
        tipo: "Planificación de proyectos",
        enlace: "https://www.microsoft.com/en-us/microsoft-365/project/project-management-software",
        etiquetas: ["Cronograma", "Gantt", "Ruta crítica", "Recursos", "Costes"],
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Microsoft Project es un software de programación de proyectos que modela el plan con tareas, duraciones, dependencias y recursos. Calcula automáticamente fechas, identifica la ruta crítica y permite simular escenarios (qué pasa si un recurso falta o una tarea se retrasa).",
              "Su núcleo es el diagrama de Gantt y el motor de cálculo de programación, enfocado en el enfoque clásico (tradicional) de dirección de proyectos.",
            ],
          },
          {
            titulo: "Cómo encaja en la fase de ejecución",
            parrafos: [
              "Cuando un proyecto exige compromisos firmes de fecha (contratos, construcción, fabricación), se necesita un motor de scheduling fiable. Project aporta la matemática de la red del proyecto: hoja de cálculo de recursos, ruta crítica, holguras y nivelación de recursos.",
              "Es la herramienta que da rigor al ciclo de vida en cascada y a disciplinas como la dirección de proyectos con metodología predictiva.",
            ],
          },
          {
            titulo: "Casos de uso",
            parrafos: [
              "Planificación de grandes proyectos de ingeniería, obras y fabricación.",
              "Modelado de escenarios de retraso para renegociar fechas con evidencia.",
              "Gestión de recursos humanos y de máquina con nivelación.",
              "Informes de seguimiento de coste (EV) para dirección.",
            ],
          },
          {
            titulo: "Ventajas",
            parrafos: [
              "Motor de programación de ruta crítica muy sólido.",
              "Cálculo riguroso de dependencias, holguras y costes.",
              "Profundamente arraigado en el mundo de la construcción y la industria.",
            ],
          },
          {
            titulo: "Limitaciones",
            parrafos: [
              "Curva de aprendizaje y configuración elevada.",
              "Mejor para enfoque predictivo que para equipos ágiles.",
              "Coste de licencia y ecosistema menos ágil que las SaaS modernas.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Construye el plan empezando por el trabajo (WBS) y después añade recursos y costes.",
              "Usa la ruta crítica como objeto de seguimiento semanal, no solo el Gantt.",
              "Valida las dependencias: un plan con dependencias mal puestas no sirve.",
            ],
          },
        ],
      },
      {
        slug: "smartsheet",
        nombre: "Smartsheet",
        tagline: "La hoja de cálculo que se convierte en gestor de proyectos.",
        resumen:
          "Smartsheet presenta una rejilla tipo hoja de cálculo que funciona como base de datos y proyecto a la vez. Es la puente perfecta entre equipos que viven de Excel (finanzas, operaciones) y una gestión de proyecto moderna con automatizaciones, vistas Gantt e informes.",
        tipo: "Hojas de cálculo gestión",
        enlace: "https://www.smartsheet.com",
        etiquetas: ["Hoja de cálculo", "Automatización", "Informes", "Corporativo"],
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Smartsheet es una plataforma de gestión del trabajo con aspecto de hoja de cálculo. Cada fila es un 'elemento' con campos y estados, y sobre esa rejilla se construyen vistas (Gantt, kanban, calendario), automatizaciones y aprobaciones.",
              "Al adoptar la sintaxis de las celdas, equipos que piensan en Excel encuentran una transición natural hacia una herramienta de ejecución real.",
            ],
          },
          {
            titulo: "Cómo encaja en la fase de ejecución",
            parrafos: [
              "Es ideal para organizaciones donde la cultura de la hoja de cálculo está arraigada: finanzas, operaciones, investigación. Permite pasar del Excel 'que nadie actualiza' a un sistema con estados, responsables, fechas, avisos automáticos e informes enviados.",
              "Además, su capacidad de cruzar datos de varias estructuras (basado en fórmulas y referencias) la hace muy potente para tableros de control ejecutivos.",
            ],
          },
          {
            titulo: "Casos de uso",
            parrafos: [
              "Tableros de control de seguimiento de proyectos a dirección.",
              "Plan de hitos y cronogramas con alertas automáticas de vencimiento.",
              "Gestión de riesgos y acciones con campos de estado y propietario.",
              "Automatización de aprobaciones de documentos y procesos.",
            ],
          },
          {
            titulo: "Ventajas",
            parrafos: [
              "Transición natural para equipos de Excel.",
              "Excelente para informes y consolidación de múltiples proyectos.",
              "Automatizaciones y aprobaciones potentes con bajo esfuerzo.",
            ],
          },
          {
            titulo: "Limitaciones",
            parrafos: [
              "Filosofía de celdas que puede sentirse rígida para equipos acostumbrados a interfaces de tareas.",
              "Requiere estructura previa; una rejilla mal definida genera caos.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Define los campos obligatorios (responsable, fecha, estado) antes de cargar datos.",
              "Usa las vistas inteligentes para que cada perfil vea solo lo suyo.",
              "Programa informes semanales automáticos a los interesados del proyecto.",
            ],
          },
        ],
      },
    ],
  },
];

export function getBloque(slug: string): Bloque | undefined {
  return BLOQUES.find((b) => b.slug === slug);
}

export function getHerramienta(
  bloqueSlug: string,
  herramientaSlug: string,
): Herramienta | undefined {
  return getBloque(bloqueSlug)?.herramientas.find((h) => h.slug === herramientaSlug);
}