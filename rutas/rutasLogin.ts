import { Router } from "express";
import { dbUsers } from "../database/dbUsers";
export const rutasLogin = Router();

rutasLogin.post("/register", (_req, _res) => {
    dbUsers.registrarse(_req.body.nombre, _req.body.passwordhash)
    _res.sendStatus(200);
});

rutasLogin.post("/login", (_req, _res) => {
    dbUsers.login(_req.body.nombre, _req.body.passwordhash).then((token) => _res.json(token))
});
