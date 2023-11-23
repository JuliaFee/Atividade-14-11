import {Router} from "express";
import { getAllEstudantes, 
    getEstudantesById, 
    createEstudante, 
    updateEstudante, 
    deleteEstudante } from "../controller/estudante.controller.js";

const rotaEstudante = Router();
rotaEstudante.get("/", getAllEstudantes);
rotaEstudante.get("/:id", getEstudantesById);
rotaEstudante.post("/", createEstudante);
rotaEstudante.put("/:id", updateEstudante);
rotaEstudante.delete("/:id", deleteEstudante);

export default rotaEstudante;