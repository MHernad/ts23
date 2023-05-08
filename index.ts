import express from "express"
import { rutasAlumnos } from "./rutas/rutasAlumnos";
import { rutasMaterias } from "./rutas/rutasMaterias";
import { rutasPersonalizadas } from "./rutas/rutasPersonalizadas";
import { rutasLogin } from "./rutas/rutasLogin";
import { middleware } from "./middleware/auth";

const app: express.Application = express();

app.use(express.json());
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get('/', (_req , _res) => _res.send('Bienvenido a mi API REST!'));

app.use("/alumnos", middleware.authentication, rutasAlumnos);
app.use("/materias", middleware.authentication, rutasMaterias);
app.use("/materias", middleware.authentication, rutasPersonalizadas);
app.use("/users", rutasLogin);

app.listen(3000, () => {})
