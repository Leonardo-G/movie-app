# App Movies

Aplicación en modo de producción a través de [este link](https://legendary-mooncake-bb592b.netlify.app/). Realizado con React/TypeScript consultando la [API "Themoviedb"](https://developers.themoviedb.org/3/discover/movie-discover)

### Instalación

Para tener el código en su entorno local, nos ubicamos en la rama MAIN, para descargar o clonar el repositorio.
Una vez clonado el repositorio, para poder iniciar la aplicación en tu entorno local, hay que instalar las dependencias necesarias colocando en la terminal: 

```
npm install
```

Una vez instalado, podemos correr la aplicación en un servidor local con:

```
npm start
```

No modificar el archivo .env.development.local, a menos que tenga su propio KEY de la API. En caso de llevar a "modo produccón", modificar el nombre del archivo por el nombre: ".env.production.local" 

### Herramientas utilizadas

- React: El framework mas popular, usando create-react-app.
- React-router-dom: Para realizar la navegación entre los distintos componentes a través de rutas. Version 6.3.0.
- @fortawesome/free-regular-svg-icons: Importaciones de iconos de Font Awesome Icon.