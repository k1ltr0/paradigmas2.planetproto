// -> Crea un objeto 'machine'
//    con una propiedad 'motors' = 4
__

let machine = {
	'motors' : 4
}

// -> Crea un objeto robot
//    con una propiedad 'friendly' = true
__

let robot = {
	'friendly' : true
}
// -> Crea un objeto 'robby'
__

let robby = {}

// -> Haz que 'machine' sea el prototipo de 'robot'
__

robot.__proto__ = machine;

// -> Haz que 'robot' sea el prototipo de 'robby'
__

robby.__proto__ = robot;

// -> Qué es `robby.motors`?
claim(robby.motors, 4);

// -> Qué es `robby.friendly`?
claim(robby.friendly, true);


// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
module.exports = {
  machine: machine,
  robot:   robot,
  robby:   robby
}
