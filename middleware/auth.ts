import * as jwt from "jsonwebtoken"
import { dataInToken } from "../types/dataInToken";
export class middleware{
static async authentication(req: any, res: any, next: any) {
    const token = req.header('Authorization')?.replace('Bearer ', '');    
    if(!token) throw new Error();
    try {
        const verif = jwt.verify(token, "secret_key") as dataInToken
        const _name = verif._nombre

        if(_name != req.body.nombre) {
            res.sendStatus(400)
        }
        else {
            next()
        }
    } catch (error) {
        res.sendStatus(321);
    }
} 
}
