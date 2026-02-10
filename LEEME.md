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
*   **Favicon:** Se utiliza `public/favicon.jpg` (que corresponde al Logo ABT).

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

## 📝 Estado Actual (Enero 2026)

1.  **Home:** Muestra la cabecera, la sección de cursos 2025-2026 detallada y la propuesta formativa completa.
2.  **Cursos:** Simplificada para mostrar directamente la "Propuesta Formativa" sin duplicar la intro de la Home.
3.  **Entrevistas:** Actualizada con nuevos iconos (Frontera/Horizonte) y limpieza de contenido antiguo.
4.  **Header:** Limpio, solo muestra el texto "IRT" y el menú de navegación.

## Comandos Útiles

*   `npm run dev`: Iniciar servidor de desarrollo local (localhost:3000).
*   `npm run build`: Compilar proyecto para producción (carpeta `dist`).