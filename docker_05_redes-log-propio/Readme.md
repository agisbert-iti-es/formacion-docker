En esta carpeta se tiene:
- un script `app.js` que arranca un Express para contestar al puerto 3000, y cada petición recibida
  - aumenta un contador en un volumen visible desde el host
  - añade una línea en un archivo de log en otro volumen
- un `docker-compose.yml` con varios servicios:
  - un servicio para dockerizar el `app.js` y exponerlo en el puerto 3003 del host
  - un servicio `flog` que es un generador de logs para pruebas configurado para generar una nueva línea de log cada 200ms
  - un servicio `promptail` para recoger los archivos *.log de una ruta concreta del volumen y enviarlos a `loki`
  - un servicio `loki` para acumular logs y ofrecerlos como origen de datos, como si fuera una base de datos de logs
  - un servicio `grafana` para conectarlo con `loki` y poder ver los logs de ambos contenedores: `flog` y la aplicacion `contador-app`