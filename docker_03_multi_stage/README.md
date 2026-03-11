En esta carpeta tenemos:
- una aplicación Vue básica, la que se crea por defecto
- un dockerfile con 2 etapas
  - etapa `builder` que usa una imagen con Node para descargar dependencias, compilar y empaquetar la aplicación
  - etapa `server` que usa una imagen con el nginx ya preparado sobre la que se copia la `dist` resultado del empaquetado anterior

# Construir la imagen
Para construir la imagen docker ejecutaremos el comando:
```
docker build -t my-vue-app:1.0.0 .
```

# Ejecutar un contenedor que use dicha imagen
Para crear un contenedor que use la imagen ejecutaremos el comando:
```
docker run --rm -d -p 8088:80 --name=app_vue my-vue-app:1.0.0
```

Parámetros:
  - `--rm` hace que al termina la ejecución se elimine automáticamente el contenedor
  - `-d` vuelve a la línea de comandos tras solicitar el arranque de los contenedores
  - `-p 8088:80` mapea el puerto 80 que expone internamente nginx con el puerto 8088 del host para que puedas acceder a la web desde `http://localhost:8088`
