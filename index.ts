import express from "express"
import swaggerUi from 'swagger-ui-express';
//import * as swaggerDocument from "./swagger";
import { conexion } from './database/dbConnection';
import { rutasAlumnos } from "./rutas/rutasAlumnos";
import { rutasMaterias } from "./rutas/rutasMaterias";
import mysql, { RowDataPacket } from "mysql2"
import { rutasPersonalizadas } from "./rutas/rutasPersonalizadas";

const app: express.Application = express();

app.use(express.json());
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get('/', (_req , _res) => _res.send('Bienvenido a mi API REST!'));

app.use("/alumnos", rutasAlumnos);
app.use("/materias", rutasMaterias);
app.use("/materias", rutasPersonalizadas);

app.listen(3000, () => {})
