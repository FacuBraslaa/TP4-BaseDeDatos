import mysql from "mysql2/promise";

export const conn = await mysql.createConnection({
    host: 'localhost',  // Dirección del servidor MySQL
    user: 'root', // Nombre de usuario de MySQL
   //  password: 'tu_contraseña', Contraseña de MySQL
    database: 'spoticfy' // Nombre de la base de datos
});