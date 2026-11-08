# PMDT · Project Management Digital Tools

Sitio web (en español) con contenido sobre herramientas digitales para la dirección de
proyectos, agrupado en tres bloques:

1. **Ideación / Descubrimiento** — 10 herramientas para generar, estructurar y validar ideas
   (Miro, Mural, FigJam, Figma, Adobe Express, Canva, Crunchbase, Dealroom, Hey Marvin, Notion AI).
2. **Definición / Conocimiento** — 6 herramientas para capturar, documentar y compartir
   conocimiento (Confluence, Microsoft Loop, Notion, Coda, Obsidian, Dovetail).
3. **Despliegue / Ejecución** — 19 herramientas para planificar, organizar y hacer seguimiento
   del trabajo (Trello, Asana, monday.com, Jira, ClickUp, Azure DevOps, Slack, Lark, Zoom,
   Google Meet, Microsoft Teams, Spinach.io, Atlassian Rovo, monday AI, ClickUp Brain,
   Miro AI, Planisware, ProChain, GitHub Copilot).

Cada herramienta tiene una **ficha** con logo oficial, empresa, tagline, características
principales y su aportación a la gestión de proyectos. Los logos viven en `public/logos/`.

Este proyecto fue construido con [Lovable](https://lovable.dev).

## Acceso con código

El sitio está protegido y pide un **código de acceso** en la página de inicio. Cada código
tiene una **fecha de caducidad**.

Los códigos viven en un CSV que **no se sirve al cliente** (solo lo lee el servidor durante la
validación), ubicado en `src/data/codes.csv`:

```csv
codigo,fecha_expiracion,nota
PMDT2026,2026-12-31,Código de acceso principal para 2026
```

Formato de columnas:

| Columna             | Descripción                                             |
| ------------------- | ------------------------------------------------------- |
| `codigo`            | El código que introduce el usuario (no distingue mayúsculas). |
| `fecha_expiracion`  | Fecha de caducidad en formato `YYYY-MM-DD`.             |
| `nota`              | Descripción interna (opcional).                         |

La validación ocurre en el servidor (`src/routes/api/validate-code.ts`): si el código no
existe o ha caducado se devuelve un error, y si es válido se emite un token firmado con la
fecha de expiración. En producción puedes definir la variable de entorno `PMDT_ACCESS_SECRET`
para reforzar la firma de los tokens.

## Desarrollo

Este proyecto usa el stack de Lovable (TanStack Start + React + Tailwind + shadcn/ui).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Build con Lovable

Sigue desarrollando este proyecto en el [editor de Lovable](https://lovable.dev).
Los cambios que subas al repositorio se sincronizan de vuelta a Lovable.