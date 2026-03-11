Esta carpeta contiene un ejemplo de como usar Trivy para analizar la seguridad y vulnerabilidades de un proyecto.

Se va a usar WebGoat que es un proyecto creado con vulnerabilidades para fines didácticos.
Se puede clonar su código desde github:
git clone https://github.com/WebGoat/WebGoat.git

Y hay que ajustar la ruta donde se clona en el archivo .env

También hay que ajustar en el archivo .env la ruta donde queremos que se generen los resultados del análisis.

En el `compose.yml` se levanta un `nginx` que depende de que trivy finalice el análisis para iniciarse.

Al ejecutar:
```
docker compose up -d
```

Se inician los análisis de Trivy y se crean 3 archivos resultados de tipo .sarif

SARIF es un formato de Microsoft, para visualizarlo desde VSCode podemos instalar la extensión `SARIF Viewer`