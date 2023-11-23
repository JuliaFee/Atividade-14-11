import {Router} from "express";
import { getAllCursos, 
    getCursoById, 
    createCurso, 
    updateCurso, 
    deleteCurso } from "../controller/curso.controller";

const rotaCurso = Router();

rotaCurso.get("/", getAllCursos);
rotaCurso.get("/:id", getCursoById);
rotaCurso.post("/", createCurso);
rotaCurso.put("/:id", updateCurso);
rotaCurso.delete("/:id", deleteCurso);


export default rotaCurso;