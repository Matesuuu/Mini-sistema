const fs = require("fs");
const alumnosDataPath = "./alumnos/alumnos.json";

exports.getAllAlumnos = () => {
  const data = fs.readFileSync(alumnosDataPath, "utf8");
  return JSON.parse(data);
};

exports.getAlumnoByLegajo = (legajo) => {
  const alumnos = this.getAllAlumnos();
  return alumnos.find((alumno) => alumno.legajo === legajo);
};

exports.addAlumno = (nuevoAlumno) => {
  const alumnos = this.getAllAlumnos();
  alumnos.push(nuevoAlumno);
  fs.writeFileSync(alumnosDataPath, JSON.stringify(alumnos, null, 2));
  return nuevoAlumno;
};

exports.updateAlumno = (legajo, updatedAlumno) => {
  const alumnos = this.getAllAlumnos();
  const index = alumnos.findIndex((alumno) => alumno.legajo === legajo);
  if (index !== -1) {
    alumnos[index] = { ...alumnos[index], ...updatedAlumno };
    fs.writeFileSync(alumnosDataPath, JSON.stringify(alumnos, null, 2));
    return alumnos[index];
  }
  return null;
};

exports.deleteAlumno = (legajo) => {
  const alumnos = this.getAllAlumnos();
  const index = alumnos.findIndex((alumno) => alumno.legajo === legajo);
  if (index !== -1) {
    const deletedAlumno = alumnos.splice(index, 1)[0];
    fs.writeFileSync(alumnosDataPath, JSON.stringify(alumnos, null, 2));
    return deletedAlumno;
  } else {
    return null;
  }
};
