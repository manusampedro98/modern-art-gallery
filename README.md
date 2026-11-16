# Modern Art Gallery

Micrositio de dos páginas para la tercera tarea de CSS. La portada presenta la colección y la página de ubicación muestra un mapa, la dirección y el horario de la galería.

## Desarrollo

Desde la carpeta del proyecto, ejecuta:

```sh
npm ci
npm run build
```

Abre `index.html` en el navegador. `npm run dev` recompila los estilos al guardar cambios. Tailwind CSS 3.4.19 está fijado en `package.json` y su configuración vive en `tailwind.config.cjs`. Edita `src/styles.css` para cambiar las reglas propias y vuelve a generar `styles.css` antes de publicar.

## Diseño y recursos

La maquetación parte del diseño móvil y cambia a 768 px y 1200 px. Las fotografías y los vectores proceden del archivo Figma del ejercicio. El mapa conserva el tratamiento en escala de grises de la referencia en PDF. Las fuentes Big Shoulders Display y Outfit se sirven en local con sus licencias OFL en `assets/fonts/`.

El diseño no indica perfiles oficiales para las redes sociales. Los iconos enlazan a las páginas principales de cada plataforma.

## Publicación

GitHub Pages sirve el sitio desde la raíz de la rama `main`. El repositorio incluye el CSS compilado y las dos páginas usan rutas relativas.

Consulta [harness.md](./harness.md) para repetir las comprobaciones.
