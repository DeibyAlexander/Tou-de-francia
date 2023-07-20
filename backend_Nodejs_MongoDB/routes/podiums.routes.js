import { Router } from "express";
import { check } from "express-validator";
import validateDocuments from "../middlewares/validate.documents.js";
/* import Podiums from "../models/Podiums.js"; */

import { obtainPodiums, obtainOnePodium,deletePodium,insertPodium,updatePodium } from "../controllers/podiums.controller.js";

const router = Router();

router.get("/all",obtainPodiums);

router.get("/one/:id",obtainOnePodium);

router.post("/add",[
    check('carrera','Carrera es requerido').not().isEmpty(),
    check('año','año es requerido').not().isEmpty(),
    check('primer_lugar','primer_lugar es requerido').not().isEmpty(),
    check('segundo_lugar','segundo_lugar es requerido').not().isEmpty(),
    check('tercer_lugar','tercer_lugar es requerido').not().isEmpty(),
    validateDocuments
],insertPodium);

router.delete("/del/:id",deletePodium);

router.patch("/upd/:id",updatePodium);

export default router;