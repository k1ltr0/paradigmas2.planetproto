// -> Creamos un objeto llamado `machine`
var machine = {};

// -> Usa Object.create para creae otro objeto llamado `robot` con `machine`
//    como prototipo
__

let robot = Object.create(machine)

// -> Usa Object.create para crear otro objeto llamado `robby` con `robot`
//    como prototipo
__

let robby = Object.create(robot)

// -> Cuál es el resultado de `machine.isPrototypeOf(robby)`?
claim(machine.isPrototypeOf(robby), true);

// -> Cuál es el resultado de `robot.isPrototypeOf(robby)`?
claim(robot.isPrototypeOf(robby), true);

// -> Qué objeto es el prototipo directo de `robby`?
claim.same(Object.getPrototypeOf(robby), robot);

/* ======DUDAS PARA LOS PROFES======

En el Claim de la línea 22, si bien lo tengo bien y pasa la prueba, tengo duda al respecto de
getPrototypeOf. Yo lo entiendo como "robby es el prototipo de: ¿?", por lo que le puse robot.
En el resultado me lanza correcto PERO me tira esto en la consola --> "{} === {} => true"
Me muestra las llaves vacías porque como robot es prototipo de machine y machine no tiene 
especificada ninguna propiedad, me tira las llaves vacías, ESTOY EN LO CIERTO?
*/


// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
module.exports = {
  machine:  machine,
  robot:    robot,
  robby:    robby
}
