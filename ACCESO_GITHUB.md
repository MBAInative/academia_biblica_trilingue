# Documentación de Acceso a GitHub - Academia Bíblica Trilingüe

Este documento detalla la configuración de identidad y acceso necesaria para gestionar este repositorio y evitar errores de permisos (403 Forbidden).

## Identidad del Proyecto
*   **Organización:** MBAInative
*   **Repositorio:** `https://github.com/MBAInative/academia_biblica_trilingue.git`
*   **Usuario Administrador:** `MBAInative`
*   **Email Asociado:** `info@mbainative.com`

## Configuración Local de Git
Para asegurar que los commits se registren con la autoría correcta, el entorno debe estar configurado de la siguiente manera:
```powershell
git config user.name "MBAInative"
git config user.email "info@mbainative.com"
```

## Resolución de Errores de Permisos (403 Forbidden)
Si el comando `git push` devuelve un error de denegación de acceso para el usuario `lbt00001-beep` u otro:

1.  **Limpiar Credenciales de Windows:**
    *   Ir al "Administrador de Credenciales" -> "Credenciales de Windows".
    *   Eliminar cualquier entrada relacionada con `git:https://github.com`.
2.  **Reiniciar Autenticación en CLI:**
    *   Usar `gh auth logout` para cerrar sesiones antiguas.
    *   Usar `gh auth login` y seguir el proceso de código de 8 dígitos asegurándose de elegir la cuenta `info@mbainative.com`.
3.  **Forzar Identidad en el Remoto:**
    *   Si persiste el error, se puede forzar el uso de la cuenta de administrador en la URL:
        `git remote set-url origin https://info@mbainative.com@github.com/MBAInative/academia_biblica_trilingue.git`

## Estado del Servidor de Desarrollo
El proyecto utiliza Vite y se previsualiza localmente en:
`http://localhost:3000`
