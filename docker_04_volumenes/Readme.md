En esta carpeta tenemos
 - un `package.json` para que un `npm install` descargue la librería Express que permite hacer backends ligeros
 - un `app.js` que usa la librería Express para escuchar llamadas GET al puerto 3000 y por cada llamada
   - aumenta un contador que escribe en un archivo `data/count.txt`
   - devuelve un texto indicando el valor del contador
 - un `dockerfile` que partiendo de una imagen node ligera hace:
   -  `npm install` para descargar la librería Express
   -  exponer el puerto 3000
   -  lanzar la aplicación con `npm start`
-  un `docker-compose.yml` que mapea una carpeta local del host sobre una carpeta de dentro del contendor como un volumen, de tal modo que al arrancar el docker compose se puede ver el contador en el archivo de esa carpeta del host
  
# Levantar el servicio
El servicio se levanta ejecutando:
```
docker compose up -d
```

# Detener el servicio
El servicio se detiene ejecutando:
```
docker compose down
```
