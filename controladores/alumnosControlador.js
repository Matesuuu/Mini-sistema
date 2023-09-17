const fs = require("fs");
const alumnosServicio = require("../servicios/alumnoServicio");

exports.getAllAlumnos = (req, res) => {
  const alumnos = alumnosServicio.getAllAlumnos();
  let html = "<h1>Lista de Alumnos</h1><ul>";
  alumnos.forEach((alumno) => {
    html += `<li>${alumno.nombre} ${alumno.apellido} <a href="/alumnos/${alumno.legajo}">Ver detalles</a></li>`;
  });
  html += "</ul>";
  res.send(html);
};

exports.getAlumnoByLegajo = (req, res) => {
  const legajo = parseInt(req.params.legajo);
  const alumno = alumnosServicio.getAlumnoByLegajo(legajo);
  if (alumno) {
    res.json(alumno);
  } else {
    res.status(404).json({ message: "Alumno no encontrado" });
  }
};

exports.addAlumno = (req, res) => {
  const nuevoAlumno = req.body;
  const alumno = alumnosServicio.addAlumno(nuevoAlumno);
  res.status(201).json(alumno);
};

exports.updateAlumno = (req, res) => {
  const legajo = parseInt(req.params.legajo);

  const updatedAlumno = req.body;
  const alumno = alumnosServicio.updateAlumno(legajo, updatedAlumno);
  if (alumno) {
    res.json(alumno);
  } else {
    res.status(404).json({ message: "Alumno no encontrado" });
  }
};

exports.deleteAlumno = (req, res) => {
  const legajo = parseInt(req.params.legajo);

  const alumno = alumnosServicio.deleteAlumno(legajo);
  if (alumno) {
    res.json({ message: "Alumno eliminado correctamente" });
  } else {
    res.status(404).json({ message: "Alumno no encontrado" });
  }
};
