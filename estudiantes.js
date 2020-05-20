const estudiantes = [
    {id: "001", matricula: "01142739", nombre: "Karen", semestre: 7, creditos: 280},
    {id: "002", matricula: "01132739", nombre: "Karla", semestre: 8, creditos: 280},
    {id: "003", matricula: "01132738", nombre: "Abner", semestre: 8, creditos: 280},
    {id: "004", matricula: "01142736", nombre: "Juan", semestre: 7, creditos: 280},
    {id: "005", matricula: "01142734", nombre: "Yamany", semestre: 7, creditos: 280}];

const findById = function (id) {
    return estudiantes.find((e) => {
        return e.id == id;
    });
};

const findByMatricula = function (matricula) {
    return estudiantes.find((e) => {
        return e.matricula == matricula;
    });
};
const findAll = function() {
    return estudiantes;
};

exports.findById = findById;
exports.findByMatricula = findByMatricula;
exports.findAll = findAll;
