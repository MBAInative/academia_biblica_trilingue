# Academia Bíblica Trilingüe - Web Oficial

Este repositorio contiene el código fuente de la página web oficial de la **Academia Bíblica Trilingüe** (Inmaculada Rodríguez Torné).

**URL Producción:** [https://academiabiblicatrilingue.com](https://academiabiblicatrilingue.com)

---

## 🛠 Tecnologías

- **Framework:** React 18
- **Build Tool:** Vite
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Hosting:** Hostinger (Apache)

---

## 📂 Estructura del Proyecto

El proyecto sigue una estructura estándar, pero configurada específicamente para funcionar en un hosting compartido sin Node.js en el servidor.

- **`src/`**: Código fuente de la aplicación React.
- **`dist/`**: Versión compilada y optimizada para producción. **¡IMPORTANTE!** Esta carpeta SÍ se sube al repositorio Git (a diferencia de lo habitual) para facilitar el despliegue automático en Hostinger.
- **`.htaccess`**: Archivo de configuración de Apache que redirige todo el tráfico a la carpeta `dist` y gestiona las rutas de la SPA (Single Page Application).

---

## 🚀 Despliegue en Hostinger

El despliegue está automatizado mediante **Git Deployment** en el panel de Hostinger.

### Configuración Crítica:
1.  **Repositorio:** Conectado a la rama `master`.
2.  **Directory (Install Path):** Debe estar **VACÍO** (raíz de `public_html`).
3.  **Webhook:** Configurado en GitHub (`Settings -> Webhooks`) apuntando a la URL de Hostinger.
    - *Content-type:* `application/json`
    - *Secret:* Vacío.

**Cómo funciona:**
Al hacer `push` a `master`, Hostinger descarga el repositorio completo. El archivo `.htaccess` en la raíz se encarga de servir el contenido de `dist/index.html` al usuario, haciendo transparente que la web está en una subcarpeta.

---

## 📧 Formulario de Contacto

El formulario de la página `/contacto` utiliza **Formspree** para el envío de emails sin backend.

- **Servicio:** [Formspree](https://formspree.io)
- **ID del Formulario:** `mjggaglb`
- **Destinatario:** `infohebreo@yahoo.com`

Si se cambia el correo de destino, hay que crear un nuevo formulario en Formspree y actualizar el ID en `src/pages/Contact.jsx`.

---

## 🖼 Galería de Arte y Protección

La sección "Biblia y Arte" (`/biblia-arte`) contiene una galería de dibujos con las siguientes características:
- **Carga dinámica:** Las imágenes se cargan automáticamente desde `src/assets/dibujos` usando `import.meta.glob`.
- **Lightbox:** Modal a pantalla completa al hacer clic.
- **Protección:** Se ha deshabilitado el **clic derecho** (context menu) y el **arrastrar y soltar** (draggable="false") en las imágenes para dificultar su descarga no autorizada.

---

## 💻 Desarrollo Local

Para trabajar en este proyecto localmente:

1.  **Clonar:**
    ```bash
    git clone https://github.com/MBAInative/academia_biblica_trilingue.git
    cd academia_biblica_trilingue
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Arrancar servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    Accede a `http://localhost:3000`.

4.  **Compilar para producción:**
    ```bash
    npm run build
    ```
    Esto actualizará la carpeta `dist`. **Recuerda hacer esto SIEMPRE antes de hacer commit/push**, ya que Hostinger lee de esa carpeta.

---

## 📝 Notas para IAs / Desarrolladores Futuros

- **No borres la carpeta `dist` del `.gitignore`.** Es vital para el despliegue actual.
- **Imágenes:** Las nuevas imágenes de conferencias o dibujos deben añadirse a `src/assets` y luego importarse o moverse a las carpetas dinámicas (`src/assets/dibujos` para la galería).
- **Rutas:** Si añades una nueva página, recuerda registrarla en `src/App.jsx` y añadir el enlace en `src/components/Header.jsx`.

---
*Última actualización: Enero 2026*