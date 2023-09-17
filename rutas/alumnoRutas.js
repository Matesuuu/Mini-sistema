const express = require("express");
const router = express.Router();
const alumnosControlador = require("../controladores/alumnosControlador");

router.get("/", (req, res) => {
  res.send(
    'Bienvenido al sistema de alumnos. <a href="/alumnos">Lista de Alumnos</a>'
  );
});

router.get("/alumnos", alumnosControlador.getAllAlumnos);
router.get("/alumnos/:legajo", alumnosControlador.getAlumnoByLegajo);
router.post("/alumnos", alumnosControlador.addAlumno);
router.put("/alumnos/:legajo", alumnosControlador.updateAlumno);
router.delete("/alumnos/:legajo", alumnosControlador.deleteAlumno);

module.exports = router;
