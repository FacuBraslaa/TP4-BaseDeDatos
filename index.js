import express from "express";
const app = express();
const port = 3000;

import albumes from "./controllers/albumes.js";
import artistas from "./controllers/artistas.js";
import canciones from "./controllers/canciones.js";

app.use(express.json());

app.get("/albumes", albumes.getAlbumes);
app.get("/albumes/:id", albumes.getAlbum);
app.post("/albumes",albumes.createAlbum);
app.put("/albumes/:id",albumes.updateAlbum);
app.delete("/albumes/:id",albumes.deleteAlbum);

app.get("/", (_, res) => {
    res.send("SpoTICfy API working!");
});

app.get("/artistas", artistas.getArtistas);
app.get("/artistas/:id", artistas.getArtista)

/* ------------------- Rutas ------------------- */

// Artistas 
// Completar con las rutas de artistas
// Para acceder a cada funcion de artistas, se debe hacer de la siguiente forma:
// artistas.getArtistas;
// artistas.getArtista;
// ...

// Albumes
// Completar con las rutas de albumes
// Para acceder a cada funcion de albumes, se debe hacer de la siguiente forma:
// albumes.getAlbumes;
// albumes.getAlbum;
// ...

// Canciones
// Completar con las rutas de canciones
// Para acceder a cada funcion de canciones, se debe hacer de la siguiente forma:
// canciones.getCanciones;
// canciones.getCancion;
// ...

app.listen(port, () => {
    console.log(`SpoTICfy API listening at http://localhost:${port}`);
});
