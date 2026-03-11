const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const countFile = '/data/count.txt';
const log = '/tmp/log/app.log';

app.get('/', (req, res) => {
    let count = 1;
    
    // Leer el contador actual si existe
    if (fs.existsSync(countFile)) {
        count = parseInt(fs.readFileSync(countFile, 'utf8')) || 1;
    }
    
    // Incrementar y guardar
    count++;
    fs.writeFileSync(countFile, count.toString());
    
    // Escribir en el archivo de log
    fs.appendFileSync(log, `{ count: ${count}, timestamp: ${new Date().toISOString()} }\n`);
    
    res.send(`<h1>¡Hola mundo! Me has visto ${count} vec${count > 1 ? 'es' : ''}</h1>`);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});