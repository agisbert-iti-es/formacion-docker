Esta carpeta tiene un docker compose con dos servicios:
 - mysql: una imagen docker que proporciona una base de datos MySql
 - phpMyAdmin: una aplicación PHP para acceder, consultar y modificar datos del MySql

# Variables de entorno
El archivo `.env` define pares de variables que se usan en el `docker-compose.yml`

# Verificación de salus del servicio
En el servicio `mysql` del `docker-compose.yml` se ha configurado un mecanismo para determinar que el contenedor además de estar en ejecución está dando el servicio que se espera, en este caso sería que la base de datos ya admite llamadas a través del puerto 3306.

Y el servicio `phpMyAdmin` está condicionado a que `mysql` esté healthy, de este modo docker se asegura que cuando se levante un servicio sus dependencias estarán ya disponibles.

# Consultar docker compose con valores aplicados
Dado que el archivo `docker-compose.yml` hace uso de variables, si queremos ver el contenido del archivo con las variables aplicadas se puede lanzar el comando:
```
docker compose config
```

# Levantar el servicio
Para ejecutar el servicio lanzaremos el comando:
```
docker compose up -d
```

# Consultar los logs
Para ver los logs de los contenedores lanzaremos el comando:
```
docker compose logs -f
```

El parámetro `-f` hace que la consola se quede mostrando los logs hasta forzar la salida con Ctrl+C, lo que no detendrá la ejecución de los contenedores, solo nuestra visualización de los logs.

# Detener y limpiar los contenedores
```
docker compose down
```