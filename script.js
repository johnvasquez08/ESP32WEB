const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

let esp32Data = {}; // Aquí se almacenan los datos enviados por la ESP32

// Ruta para recibir datos de la ESP32
app.post('/send-data', (req, res) => {
  esp32Data = req.body;
  console.log('Datos recibidos:', esp32Data);
  res.sendStatus(200);
});

// Ruta para enviar datos al navegador
app.get('/data', (req, res) => {
  res.json(esp32Data);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
