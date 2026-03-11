En esta carpeta tenemos:
- un script JS en el archivo `index.js` que muestra un texto por consola.
- un dockerfile con las indicaciones para crear una imagen que partiendo de un node preinstalado ejecuta el script JS cada vez que se arranca el contenedor

# Construir la imagen
Para construir la imagen docker ejecutaremos el comando:
```
docker build -t hello-world-nodejs:1.0.0 .
```

# Ejecutar un contenedor que use dicha imagen
Para crear un contenedor que use la imagen ejecutaremos el comando:
```
docker run --rm hello-world-nodejs:1.0.0 
```

Nota: el parámetro `--rm` hace que al termina la ejecución se elimine automáticamente el contenedor
