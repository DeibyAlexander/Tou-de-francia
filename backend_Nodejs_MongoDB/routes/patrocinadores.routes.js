import { Router } from "express";
import { obtainPatrocinadores, obtainOnePatrocinador,deletePatrocinador,insertPatrocinadores,updatePatrocinadores } from "../controllers/patrocinadores.controllers.js";

const router = Router();

router.get("/all",obtainPatrocinadores);

router.get("/one/:id",obtainOnePatrocinador);

router.post("/add",insertPatrocinadores);

router.delete("/del/:id",deletePatrocinador);

router.patch("/upd/:id",updatePatrocinadores);

export default router;