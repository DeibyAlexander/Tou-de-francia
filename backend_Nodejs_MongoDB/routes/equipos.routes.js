import { Router } from "express";
import { check } from "express-validator";

import validateDocuments from "../middlewares/validate.documents.js";
import Patrocinadores from "../models/Patrocinadores.js";

import { obtainEquipos, obtainOneEquipos,deleteEquipos,insertEquipos,updateEquipos } from "../controllers/equipos.controllers.js";

const router = Router();

router.get("/all",obtainEquipos);

router.get("/one/:id",obtainOneEquipos);

router.post("/add",[
    check('equipo','Equipo es requerido').not().isEmpty(),
    check('patrocinador').custom(async(patrocinador='')=>{
        const existePatrocinador = await Patrocinadores.findOne({patrocinador});
        if (!existePatrocinador) {
            throw new Error(`El patrocinador ${patrocinador} no esta registrado`)
            
        }
    }),
    validateDocuments
],insertEquipos);

router.delete("/del/:id",deleteEquipos);

router.patch("/upd/:id",updateEquipos);

export default router;