export type Seccion = {
  titulo: string;
  parrafos: string[];
};

export type Herramienta = {
  slug: string;
  nombre: string;
  empresa: string;
  tagline: string;
  tipo: string;
  enlace: string;
  logo: string;
  etiquetas: string[];
  resumen: string;
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
    nombre: "Ideación / Descubrimiento",
    titulo: "De la chispa al concepto compartido",
    descripcion:
      "Herramientas para generar, estructurar y validar ideas: lluvia de ideas, mapas, pizarras colaborativas, investigación de mercado y descubrimiento de cliente.",
    herramientas: [
      {
        slug: "miro",
        nombre: "Miro",
        empresa: "Miro (antes RealtimeBoard)",
        tagline: "La pizarra colaborativa infinita por excelencia.",
        tipo: "Pizarra colaborativa",
        enlace: "https://miro.com",
        logo: "/logos/miro.png",
        etiquetas: ["Pizarra", "Tiempo real", "IA", "Plantillas", "Retrospectivas"],
        resumen:
          "Miro es una pizarra digital infinita ('AI Innovation Workspace') pensada para que los equipos trabajen juntos de forma visual y en tiempo real. Es la herramienta de colaboración visual más usada en la fase de ideación, con más de 100 millones de usuarios y 250.000 empresas.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Pizarra inteligente multijugador sobre un lienzo infinito, con colaboración en tiempo real y capacidad de mezclar notas adhesivas, conectores, frames, documentos y diagramas.",
              "Miro AI genera diagramas, wireframes, prototipos, mapas mentales, flujos y tableros; además incluye formatos integrados (Docs, Tables, Slides, Diagrams, Kanban, timelines).",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "En la fase de ideación y discovery convierte la investigación en dirección compartida sobre un mismo lienzo, revisándola con el equipo antes de planificar.",
              "Sus plantillas de roadmapping, customer journey y workshop aceleran la alineación (según el sitio, ~50% menos tiempo de planificación) y agilizan el camino de la idea al plan.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Más de 250 apps e integraciones (Slack, Teams, Zoom, Jira, Confluence) y más de 6.000 plantillas.",
              "Formatos integrados: docs, tablas, slides, diagramas, kanban y líneas de tiempo.",
              "Miro AI: generación de diagramas, mapas mentales, wireframes y tableros.",
              "Casos de uso para I+D: research synthesis, planificación, roadmapping y customer journey mapping.",
              "Seguridad empresarial: ISO 27001, SOC 2, GDPR e ISO 42001 (IA).",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Define objetivo y facilitador antes de lanzar cualquier sesión.",
              "Usa los marcos (frames) para ordenar la pizarra por fases.",
              "Termina cada sesión con una síntesis visible de decisiones y siguientes pasos.",
            ],
          },
        ],
      },
      {
        slug: "mural",
        nombre: "Mural",
        empresa: "Mural (Tactivos, Inc.; incluye LUMA Institute)",
        tagline: "Sincroniza, acelera, destaca.",
        tipo: "Pizarra colaborativa",
        enlace: "https://www.mural.co",
        logo: "/logos/mural.png",
        etiquetas: ["Pizarra", "Workshops", "IA", "Innovación", "Strategy"],
        resumen:
          "Mural es un espacio de trabajo visual con IA ('visual AI platform') para equipos, con plantillas basadas en metodologías de expertos como el sistema LUMA de innovación. Es referencia en talleres de ideación, planning estratégico y product discovery.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Workspace de canvas infinito compartido con colaboración en tiempo real y una biblioteca de plantillas y metodologías de expertos (brainstorming, agile, ventas, strategic planning).",
              "Incluye Mural AI para acelerar el brainstorming, analizar feedback y sugerir 'siguientes pasos'.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "En discovery e ideación sirve para facilitar workshops, mapear stakeholders e influencias y co-crear hallazgos de cliente de forma visual e interactiva.",
              "Mantiene la estrategia conectada con la ejecución, de la idea al plan, añadiendo IA para sintetizar feedback y priorizar próximos pasos.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Canvas infinito con colaboración en tiempo real y solución dedicada a Research & Development.",
              "Mural AI: brainstorming, análisis de feedback y sugerencias de 'next best steps'.",
              "Plantillas y metodologías expertas (sistema LUMA de innovación, agile, customer journey, process mapping).",
              "Integraciones con el stack tecnológico y asociación destacada con Microsoft (Teams, Surface Hub).",
              "Seguridad enterprise y apps; métricas publicadas: hasta 50% más eficiencia y 800 h de reuniones ahorradas al año.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Usa plantillas de metodología probada en lugar de lienzos en blanco.",
              "Aprovecha Mural AI para sintetizar el feedback de cada sesión.",
              "Cierra cada workshop con un plan de acción visible y responsables.",
            ],
          },
        ],
      },
      {
        slug: "figjam",
        nombre: "FigJam",
        empresa: "Figma, Inc.",
        tagline: "Pizarras ligeras que nacen pegadas al diseño.",
        tipo: "Pizarra colaborativa",
        enlace: "https://www.figma.com/figjam/",
        logo: "/logos/figjam.png",
        etiquetas: ["Pizarra", "Diseño", "Diagramas", "Plantillas", "Figma"],
        resumen:
          "FigJam es la pizarra colaborativa de Figma para brainstorm, diagramado y toma de decisiones. Si el equipo ya trabaja con Figma, ofrece la transición más natural entre la ideación y el prototipado.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Pizarra digital en línea del ecosistema Figma con colaboración en tiempo real, diagramming, herramientas de engagement (stickers, emojis, votaciones y widgets) y más de 300 plantillas listas.",
              "Se incluye con todas las licencias de Figma, conectando la ideación con el diseño y el roadmap.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Ofrece una plantilla de 'project kickoff' para definir objetivos, responsabilidades y plazos desde el primer día.",
              "Facilita canvas de customer journey, roadmap reviews, retrospectivas y stand-ups para alinear al equipo y convertir ideas en acciones.",
              "Al estar integrado con Figma, el salto de la pizarra al prototipo y al roadmap es inmediato.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Colaboración en tiempo real: brainstorm, diagramado y decisiones compartidas.",
              "Diagramming con formas y conectores ajustados a rejilla (flujos, procesos, sistemas).",
              "Flujos ágiles: stand-ups y retrospectivas para mantener los sprints en marcha.",
              "Estrategia y planificación: planning de proyectos y roadmapping con roadmap reviews.",
              "Usado por equipos de Atlassian, GitHub, Microsoft, Slack, Airbnb y Asana.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Usa las plantillas de kickoff y roadmap review para estructurar las sesiones.",
              "Conecta los resultados con un archivo Figma de seguimiento.",
              "Aprovecha votaciones y stickers para tomar decisiones grupales rápidas.",
            ],
          },
        ],
      },
      {
        slug: "figma",
        nombre: "Figma",
        empresa: "Figma, Inc.",
        tagline: "El lienzo creativo full-stack con IA nativa.",
        tipo: "Plataforma de diseño y prototipado",
        enlace: "https://www.figma.com",
        logo: "/logos/figma.png",
        etiquetas: ["Diseño", "Prototipado", "IA", "Dev Mode", "Multiplayer"],
        resumen:
          "Figma es la plataforma de diseño, prototipado y desarrollo de producto colaborativa con IA nativa. Permite convertir ideas en wireframes y prototipos navegables para validar con usuarios y stakeholders muy rápido.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Diseño y prototipado en un solo lugar con edición multijugador en tiempo real (multiplayer) y Dev Mode para traducir diseños a código.",
              "Suite Figma: FigJam (whiteboard), Figma Slides, Figma Draw, Figma Sites, Figma Motion y Figma Buzz, con agentes de IA (Figma Make prompt-to-code y Figma Weave).",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "En discovery e ideación convierte ideas en wireframes y prototipos navegables para validar con usuarios y stakeholders sin esperar a desarrollo.",
              "Mantiene diseño, código e IA en el mismo contexto; sus 'product manager solutions' cubren planificación y roadmaps.",
              "Agentes de IA aceleran feedback, documentación de design systems y generación de alternativas de diseño, acortando el ciclo idea→producto.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Diseño y prototipado colaborativo en tiempo real.",
              "Dev Mode: traducción de diseños a código y contexto para ingeniería.",
              "IA integrada: agentes, prompt-to-code (Make) y flujos de IA para imagen, vídeo y audio.",
              "Comunidad y ecosistema: plugins, widgets, UI kits y plantillas.",
              "Marcha: el 95% del Fortune 500 usa Figma (dato de su web).",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Planifica un pequeño prototipo navegable en cada idea para validar hipótesis.",
              "Usa FigJam para la pizarra y Figma para el prototipo sin cambiar de ecosistema.",
            ],
          },
        ],
      },
      {
        slug: "adobe-express",
        nombre: "Adobe Express",
        empresa: "Adobe Inc.",
        tagline: "La app rápida y fácil para crear cualquier cosa.",
        tipo: "Diseño y creación de contenido",
        enlace: "https://www.adobe.com/express/",
        logo: "/logos/adobe-express.png",
        etiquetas: ["Diseño", "IA generativa", "Firefly", "Plantillas", "Marca"],
        resumen:
          "Adobe Express es la herramienta de diseño y creación de contenido (imagen, vídeo y social) con IA generativa Firefly comercialmente segura. Es ideal para producir mockups y material de comunicación durante la ideación sin depender de un estudio.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "App rápida de diseño con plantillas profesionales para posts sociales, flyers, vídeos, presentaciones y assets de marketing, con edición en un solo clic (quitar fondo, resize, recortar).",
              "IA generativa Adobe Firefly: imagen, vídeo, plantillas y 'Gen Voice', con AI Assistant para crear y editar por prompt.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "En la fase de ideación/discovery genera mockups, conceptos visuales y material de presentación rápidamente y respetando la marca.",
              "Permite comunicar el proyecto a stakeholders con flyers, posts y vídeos sin esperar a diseño; la IA acelera la creación de assets frente a lanzamientos tempranos.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Plantillas profesionales y Brand Kits (tipografías y colores de marca aplicables con un clic).",
              "IA generativa Adobe Firefly, comercialmente segura, y AI Assistant en beta.",
              "Edición de un clic: fondo, resize, recorte, conversión de formatos y editor de vídeo.",
              "Colaboración en tiempo real y control de marca a escala (planes Teams/Empresa).",
              "Integración con Adobe Creative Cloud y apps de Adobe.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Configura los Brand Kits del proyecto para que todo el material salga en marca.",
              "Usa el AI Assistant para iterar conceptos visuales rápidamente en la fase de exploración.",
            ],
          },
        ],
      },
      {
        slug: "canva",
        nombre: "Canva",
        empresa: "Canva Pty Ltd (Australia)",
        tagline: "Empoderando al mundo para diseñar.",
        tipo: "Plataforma de diseño gráfico (Visual Suite)",
        enlace: "https://www.canva.com",
        logo: "/logos/canva.png",
        etiquetas: ["Diseño", "Visual Suite", "Magic Studio", "Plantillas", "Presentaciones"],
        resumen:
          "Canva es una plataforma de diseño gráfico online con IA generativa (Magic Studio), usada por más de 220 millones de personas al mes. Combina presentaciones, docs, whiteboards y edición de vídeo en un solo lugar.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Visual Suite: Docs, Sheets, Whiteboards, Presentaciones, Vídeo, edición de fotos, sitios web y editor PDF, con colaboración en tiempo real.",
              "Canva AI / Magic Studio: Magic Write (escritura IA), Magic Resize, Magic Design, generadores de imagen, vídeo y voz, Translate y Magic Insights.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "En discovery produce material visual de comunicación (presentaciones, infografías, prototipos visuales) al instante y manteniéndolo en marca para alinear stakeholders.",
              "Sus whiteboards y docs habilitan talleres de ideación colaborativos y Magic Insights permite analizar feedback con IA para fundamentar decisiones.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Más de 220M usuarios activos mensuales y 30.000M de diseños creados (datos publicados).",
              "Magic Studio: Magic Write, Magic Resize, Magic Design, generadores IA de imagen, vídeo, logo y voz.",
              "Visual Suite completa: Docs, Sheets, Whiteboards, Presentaciones y Vídeo.",
              "Gestión de marca: kits de marca, plantillas de equipo y permisos.",
              "Planes para negocio/empresa con SSO y funciones de administración.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Crea un kit de marca del proyecto para uniformar todo el material.",
              "Usa Magic Insights para convertir datos de feedback en infografías legibles.",
            ],
          },
        ],
      },
      {
        slug: "crunchbase",
        nombre: "Crunchbase",
        empresa: "Crunchbase Inc.",
        tagline: "Antes de ser noticia, está en Crunchbase.",
        tipo: "Inteligencia de empresas privadas",
        enlace: "https://www.crunchbase.com",
        logo: "/logos/crunchbase.png",
        etiquetas: ["Market intelligence", "IA predictiva", "Funding", "Competencia"],
        resumen:
          "Crunchbase es una base de datos e inteligencia predictiva de empresas privadas, ideal para la fase de ideación: mapear el landscape competitivo, detectar quién crece o levanta financiación y validar el mercado.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Base propietaria de empresas, personas, financiación (funding), adquisiciones, IPOs y eventos con modelos de IA predictiva.",
              "Crédito a 39.000 millones de señales live del mercado privado, con predicciones de financiación, crecimiento, adquisición, IPO y cierres.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "En ideación/discovery aporta investigación de mercado y competitiva: mapear el landscape de empresas y benchmarkear competidores antes de decidir.",
              "Acelera la due diligence y permite tomar decisiones build/buy/partner con datos verificados y predicciones de IA.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "39.000M de señales live y 30M+ de actualizaciones verificadas al año.",
              "Modelos de IA predictiva: financiación, crecimiento, adquisición, IPO, cierres y layoffs.",
              "Productos: Crunchbase Pro, Business, API, MCP (para agentes de IA) y licencias de datos.",
              "Búsqueda avanzada y filtros por sector, geografía, etapa y equipo; alertas y señales tempranas.",
              "Según su web, predice el 84% de las rondas reales; usado por Mixpanel, OECD, Bayer y monday.com.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Configura alertas en tu sector para detectar movimientos antes que la competencia.",
              "Usa el MCP para llevar datos de mercado directo a tus agentes de IA.",
            ],
          },
        ],
      },
      {
        slug: "dealroom",
        nombre: "Dealroom",
        empresa: "Dealroom.co",
        tagline: "Inteligencia para ecosistemas tech.",
        tipo: "Inteligencia de startups y ecosistemas",
        enlace: "https://dealroom.co",
        logo: "/logos/dealroom.png",
        etiquetas: ["Startups", "Ecosystems", "Funding", "Tendencias", "API/MCP"],
        resumen:
          "Dealroom es la fuente de referencia sobre startups, founders y financiación a nivel global. Permite identificar empresas prometedoras, seguir tendencias sectoriales y validar oportunidades con datos de ecosistemas tech.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Plataforma de business intelligence de ecosistemas tech: perfiles de empresa con valoraciones, cap tables, revenue estimado, runway y personas clave.",
              "Rankings en vivo de hot sectors, hot startups y hot locations, más deep-dives por sector y API/MCP para alimentar agentes de IA.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "En discovery e ideación permite identificar empresas y startups prometedoras y mapear el paisaje competitivo.",
              "Sigue tendencias sectoriales y de inversión para validar oportunidades y tomar decisiones de build/buy/partner con datos.",
              "Su API/MCP entrega datos directamente a agentes de IA y flujos de trabajo.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Rankings en vivo: hot sectors (IA agents, robótica, climate tech), hot startups y hot locations.",
              "Deep-dives por sector con tamaño, unicorns y subsegmentos en crecimiento.",
              "Datos de ecosistemas: valor empresarial, VC por ciudad, unicorns y métricas de talento.",
              "API REST y servidor MCP (con Slack, HubSpot, Salesforce, Zapier, Cursor).",
              "Estudios y reportes por país (ej. Spanish Tech ecosystem) y newsfeed en directo.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Explora los deep-dives por sector para escanear el mercado de una idea en minutos.",
              "Conecta el MCP con tus agentes de investigación para automatizar el sourcing.",
            ],
          },
        ],
      },
      {
        slug: "hey-marvin",
        nombre: "Hey Marvin",
        empresa: "Marvin (Equafin Corp)",
        tagline: "La plataforma de insights de cliente con IA a escala.",
        tipo: "Insights de cliente / UX research con IA",
        enlace: "https://www.heymarvin.com",
        logo: "/logos/hey-marvin.png",
        etiquetas: ["UX research", "IA", "Entrevistas", "Insights", "Customer"],
        resumen:
          "Hey Marvin es una plataforma de insights de clientes con IA generativa: centraliza entrevistas, encuestas y llamadas, y permite preguntar a una IA que responde con citas sobre toda la investigación. Nació para descubrimiento de producto a gran velocidad.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Knowledge Hub que sincroniza entrevistas, encuestas, llamadas e investigación, con análisis de temas, sentimiento y patrones de métodos mixtos.",
              "Ask AI responde con citas originales sobre todos los datos; entrevistas moderadas por IA a escala y AI notetaker en sesiones live.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "En ideación/discovery ejecuta investigación de cliente a gran velocidad (entrevistas IA, feedback de beta) y la centraliza en un repositorio consultable.",
              "Ayuda al PM a validar el roadmap buscando en toda la investigación y a convertir aprendizajes de cliente en decisiones.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Ask AI: respuestas citadas sobre todos los datos de investigación.",
              "Entrevistas moderadas por IA a escala (cientos a la vez) y AI notetaker en vivo.",
              "Marvin Live Intercept: entrevistador de IA voz-a-voz integrado en productos digitales.",
              "Analysis Studio: temas, sentimiento y patrones mixtos (cualitativo + cuantitativo).",
              "30+ integraciones y MCP; certificaciones SOC 2, ISO 27001, ISO 42001 y GDPR.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Centraliza toda la investigación de discovery en el Knowledge Hub antes de validar ideas.",
              "Pregunta a Ask AI por cada idea antes de llevarla al roadmap.",
            ],
          },
        ],
      },
      {
        slug: "notion-ai",
        nombre: "Notion AI",
        empresa: "Notion Labs, Inc.",
        tagline: "Tu equipo de IA disponible 24/7.",
        tipo: "IA generativa y agentes sobre Notion",
        enlace: "https://www.notion.com/product/ai",
        logo: "/logos/notion-ai.png",
        etiquetas: ["IA", "Agentes", "Búsqueda", "Meeting notes", "Docs"],
        resumen:
          "Notion AI es la funcionalidad de IA integrada en el workspace de Notion: agentes que ejecutan tareas multi-paso, búsqueda empresarial con citas y notas de reuniones automáticas. Convierte los docs y bases de datos en un sistema donde la IA prioriza y resume.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Notion Agent ejecuta tareas complejas multi-paso (crear y editar páginas y bases de datos) usando el contexto del workspace, apps conectadas y web.",
              "Custom Agents automatizan trabajo recurrente 24/7 (responder en Slack, enrutar tareas, actualizar proyectos) y Enterprise Search busca en apps conectadas con respuestas citadas.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "En ideación/discovery permite 'pasar de brainstorm a roadmap' con IA directamente sobre la base de conocimiento.",
              "Triage de feedback de producto, automatización de reportes semanales y notas de reuniones con acciones para la fase de alineación.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Notion Agent: tareas multi-paso con contexto del workspace.",
              "Custom Agents 24/7 y Enterprise Search con citas (Slack, Google Drive, GitHub).",
              "AI Meeting Notes: transcripción, resumen y follow-ups automáticos.",
              "Research Mode para informes profundos y autofill de bases de datos.",
              "Model-agnóstico, paneles de ROI y controles de gobernanza y permisos.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Crea agentes personalizados para el triage diario de feedback.",
              "Usa las notas de reunión para poblarlas automáticamente en la base de conocimiento.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "conocimiento",
    nombre: "Definición / Conocimiento",
    titulo: "Ordena lo que el equipo aprende",
    descripcion:
      "Herramientas para capturar, documentar, estructurar y compartir el conocimiento del proyecto: wikis, documentos inteligentes, notas enlazadas e insights de usuario.",
    herramientas: [
      {
        slug: "confluence",
        nombre: "Confluence",
        empresa: "Atlassian",
        tagline: "Empieza con contexto, no desde cero.",
        tipo: "Wiki corporativa / espacio de conocimiento",
        enlace: "https://www.atlassian.com/software/confluence",
        logo: "/logos/confluence.png",
        etiquetas: ["Wiki", "Documentación", "Jira", "Bases de datos", "Rovo IA"],
        resumen:
          "Confluence es la plataforma de documentación y wiki de Atlassian. Piensa para equipos que ya trabajan con Jira, integra la documentación del proyecto con las incidencias y los flujos de trabajo. Es la fuente de verdad del equipo que captura, estructura y difunde conocimiento.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Wiki empresarial donde los equipos redactan páginas estructuradas en espacios, con macros, tablas, adjuntos e historial de versiones completo.",
              "Live docs, bases de datos y whiteboards integrados; con Rovo AI responde con citas sobre todos los documentos y comentarios.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Captura el conocimiento del proyecto en un único espacio estructurado (páginas, bases de datos, whiteboards) con plantillas específicas de gestión de proyectos.",
              "Al enlazarse con Jira convierte el conocimiento en contexto accionable; la IA Rovo resume y descubre decisiones sin búsquedas manuales.",
              "Es la fuente de verdad para difundir estados, actas y lecciones aprendidas a todo el equipo.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Páginas y Live docs con versionado; bases de datos y whiteboards integrados.",
              "Plantillas por área: gestión de proyectos, producto, software, marketing, RRHH y finanzas.",
              "Teamwork Graph conecta Jira, Loom y más herramientas para dar contexto.",
              "Integraciones con Jira, Figma, GitHub, Google Drive, Microsoft Teams y Loom.",
              "Automatización para detectar páginas obsoletas y single source of truth (Reddit, Dropbox, Lumen).",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Estructura espacios por proyecto y equipo, con plantillas por tipo de documento.",
              "Designa un 'bibliotecario' de conocimiento que valide la calidad de las páginas clave.",
            ],
          },
        ],
      },
      {
        slug: "microsoft-loop",
        nombre: "Microsoft Loop",
        empresa: "Microsoft (Microsoft 365)",
        tagline: "Piensa, planifica y crea juntos.",
        tipo: "Documento inteligente colaborativo",
        enlace: "https://loop.microsoft.com",
        logo: "/logos/microsoft-loop.png",
        etiquetas: ["Docs", "Componentes", "Microsoft 365", "Copilot", "Planificación"],
        resumen:
          "Microsoft Loop es la app colaborativa de Microsoft 365: páginas de proyecto con componentes (Ideas, Proyectos, Decisiones) que se sincronizan en tiempo real entre todas las apps. Ideal cuando el equipo vive en el ecosistema Microsoft.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Páginas de proyecto con componentes (Ideas, Proyectos, Decisiones, Notas) insertables con un clic y sincronizados en tiempo real entre Word, Teams, Outlook y otras apps de Microsoft 365.",
              "Copilot en Loop ayuda a co-crear, ponerse al día y mantenerse sincronizado.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Captura el conocimiento del proyecto en páginas modulares (Ideas, Decisiones, Proyectos) que se reutilizan como componentes en Word, Teams y Outlook, evitando información aislada.",
              "El PM estructura el trabajo con plantillas, y Copilot resume y difunde el estado del proyecto dentro del propio ecosistema Microsoft.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Componentes de Loop sincronizados en tiempo real entre todas las apps de Microsoft 365.",
              "Copilot en Loop para co-creación, resúmenes y sincronización.",
              "Búsqueda automática que sugiere archivos y documentos relevantes al crear un workspace.",
              "Plantillas de página para contexto, notas y toma de decisiones.",
              "Menciones, fechas y emojis en línea; notificaciones configurables.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Crea páginas de Decisión para documentar acuerdos y reutiliza los componentes en Teams.",
              "Aprovecha las plantillas de proyecto para arrancar cada iniciativa con estructura.",
            ],
          },
        ],
      },
      {
        slug: "notion",
        nombre: "Notion",
        empresa: "Notion Labs, Inc.",
        tagline: "El espacio de trabajo con IA que trabaja para ti.",
        tipo: "Espacio de trabajo todo-en-uno",
        enlace: "https://www.notion.com",
        logo: "/logos/notion.png",
        etiquetas: ["Wiki", "Bases de datos", "Notas", "Docs", "Agentes"],
        resumen:
          "Notion combina notas, documentación, bases de datos, wikis y gestión de tareas en un único sistema flexible, reconocido como 'system of record'. Es el favorito de muchos equipos para construir un centro de conocimiento vivo sin comprar varias apps.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Espacio de trabajo que combina documentos, bases de datos relacionales y wikis, con bloques de distintos tipos y vistas (tabla, kanban, calendario, galería).",
              "Notion AI integrado responde con citas, y los agentes (Custom Agents) automatizan tareas y flujos 24/7.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Centraliza la captura de conocimiento en el mismo sistema donde viven el wiki, las bases de datos y las tareas del proyecto.",
              "El PM estructura la documentación con plantillas y bases de datos relacionadas; la búsqueda con IA responde con citas para recuperar decisiones pasadas.",
              "Sus agentes automatizan reportes y seguimientos, difundiendo conocimiento de forma proactiva.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Sistema de registro central: docs + bases de datos + wikis.",
              "Notion AI: respuestas citadas, captura y búsqueda de conocimiento.",
              "Custom Agents que automatizan tareas y flujos 24/7.",
              "Base de conocimiento reconocida (G2's #1 durante 3 años).",
              "Cientos de integraciones, plan enterprise con permisos y SSO.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Define un índice maestro (hub) que enlace las áreas principales del conocimiento.",
              "Usa plantillas por tipo de documento para mantener coherencia.",
            ],
          },
        ],
      },
      {
        slug: "coda",
        nombre: "Coda",
        empresa: "Coda / Superhuman (anteriormente Coda Inc.)",
        tagline: "Tu espacio de trabajo todo-en-uno donde las tablas hablan entre sí.",
        tipo: "Documento conversacional / workspace",
        enlace: "https://coda.io",
        logo: "/logos/coda.png",
        etiquetas: ["Docs", "Fórmulas", "Automatización", "Packs", "IA"],
        resumen:
          "Coda combina documento y aplicación: tablas que se conectan entre sí, fórmulas, botones y automatizaciones para construir miniapps sin código. El PM puede convertir un doc en un tracker de estado con IA integrada.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Documentos interactivos con tablas que 'hablan' entre sí, writeups, hubs de equipo y trackers construibles con fórmulas, botones y automatizaciones.",
              "Coda AI añade chat, asistente de creación, columna AI y resúmenes a escala; packs con más de 600 integraciones.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Convierte la documentación en aplicaciones vivas: un mismo doc puede contener el plan, un tracker de estado y una automatización que envía actualizaciones a Slack.",
              "El PM captura conocimiento con plantillas (decisión doc, team hub, roadmap) y la IA lo estructura en tablas o lo resume para difundirlo.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Tablas conectadas y fórmulas/lógica para crear miniapps sin código (CRM, presupuestos, roadmaps).",
              "Coda AI: chat, asistente de creación, columna AI y resúmenes a escala.",
              "Packs: 600+ integraciones (Google Calendar, Slack, Figma, Jira).",
              "Galería y plantillas por rol (planificación/OKRs, reuniones, gestión de proyectos).",
              "Precios basados en uso, sin límites por asiento.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Convierte el doc de proyecto en una app con un tracker y un botón de automatización.",
              "Usa la columna AI para resumir estados semanales desde los datos.",
            ],
          },
        ],
      },
      {
        slug: "obsidian",
        nombre: "Obsidian",
        empresa: "Obsidian (Dynalist Inc.)",
        tagline: "Aguza tu pensamiento. Tu conocimiento debe durar.",
        tipo: "Notas enlazadas en Markdown",
        enlace: "https://obsidian.md",
        logo: "/logos/obsidian.png",
        etiquetas: ["Markdown", "Grafo", "Notas", "Local", "Wikilinks"],
        resumen:
          "Obsidian es la aplicación de notas en Markdown plano local donde cada nota se enlaza con otras, creando una red de conocimiento visualizable. Con más de 200.000 usuarios, es la herramienta predilecta del 'building a second brain' y del conocimiento de investigación.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Editor de notas en texto plano Markdown con propiedad total de los datos y enlaces tipo wiki ([[wikilinks]]) que dibujan un grafo interactivo de relaciones.",
              "Canvas en espacio infinito, Obsidian Sync (cifrado de extremo a extremo) y Obsidian Publish para publicar notas como wiki/sitio.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Captura el conocimiento en notas locales que se enlazan, formando un grafo editable de decisiones, actas y documentación.",
              "El PM estructura con tags, links y bases de datos (Dataview) sin perder la propiedad de los datos, y publica como wiki (Obsidian Publish) para difundirlo.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Notas en Markdown plano, formatos abiertos y sin vendor lock-in.",
              "Grafos interactivos y vínculos wiki entre notas.",
              "Miles de plugins: Calendar, Kanban, Dataview, Tasks, Outliner.",
              "Obsidian Sync con cifrado de extremo a extremo y versionado (1 año).",
              "Obsidian Publish con dominios y protección por contraseña.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Enlaza todo: una nota sin enlaces es una isla que se pierde.",
              "Crea un MOC (mapa de contenido) superior que organice las notas del área.",
            ],
          },
        ],
      },
      {
        slug: "dovetail",
        nombre: "Dovetail",
        empresa: "Dovetail Research Pty. Ltd.",
        tagline: "Pregunta, no adivines. La mejor nunca adivina.",
        tipo: "Plataforma de insights de usuario",
        enlace: "https://dovetail.com",
        logo: "/logos/dovetail.png",
        etiquetas: ["Customer", "Insights", "IA", "Research", "Backlog"],
        resumen:
          "Dovetail es la plataforma de inteligencia de cliente ('Customer Intelligence Platform'): estructura automáticamente entrevistas, llamadas y tickets en conocimiento accionable con evidencia citable. Es clave para convertir feedback en decisiones de producto.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Motor multimodal con transcripción, traducción, OCR y diarización, que indexa y clasifica automáticamente el feedback en temas, tópicos y sentimiento.",
              "Digital Twins: réplicas de segmentos de clientes construidas con datos reales para entrevistas simuladas; agentes que detectan y redactan requisitos con evidencia citada.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Estructura entrevistas, tickets y llamadas en conocimiento de cliente accionable, con evidencia siempre adjunta y citable.",
              "El PM usa ese contexto para priorizar el backlog con datos reales y transformar insights en documentos de producto (requisitos, resúmenes ejecutivos).",
              "Los agentes y digital twins difunden el conocimiento del cliente a todo el proyecto.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Motor multimodal: transcripción, traducción, OCR, diarización y redacción de PII automática.",
              "Indexación automática de feedback en temas, tópicos y sentimiento.",
              "30+ integraciones (Gong, Salesforce, Qualtrics, Google Play, Figma, Jira, Linear).",
              "Digital Twins y agentes que priorizan y redactan requisitos con evidencia citada.",
              "Conector MCP/API/CLI; seguridad SOC 2 Type II, ISO 27001/42001, GDPR e HIPAA.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Conecta el repositorio de investigación con Jira para priorizar con evidencia.",
              "Usa Digital Twins para simular entrevistas antes de invertir en desarrollo.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "ejecucion",
    nombre: "Despliegue / Ejecución",
    titulo: "De las ideas claras a los resultados",
    descripcion:
      "Herramientas para planificar, organizar, comunicar y hacer seguimiento del trabajo: tableros, sprints, cronogramas, reuniones, IA y gestión de cartera que convierten los conceptos en entregables medibles.",
    herramientas: [
      {
        slug: "trello",
        nombre: "Trello",
        empresa: "Atlassian",
        tagline: "Captura, organiza y resuelve tus tareas desde cualquier lugar.",
        tipo: "Kanban / gestión de trabajo visual",
        enlace: "https://trello.com",
        logo: "/logos/trello.png",
        etiquetas: ["Kanban", "Tarjetas", "Butler", "MCP", "Sencillez"],
        resumen:
          "Trello es la herramienta de tableros kanban más simple y reconocible del mercado: tableros, listas y tarjetas que se entienden en cinco minutos, con automatización Butler e integraciones. Ideal para equipos que necesitan orden visual sin complejidad.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Tableros kanban con listas y tarjetas (donde cada tarjeta puede tener descripción, checklist, fechas, etiquetas y adjuntos) con la metodología Kanban como base.",
              "Butler automatiza tareas repetitivas, e Inbox captura correos y Slack directamente en Trello.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Visualiza el avance del trabajo en tiempo real y facilita el seguimiento de tareas y responsables.",
              "Su automatización y plantillas aceleran la puesta en marcha; ideal para control sencillo y flexible del progreso.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Método kanban: tableros, listas y tarjetas.",
              "Automatización integrada Butler para flujos repetitivos.",
              "Power-Ups e integraciones con cientos de herramientas.",
              "Inbox y Planner (calendario) con bloques de tiempo.",
              "Plantillas por equipo y servidor MCP para IA.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Limita el número de tarjetas 'en curso' (WIP) para que el tablero motive terminar.",
              "Usa checklists dentro de las tarjetas para tareas compuestas.",
            ],
          },
        ],
      },
      {
        slug: "asana",
        nombre: "Asana",
        empresa: "Asana, Inc.",
        tagline: "Gestión de trabajo y proyectos para equipos humano-agente.",
        tipo: "Gestión de trabajo / gestión de proyectos",
        enlace: "https://asana.com",
        logo: "/logos/asana.png",
        etiquetas: ["Tareas", "Work Graph", "IA", "Dependencias", "Calendario"],
        resumen:
          "Asana es una plataforma de gestión de trabajo con el Asana Work Graph que conecta tareas, proyectos, objetivos y dependencias en vistas múltiples (tablero, lista, calendario, cronograma). Sus agentes de IA anticipan riesgos y monitorizan entregables.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Plataforma de gestión de trabajo y proyectos con el Work Graph como red de conexiones y una capa de IA (AI Teammates): agentes preconfigurados (Project Manager, Portfolio Advisor, Launch Coordinator) que trabajan dentro de los flujos.",
              "Memoria compartida: los agentes aprenden de tareas, feedback y preferencias.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Convierte un brief en un plan de proyecto con tareas y responsables, y detecta bloqueos o tareas en riesgo.",
              "Sus agentes anticipan riesgos de entrega, monitorizan dependencias y generan retroleos, reduciendo reuniones de estado manuales.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Work Graph: red que conecta tareas, proyectos, objetivos y dependencias.",
              "Vistas múltiples: tablero, lista, calendario y cronograma.",
              "AI Teammates: agentes Project Manager, Portfolio Advisor y Launch Coordinator.",
              "Automatización de flujos, hitos y seguimiento de dependencias.",
              "Gobierno empresarial con permisos y auditoría; '85% del Fortune 100 elige Asana' (dato de la web).",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Usa dependencias + vista cronograma para construir el plan de ejecución.",
              "Revisa los agentes AI para que anticipen tareas en riesgo cada semana.",
            ],
          },
        ],
      },
      {
        slug: "monday",
        nombre: "monday.com",
        empresa: "monday.com Ltd.",
        tagline: "El espacio de trabajo con IA para personas y agentes.",
        tipo: "Plataforma integral de gestión de trabajo (Work OS)",
        enlace: "https://monday.com",
        logo: "/logos/monday.png",
        etiquetas: ["Work OS", "Dashboards", "IA", "Automatización", "PMO"],
        resumen:
          "monday.com es una plataforma integral (Work OS) con dashboards, docs, formularios y agentes de IA. Es usada por ~60% del Fortune 500 y ofrece productos especializados (work management, CRM, dev, service).",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Plataforma flexible con dashboards, docs (WorkDocs) y formularios (WorkForms), automatizaciones y una suite de IA (Agent Builder, AI Assistant, Notetaker, AI workflows).",
              "Agentes para PMO: Project Monitor, Risk Analyzer, Meeting Scheduler y Status Reporter.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Ofrece una vista única de proyectos, dependencias, cronogramas y cargas de trabajo en dashboards personalizables.",
              "Los agentes de PMO monitorizan, avisan de riesgos y generan informes de estado automáticamente, actualizando a los interesados.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Espacio de trabajo flexible con dashboards, docs y formularios.",
              "Automatizaciones y agentes (Agent Builder, Sidekick, Notetaker).",
              "Agentes PMO: monitor de proyectos, analista de riesgos, reporter de estado.",
              "Productos: work management, CRM, dev, service y campaigns.",
              "Integraciones y monday MCP; ~60% del Fortune 500 lo usa.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Configura un dashboard maestro de proyecto con dependencias y cargas.",
              "Delega en los agentes PMO la generación semanal de estado.",
            ],
          },
        ],
      },
      {
        slug: "jira",
        nombre: "Jira Software",
        empresa: "Atlassian",
        tagline: "Convierte planes en tareas listas para agentes.",
        tipo: "Gestión ágil / incidencias y gestión de proyectos",
        enlace: "https://www.atlassian.com/software/jira",
        logo: "/logos/jira.png",
        etiquetas: ["Scrum", "Kanban", "Sprints", "Backlog", "Rovo"],
        resumen:
          "Jira Software es el estándar de gestión ágil de proyectos de software, con sprints, tableros kanban/scrum y backlog. Su Teamwork Graph y Rovo aportan contexto a los agentes de IA, y el 85% de las empresas del Fortune 500 usan productos Atlassian.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Gestor de proyectos y seguimiento de incidencias orientado a Scrum y Kanban, con issues que fluyen por tableros y sprints.",
              "Teamwork Graph da contexto a herramientas de IA (MCP y CLI), AI Search responde con realidad y Rovo automatiza y redacta con agentes.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Es la herramienta de referencia para la ejecución ágil de software: planificar sprints, asignar incidencias y seguir el progreso en tiempo real.",
              "Sus agentes y el grafo de contexto automatizan tareas, redactan actualizaciones y mantienen el trabajo en marcha.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Gestión ágil con sprints, tableros kanban/scrum y backlog.",
              "Teamwork Graph y MCP/CLI para dar contexto a la IA.",
              "AI Search y Rovo (agentes de IA que investigan, redactan y actúan).",
              "Asignación de trabajo a agentes de código (GitHub Copilot, Claude, Cursor).",
              "Audit trail y control para escalar IA de forma responsable.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Simplifica el flujo e incrementa complejidad solo con necesidad.",
              "Define una Definition of Done para que el tablero refleje la realidad.",
            ],
          },
        ],
      },
      {
        slug: "clickup",
        nombre: "ClickUp",
        empresa: "ClickUp, Inc. (Mango Technologies)",
        tagline: "Un único espacio de trabajo para pensar y trabajar.",
        tipo: "Plataforma integral de gestión de trabajo",
        enlace: "https://clickup.com",
        logo: "/logos/clickup.png",
        etiquetas: ["Todo-en-uno", "Tareas", "Gantt", "IA", "Tiempo"],
        resumen:
          "ClickUp es una plataforma todo-en-uno con más de 20 módulos: tareas, chat, calendario, docs, whiteboards, sprints y dashboards. Su IA Brain² genera informes y coordina tareas, y se autodenomina 'software to replace all software'.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Plataforma integral con jerarquías de espacios/carpetas/listas y más de 20 módulos, con vistas múltiples y control de tiempo.",
              "ClickUp Brain (Brain²) integra IA con agentes, automatizaciones, deep search y generación de informes y presentaciones.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Centraliza en un único espacio la planificación, el seguimiento, el control del tiempo y el reporting, eliminando la fragmentación.",
              "Sus agentes generan informes, planes de sprint y resúmenes automáticos, coordinando equipos, hitos y recursos.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Más de 20 módulos: tareas, chat, calendario, docs, whiteboards, sprints, dashboards.",
              "ClickUp Brain/AI: agentes, automatizaciones y generación de informes.",
              "Time tracking, Gantt y vistas múltiples.",
              "Automatizaciones y flujos personalizables.",
              "Integraciones amplias y MCP; planes desde gratuitos.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Empieza con jerarquía simple (1-2 niveles) antes de explotar la personalización.",
              "Usa vistas con plantillas para que todo el equipo vea el trabajo con el mismo criterio.",
            ],
          },
        ],
      },
      {
        slug: "azure-devops",
        nombre: "Azure DevOps",
        empresa: "Microsoft",
        tagline: "Planifica mejor, colabora mejor y entrega más rápido.",
        tipo: "DevOps / CI-CD",
        enlace: "https://azure.microsoft.com/products/devops",
        logo: "/logos/azure-devops.png",
        etiquetas: ["Boards", "Pipelines", "Repos", "Test", "DevSecOps"],
        resumen:
          "Azure DevOps es la plataforma de desarrollo y entrega continua de Microsoft: Azure Boards (tableros ágiles), Pipelines (CI/CD), Repos, Test Plans y Artifacts. Integra la planificación del proyecto con el código y la calidad.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Conjunto de servicios modernos de desarrollo: Azure Boards para planificar/rastrear trabajo con kanban, Azure Pipelines para CI/CD en cualquier nube, Azure Repos (Git), Azure Test Plans y Azure Artifacts.",
              "Incluye GitHub Advanced Security y soporte de GitHub Copilot.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Permite planificar y seguir el trabajo con tableros ágiles mientras se supervisa la entrega continua y las pruebas.",
              "Integra planificación, código, pipelines y calidad, ofreciendo visión completa del estado de desarrollo y facilitando el DevSecOps.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Azure Boards: tableros kanban ágiles y planificación.",
              "Azure Pipelines: CI/CD para cualquier lenguaje, plataforma y nube.",
              "Azure Repos: repositorios Git con pull requests.",
              "Azure Test Plans y Azure Artifacts.",
              "Managed DevOps Pools para agentes personalizados.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Aprovecha Azure Boards para el seguimiento y Pipelines para la automatización de QA.",
              "Conecta repos, pipelines y boards para trazabilidad completa.",
            ],
          },
        ],
      },
      {
        slug: "slack",
        nombre: "Slack",
        empresa: "Salesforce (Slack Technologies, LLC)",
        tagline: "Toda tu gente y tus agentes de IA trabajando juntos.",
        tipo: "Chat / comunicación de equipo",
        enlace: "https://slack.com",
        logo: "/logos/slack.png",
        etiquetas: ["Chat", "Canales", "Huddles", "Slider", "Automatización"],
        resumen:
          "Slack es la plataforma de comunicación y colaboración de equipo de Salesforce. Canales, huddles con notas, Slackbot y automatizaciones la convierten en el canal central para coordinar el equipo durante la ejecución.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Plataforma de chat por canales con Slackbot, huddles (audio/vídeo con notas), Canvas, Lists y clips para gestionar tareas.",
              "Workflow Builder automatiza tareas (3M+ workflows diarios) y Slack Connect colabora con clientes y proveedores.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Sirve como canal central donde el PM coordina, comparte actualizaciones de estado y aprueba tareas sin cambiar de herramienta.",
              "Los canales y huddles mantienen el trabajo en marcha y la búsqueda con IA reduce el tiempo perdido buscando información.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Canales por tema/proyecto y Slack Connect con equipos externos.",
              "Slackbot con IA y búsqueda empresarial.",
              "Huddles de vídeo/audio con notas automáticas.",
              "Lists para tareas y Canvas para documentación.",
              "2.600+ app integraciones y Workflow Builder.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Crea un canal por proyecto con hilos para decisiones clave.",
              "Automatiza reportes diarios de estado con Workflow Builder.",
            ],
          },
        ],
      },
      {
        slug: "lark",
        nombre: "Lark",
        empresa: "ByteDance (Lark Technologies)",
        tagline: "La superapp de productividad para chat, reuniones, documentos y proyectos.",
        tipo: "Suite colaborativa / superapp",
        enlace: "https://www.larksuite.com",
        logo: "/logos/lark.png",
        etiquetas: ["Messaging", "Videoconferencia", "Docs", "Calendario", "IA"],
        resumen:
          "Lark es la superapp de ByteDance que agrupa mensajería, videoconferencia con IA, documentos, bases de datos, calendario y gestión de proyectos en una sola plataforma, reduciendo el cambio entre herramientas durante la ejecución.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Superapp de productividad que integra mensajería, videoconferencia con transcripción y notas de IA, documentos colaborativos, hojas de cálculo, bases de datos y calendario en un solo lugar.",
              "Incluye formularios, correo, automatización de flujos y traducción con IA.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Agrupa comunicación, reuniones, documentos y seguimiento en una sola plataforma, reduciendo el cambio de contexto.",
              "Permite coordinar equipos, celebrar reuniones con actas automáticas y mantener un registro documental compartido.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Mensajería integrada y videoconferencia con transcripción/notas IA.",
              "Docs, hojas de cálculo y bases de datos colaborativas.",
              "Calendario, formularios, correo y automatización de flujos.",
              "Traducción y herramientas de IA integradas.",
              "Gestión de proyectos dentro de la plataforma.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Usa las actas automáticas de reunión para que las decisiones queden registradas.",
              "Aprovecha la suite para unificar comunicación y documentación del proyecto.",
            ],
          },
        ],
      },
      {
        slug: "zoom",
        nombre: "Zoom Workplace",
        empresa: "Zoom Communications, Inc.",
        tagline: "Descubre lo que es posible cuando el trabajo conecta.",
        tipo: "Videoconferencia / comunicación (UCaaS)",
        enlace: "https://zoom.us",
        logo: "/logos/zoom.png",
        etiquetas: ["Vídeo", "IA", "Meetings", "Webinars", "Whiteboard"],
        resumen:
          "Zoom Workplace es la plataforma de comunicación con IA (AI-first): reuniones, chat, teléfono, correo y whiteboard. Su IA toma notas ('My Notes'), resume y extrae elementos de acción, ideal para coordinar equipos distribuidos.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Plataforma UCaaS con reuniones de vídeo, chat, Zoom Phone y correo/calendario, más Zoom Rooms y Webinars/Eventos.",
              "My Notes toma notas con IA que resume y extrae elementos de acción; ZoomMate genera documentos y siguientes pasos.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Facilita las reuniones de seguimiento en remoto, con IA que toma notas y extrae decisiones y acciones.",
              "Convierte conversaciones en tareas documentadas sin esfuerzo manual.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Reuniones de vídeo, chat, teléfono y correo/calendario.",
              "My Notes con IA: resumen y elementos de acción.",
              "ZoomMate: asistente de IA para documentos y siguientes pasos.",
              "Whiteboard, Canvas y AI Productivity Suite (Slides, Sheets, Paper).",
              "Integraciones con Microsoft, Google, Salesforce, Atlassian.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Habilita My Notes en las reuniones de seguimiento del proyecto.",
              "Usa ZoomMate para convertir el acta en lista de acciones con responsables.",
            ],
          },
        ],
      },
      {
        slug: "google-meet",
        nombre: "Google Meet",
        empresa: "Google (Google Workspace)",
        tagline: "Videollamadas mejoradas con IA.",
        tipo: "Videoconferencia / reuniones",
        enlace: "https://workspace.google.com/products/meet/",
        logo: "/logos/google-meet.png",
        etiquetas: ["Vídeo", "Gemini", "Grabación", "Subtítulos", "Workspace"],
        resumen:
          "Google Meet es la herramienta de videoconferencia de Google Workspace, con Gemini en Meet para notas automáticas, traducción en vivo y generación de agendas. Es la opción natural para equipos que viven en el ecosistema Google.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Videollamadas en alta calidad desde cualquier dispositivo o navegador, con grabación, transcripciones, subtítulos en tiempo real y cancelación de ruido.",
              "Gemini en Meet toma notas automáticamente, traduce en vivo y genera agendas.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Permite celebrar y grabar reuniones de seguimiento con notas y resúmenes automáticos generados por IA (Gemini).",
              "Captura decisiones y acciones conectándolas con el ecosistema Google, reduciendo el esfuerzo administrativo.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Videollamadas de alta calidad en navegador.",
              "Gemini en Meet: notas, traducción en vivo y agendas.",
              "Grabación y transcripciones.",
              "Subtítulos en tiempo real y cancelación de ruido.",
              "Integración total con Google Workspace (Calendar, Chat, Drive).",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Programa reuniones desde Calendar con notas activadas para capturar decisiones.",
              "Revisa las transcripciones y convierte acciones en tareas de la herramienta de gestión.",
            ],
          },
        ],
      },
      {
        slug: "microsoft-teams",
        nombre: "Microsoft Teams",
        empresa: "Microsoft",
        tagline: "La plataforma de trabajo con tecnología de IA.",
        tipo: "Suite colaborativa / comunicación y reuniones (UCaaS)",
        enlace: "https://www.microsoft.com/en-us/microsoft-teams/",
        logo: "/logos/microsoft-teams.png",
        etiquetas: ["Teams", "Copilot", "Reuniones", "Chat", "365"],
        resumen:
          "Microsoft Teams es la plataforma de colaboración y reuniones de Microsoft 365, con Copilot y el agente Teams Facilitator que generan notas, tareas y acciones automáticamente. Es la central de trabajo de equipos corporativos.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Chat, canales y reuniones con integración de Microsoft 365 (Loop, OneNote, apps), Teams Phone, Teams Rooms y Microsoft Places.",
              "Teams Facilitator genera notas, tareas y acciones con IA; Copilot resume y extrae decisiones.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Centraliza comunicación, reuniones y archivos en una sola plataforma.",
              "Convierte cada reunión en acciones mediante IA (Facilitator y Copilot), ayudando al PM a capturar decisiones y dar seguimiento.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Chat, canales y reuniones de vídeo/audio.",
              "Teams Facilitator: notas, tareas y acciones con IA.",
              "Microsoft 365 Copilot para resumir y extraer decisiones.",
              "Traducción e interpretación en tiempo real.",
              "Leys Live: webinars y eventos de hasta 100.000 asistentes.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Activa el Facilitator en reuniones de seguimiento para automatizar el acta.",
              "Usa Loop con Teams para que las acciones de reunión sean editables en doc.",
            ],
          },
        ],
      },
      {
        slug: "spinach",
        nombre: "Spinach.io",
        empresa: "Spinach (StayIn, Inc.)",
        tagline: "Captura cada palabra. Tus reuniones en piloto automático.",
        tipo: "Asistente IA de reuniones",
        enlace: "https://www.spinach.io",
        logo: "/logos/spinach.png",
        etiquetas: ["IA", "Meetings", "Transcripts", "Tickets", "Agenda"],
        resumen:
          "Spinach AI es un asistente de reuniones que transcribe, resume y extrae elementos de acción, creando tickets y actualizando automáticamente las herramientas de gestión de proyectos. Garantiza que ninguna decisión se pierda.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Transcripciones y resúmenes precisos en 100 idiomas, integrado con Zoom, Teams, Google Meet y Webex.",
              "Crea tickets, correos de recapitulación y actualiza el CRM automáticamente, con un 'cerebro centralizado' de IA (analista, asesor y coach).",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Automatiza el registro y seguimiento de reuniones, evitando que se pierdan decisiones y compromisos.",
              "Crea tickets y actualiza las herramientas de gestión (Jira, Asana, ClickUp, Trello, Monday, Notion) automáticamente.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Transcripción y resúmenes en 100 idiomas.",
              "Integración con Zoom, Teams, Google Meet, Webex y Slack.",
              "Creación automática de tickets y actualización de CRM.",
              "Conexión con Jira, Asana, ClickUp, Trello, Monday, Notion, Salesforce, HubSpot.",
              "Cumplimiento SOC2, GDPR e HIPAA; datos cifrados y no usados para entrenar modelos.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Conecta Spinach a tu gestor de proyectos para que cada acuerdo se convierta en ticket.",
              "Revisa el 'cerebro' semanal para detectar compromisos pendientes.",
            ],
          },
        ],
      },
      {
        slug: "rovo",
        nombre: "Atlassian Rovo",
        empresa: "Atlassian",
        tagline: "Conoce Rovo: IA que conoce tu negocio.",
        tipo: "IA empresarial (agentes y búsqueda de conocimiento)",
        enlace: "https://www.atlassian.com/software/rovo",
        logo: "/logos/rovo.png",
        etiquetas: ["IA", "Teamwork Graph", "Agentes", "Búsqueda", "Atlassian"],
        resumen:
          "Rovo es la IA empresarial de Atlassian que desbloquea el conocimiento organizativo del ecosistema (Jira, Confluence, código, correo). Su Teamwork Graph conecta conocimiento, personas y decisiones en un grafo que los agentes usan para automatizar el trabajo.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Plataforma de GenAI con Teamwork Graph (grafo que conecta conocimiento, personas y decisiones) y conectores a apps de terceros (Gmail, Google Drive, GitHub, Figma, Miro, Smartsheet).",
              "Rovo Chat y Search responden con realidad basada en contexto; Rovo Studio permite crear y gestionar agentes.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Da respuestas y contexto de todo el ecosistema de herramientas para tomar decisiones con el panorama completo.",
              "Sus agentes automatizan tareas repetitivas, redactan informes y mantienen flujos, reduciendo la búsqueda manual de información.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Teamwork Graph: conexión entre conocimiento, personas y decisiones.",
              "Conectores a Jira, Confluence, Gmail, Google Drive, GitHub, Figma, Miro, Smartsheet.",
              "Agentes que automatizan flujos y gestionan siguientes pasos.",
              "Rovo Chat/Search y Rovo Studio para crear agentes.",
              "Acceso desde apps Atlassian, escritorio, móvil, extensión y CLI; certificaciones SOC2 e ISO 27001.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Crea agentes específicos para generar informes de estado del proyecto.",
              "Usa Rovo Chat para responder preguntas de contexto corporativo sin búsquedas manuales.",
            ],
          },
        ],
      },
      {
        slug: "monday-ai",
        nombre: "monday AI Workspace",
        empresa: "monday.com Ltd.",
        tagline: "El espacio de trabajo con IA para personas y agentes.",
        tipo: "IA empresarial de gestión de trabajo",
        enlace: "https://monday.com",
        logo: "/logos/monday-ai.png",
        etiquetas: ["IA", "Agentes", "PMO", "Automatización", "Workspace"],
        resumen:
          "monday AI Workspace es la capa de IA de monday.com: Agent Builder para crear agentes personalizados, AI Assistant (Sidekick), Notetaker y agentes de IA para PMO que monitorizan proyectos y detectan riesgos.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Suite de IA del Work OS de monday: Agent Builder crea agentes personalizados; AI Assistant, Notetaker y AI workflows operan dentro de los espacios de trabajo.",
              "Agentes preconfigurados de PMO: Project Monitor, Risk Analyzer, Status Reporter y Meeting Scheduler.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Amplía monday.com con agentes que vigilan el proyecto, detectan riesgos, generan informes de estado y actualizan a los interesados automáticamente.",
              "El gestor delega seguimiento y reporting repetitivos y se centra en decisiones.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Agent Builder para agentes de IA personalizados.",
              "AI Assistant (Sidekick), Notetaker y AI workflows.",
              "Agentes PMO: Project Monitor, Risk Analyzer, Status Reporter, Meeting Scheduler.",
              "Reporting y generación de informes de estado automatizada.",
              "Integración con todo el ecosistema monday (work management, dev, CRM, service).",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Crea un agente 'Project Monitor' que reporte el estado semanal del proyecto.",
              "Programa el Risk Analyzer para avisar de bloqueos antes de que se acumulen.",
            ],
          },
        ],
      },
      {
        slug: "clickup-brain",
        nombre: "ClickUp Brain² / Super Agents",
        empresa: "ClickUp, Inc.",
        tagline: "Una IA para reemplazarlas todas. La mejor IA es tu IA.",
        tipo: "IA empresarial / agentes de IA en gestión de trabajo",
        enlace: "https://clickup.com/ai",
        logo: "/logos/clickup-brain.png",
        etiquetas: ["IA", "Super Agents", "Brain", "Automatización", "Reporting"],
        resumen:
          "ClickUp Brain (Brain²) tiene memoria persistente y contexto de todo el workspace, acceso a múltiples modelos (ChatGPT, Claude, Gemini) y Super Agents especializados (Project Manager, Developer, Strategist). Es de las IA más profundas del mercado de gestión.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Brain² con memoria persistente y contexto del workspace, acceso a varios modelos con una suscripción.",
              "Super Agents: agentes especializados por rol (Project Manager, Developer, Strategist) con skills, AI Fields, AI Automations y AI Notetaker.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Da un asistente con conocimiento de todo el trabajo, capaz de planificar y rebalancear la semana, generar informes de estado y coordinar tareas automáticamente.",
              "Los Super Agents asumen roles y ejecutan trabajo en paralelo, aumentando la productividad de la ejecución.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Brain² con memoria persistente y contexto del workspace.",
              "Acceso a múltiples modelos (ChatGPT, Claude, Gemini).",
              "Super Agents por rol (Project Manager, Developer, Strategist).",
              "Generación de informes, dashboards, presentaciones y prototipos.",
              "Seguridad: datos no usados para entrenar modelos (SOC2, ISO 27001, GDPR, HIPAA).",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Usa el Super Agent 'Project Manager' para la planificación semanal.",
              "Genera informes de estado con Brain² desde los datos del workspace.",
            ],
          },
        ],
      },
      {
        slug: "miro-ai",
        nombre: "Miro AI Workflows",
        empresa: "Miro",
        tagline: "La plataforma de IA para el trabajo en equipo.",
        tipo: "IA colaborativa / canvas inteligente",
        enlace: "https://miro.com/ai/",
        logo: "/logos/miro-ai.png",
        etiquetas: ["IA", "Canvas", "Sidekicks", "Flows", "Agentes"],
        resumen:
          "Miro AI (Intelligent Canvas) usa todo el lienzo colaborativo como contexto para la IA: Sidekicks que construyen sobre el trabajo del equipo y Flows (flujos de IA visuales y multipaso) que convierten la colaboración visual en planes y roadmaps.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Intelligent Canvas: el canvas colaborativo usa todo el trabajo como contexto para la IA.",
              "Sidekicks: agentes que conocen el contexto y construyen sobre el trabajo del equipo; Flows: flujos de trabajo de IA visuales y repetibles como plantillas.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Permite planificar talleres y convertir la colaboración visual en planes, OKRs y dashboards con ayuda de IA.",
              "Los Sidekicks y Flows automatizan la síntesis de ideas, generan roadmaps y planes de acción desde el canvas.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Intelligent Canvas con contexto del trabajo para IA.",
              "Sidekicks: agentes que construyen sobre el trabajo del equipo.",
              "Flows: flujos de IA visuales y multipaso, repetibles como plantillas.",
              "Conectores con Slack, Jira, Granola y 250+ integraciones.",
              "AI Playbooks y certificación ISO 42001 (IA).",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Usa Flows para transformar una lluvia de ideas en un roadmap de acción.",
              "Aprovecha los Sidekicks para sintetizar decisiones de talleres.",
            ],
          },
        ],
      },
      {
        slug: "planisware",
        nombre: "Planisware",
        empresa: "Planisware (cotiza en bolsa, París)",
        tagline: "Gestión estratégica de cartera con IA. Cada proyecto, una plataforma.",
        tipo: "Gestión de cartera de proyectos (PPM/PMO)",
        enlace: "https://www.planisware.com",
        logo: "/logos/planisware.png",
        etiquetas: ["PPM", "PMO", "Cartera", "IA predictiva", "Recursos"],
        resumen:
          "Planisware es una plataforma empresarial de gestión de carteras de proyectos (PPM) con IA predictiva, optimización de recursos y capa conversacional (Prisma). Es referencia para PMOs que necesitan seleccionar, priorizar y ejecutar proyectos con visibilidad total.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Suite de soluciones PPM/SPM: Planisware Orchestra (PPM), Luma (PSA), Horizon (IT), Nova (producto), Valoris (CAPEX) y Enterprise.",
              "Digital Agents automatizan reporting, scheduling y validación; Predictive AI modela resultados, plazos y riesgos (Monte Carlo); Prisma aporta una capa conversacional sobre datos en vivo.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Es una plataforma de nivel empresarial para seleccionar, priorizar y ejecutar proyectos con visibilidad total en la cartera.",
              "Su IA predictiva y optimización permiten prever resultados, plazos y riesgos y ajustar recursos en la ejecución.",
              "Centraliza presupuestos, cronogramas y estados para entregar más proyectos a tiempo y dentro del alcance.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Soluciones para PMO, PSA, IT, desarrollo de producto y CAPEX.",
              "Digital Agents: reporting, scheduling y validación automatizados.",
              "Predictive AI con modelado Monte Carlo de resultados, plazos y riesgos.",
              "AI Portfolio Optimization: optimización de recursos y restricciones.",
              "Planisware Prisma: capa de IA conversacional; reconocido por Gartner, Forrester e IDC.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Usa la IA predictiva en la planificación para simular escenarios de entrega.",
              "Estructura la cartera por criterios de priorización antes de optimizar recursos.",
            ],
          },
        ],
      },
      {
        slug: "prochain",
        nombre: "ProChain",
        empresa: "ProChain Solutions, Inc.",
        tagline: "Entrega proyectos de alto riesgo más rápido y a tiempo.",
        tipo: "Gestión de proyectos por Critical Chain (CCPM)",
        enlace: "https://www.prochain.com",
        logo: "/logos/prochain.png",
        etiquetas: ["Critical Chain", "CCPM", "Recursos", "Búferes", "Alto riesgo"],
        resumen:
          "ProChain (ProChain Fusion) es la herramienta de referencia del método Critical Chain Project Management (CCPM): planifica para lo inesperado y ejecuta con foco y velocidad, mejorando el cumplimiento de plazos en proyectos de alto riesgo.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Software de planificación y ejecución (ProChain Fusion y Fusion Online) basado en la metodología Critical Chain Project Management (CCPM).",
              "Gestiona la incertidumbre con buffers y prioriza la cadena crítica para cumplir plazos.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Aplica Critical Chain para planificar para lo inesperado y ejecutar con foco y velocidad, mejorando el cumplimiento de plazos.",
              "Identifica interdependencias y cuellos de botella, centrando al equipo en las tareas críticas y reduciendo el tiempo de ciclo.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Metodología CCPM como base del sistema.",
              "ProChain Fusion: planificación y ejecución con IA.",
              "Fusion Online: plataforma en la nube con portal de acceso.",
              "Planificación de incertidumbre con buffers y cadena crítica.",
              "Gestión de recursos y análisis de sobrecarga; usado en fármacos, dispositivos médicos y defensa.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Forma al equipo en CCPM antes de desplegar la herramienta.",
              "Monitoriza el consumo de buffers para anticipar retrasos.",
            ],
          },
        ],
      },
      {
        slug: "github-copilot",
        nombre: "GitHub Copilot",
        empresa: "GitHub (Microsoft)",
        tagline: "Tu agente de IA para escribir, comprender y publicar software.",
        tipo: "IA de código (agente de desarrollo)",
        enlace: "https://github.com/features/copilot",
        logo: "/logos/github-copilot.png",
        etiquetas: ["IA", "Código", "Agent", "Code review", "Productividad"],
        resumen:
          "GitHub Copilot es el agente de IA de código de GitHub que escribe, comprende y publica software en todo el ciclo de vida: completado, generación de código, triage de issues y revisión de PRs. Acelera la fase de ejecución de proyectos de software.",
        secciones: [
          {
            titulo: "Qué es",
            parrafos: [
              "Agente de IA que escribe y revisa código, disponible en VS Code, Visual Studio, JetBrains, Xcode, Neovim, CLI, Slack, Teams y móvil.",
              "Soporta Model Context Protocol (MCP), skills, plugins y conectores, y automatización del triage de issues y revisión de PRs.",
            ],
          },
          {
            titulo: "Cómo aporta a la gestión de proyectos",
            parrafos: [
              "Acelera la ejecución de software automatizando escritura, revisión y pruebas de código, reduciendo el tiempo de desarrollo.",
              "Permite pasar de issue a pull request con contexto completo, facilitando el seguimiento y reduciendo bloqueos y retrabajos.",
            ],
          },
          {
            titulo: "Características principales",
            parrafos: [
              "Agente de IA que escribe, comprende y publica software.",
              "Completado y sugerencias de código ilimitadas (planes de pago).",
              "Agentes de código en la nube (Claude Code, Codex) y elección de modelos.",
              "Automatización de triage de issues y revisión de PRs.",
              "Disponible en los editores principales, CLI y herramientas de chat.",
            ],
          },
          {
            titulo: "Consejos",
            parrafos: [
              "Conecta Copilot con el repositorio y las issues para que el equipo desarrolle con contexto completo.",
              "Automatiza la revisión de PRs para liberar tiempo de ingeniería.",
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

export const BLOQUE_SLUGS = ["ideacion", "conocimiento", "ejecucion"] as const;
export const BLOQUE_ALIASES: Record<string, string> = {
  ideacion: "Ideación / Descubrimiento",
  conocimiento: "Definición / Conocimiento",
  ejecucion: "Despliegue / Ejecución",
};
