# Academia Bíblica Trilingüe - Proyecto Web

## Descripción del Proyecto
Este repositorio contiene el código fuente del sitio web oficial de la **Academia Bíblica Trilingüe**, dirigida por la **Pfra. Inmaculada Rodríguez Torné**.
El objetivo de la web es ofrecer formación en lenguas bíblicas (Hebreo, Griego, Latín), divulgar contenido cultural/teológico y servir como punto de contacto.

**URL de producción:** [https://academiabiblicatrilingue.com](https://academiabiblicatrilingue.com)

---

## ⚠️ PROTOCOLO DE DESPLIEGUE (CRÍTICO)

**IMPORTANTE PARA IA Y DESARROLLADORES:**
El hosting actual (Hostinger) está configurado para servir archivos estáticos directamente y **NO ejecuta el proceso de construcción (build) automáticamente**. Depende de que subamos la carpeta `dist` compilada.

**Para aplicar cambios en producción, SIEMPRE debes seguir estos pasos:**

1.  Realizar los cambios en el código (`src/`).
2.  Ejecutar el comando de construcción localmente:
    ```bash
    npm run build
    ```
3.  Asegurarse de añadir la carpeta `dist` actualizada al commit:
    ```bash
    git add dist
    ```
4.  Hacer commit y push a la rama `master`:
    ```bash
    git commit -m "Descripción del cambio"
    git push
    ```

---

## 🔄 Automatización del Despliegue (CI/CD)

**IMPORTANTE:** El repositorio está configurado para que, una vez se hace el `git push` a la rama `master`, **Hostinger se actualice automáticamente**. 

Esto se gestiona mediante un Webhook (o GitHub Action) que sincroniza el contenido de la rama con el servidor de producción de forma inmediata. No es necesario realizar acciones adicionales en el panel de Hostinger tras el push, más allá de verificar los cambios online y limpiar la caché si fuera necesario.

---

## 🛠️ Stack Tecnológico

*   **Core:** React 18 + Vite
*   **Estilos:** Tailwind CSS
*   **Animaciones:** Framer Motion
*   **Iconos:** Lucide React
*   **Formularios:** Formspree
*   **Enrutamiento:** React Router DOM
*   **Títulos y meta de cada página:** `src/components/PageMeta.jsx` (componente propio; se retiró `react-helmet`, que con React 18 no aplicaba nada)

---

## 📏 Convenciones del Proyecto

### 1. Nombres de Archivos (Assets)
**Regla de Oro:** Todos los archivos en `src/assets/` deben nombrarse en **minúsculas** y usar **guiones** para separar palabras (kebab-case).
*   ✅ Correcto: `logo-abt.jpg`, `frontera-icono.jpg`
*   ❌ Incorrecto: `LogoABT.jpg`, `Frontera Icono.jpg`

*Motivo:* Los servidores Linux (como Hostinger) distinguen mayúsculas de minúsculas. Si el código pide `Logo.jpg` pero el archivo es `logo.jpg`, fallará en producción aunque funcione en Windows/Localhost.

### 2. Estructura Visual Común
Se ha establecido un patrón de diseño para mantener la coherencia:
*   **Cabecera de Secciones:** Cada página principal (Home, About, Courses, etc.) incluye el logo `logo-abt.jpg` centrado en la parte superior del contenido principal, justo antes del título H1.
*   **Favicon:** Se utiliza `public/favicon.png` (que corresponde al Logo ABT).

### 3. Peso de las imágenes
Antes de añadir una imagen a `src/assets/`, redúcela: lado mayor de 1800 px como máximo (400 px si es una foto de testimonio, que se muestra a 96 px) y guárdala en **JPG**, no en PNG. El PNG solo para logos o iconos que necesiten fondo transparente. Una foto de 4 MB en PNG pesa unos 80 KB en JPG y se ve igual.

---

## 📂 Estructura de Directorios Clave

```
/
├── dist/               # ARCHIVOS DE PRODUCCIÓN (Se suben al repo)
├── public/             # Archivos estáticos directos (favicon, audios)
├── src/
│   ├── assets/         # Imágenes e iconos (importados en código)
│   ├── components/     # Componentes reutilizables (Header, Footer, UI)
│   ├── pages/          # Vistas principales
│   │   ├── Home.jsx    # Portada (Incluye sección cursos y propuesta formativa)
│   │   ├── Courses.jsx # Detalle cursos (Empieza con Propuesta Formativa)
│   │   ├── ...
│   └── main.jsx        # Punto de entrada
└── vite.config.js      # Configuración del bundler
```

---

## 📝 Estado Actual (Septiembre 2026)

1.  **Home:** Cabecera, cuatro accesos a las secciones, un **aviso corto** de los cursos 2026-2027 con botón a "Hebreo y Griego", y los testimonios. Ya **no** duplica los horarios ni la Propuesta Formativa.
2.  **Hebreo y Griego (`/academia`):** Única página con el detalle de los cursos: carteles, horarios de los siete niveles, programa, tarifas y acceso al Campus.
3.  **Cursos y Conferencias (`/cursos`):** Única página con la "Propuesta Formativa".
4.  **Entrevistas:** Actualizada con nuevos iconos (Frontera/Horizonte) y limpieza de contenido antiguo.
5.  **Header:** Limpio, solo muestra el texto "IRT" y el menú de navegación, con el enlace externo al Campus.

**Regla de oro del contenido:** cada dato vive en una sola página. Si un horario o una tarifa cambia, se toca en un único sitio.

## 🔗 El Campus Virtual

El menú incluye **Campus**, que apunta a `https://campus.academiabiblicatrilingue.com`. Es una aplicación aparte, con su propio repositorio (`campus-academia-biblica-trilingue`), guardada en la carpeta `academia_biblica_trilingue/` de este directorio. **No forma parte de la compilación de esta web** (no entra en `dist` ni en este repositorio), pero **sí forma parte del sitio para el visitante**: si se toca el menú o la página "Hebreo y Griego", hay que comprobar que el enlace al Campus sigue vivo.

## Comandos Útiles

*   `npm run dev`: Iniciar servidor de desarrollo local (localhost:3000).
*   `npm run build`: Compilar proyecto para producción (carpeta `dist`).