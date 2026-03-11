En esta carpeta tenemos:
- un script PHP en el archivo `hello.py` que muestra un texto por consola.
- un dockerfile con las indicaciones para crear una imagen que partiendo de un ubuntu, le instala las librerias para poder ejecutar Python, y al arrancar el contenedor ejecutará ese script 

# Construir la imagen
Para construir la imagen docker ejecutaremos el comando:
```
docker build -t hello-world-python:1.0.0 .
```

# Ejecutar un contenedor que use dicha imagen
Para crear un contenedor que use la imagen ejecutaremos el comando:
```
docker run --rm hello-world-python:1.0.0 
```

Nota: el parámetro `--rm` hace que al termina la ejecución se elimine automáticamente el contenedor
