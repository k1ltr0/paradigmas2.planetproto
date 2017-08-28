// -> Define un objeto llamado `Robot`
// -> Define un método llamado `new` en `Robot`
// -> Cuando llamamos a `Robot.new()` debe retornar un objeto nuevo con Robot
//    como prototipo
//    Por ejemplo: var robby = Robot.new();
//    `Robot` debe ser el prototipo de `robby`

__

let Robot = {
	new : function (){
		return Object.create(Robot)
	}
}

/* ======DUDAS PARA LOS PROFES======

Por lo que había entendido en clases cuando construimos un Objeto sin Clase
no va con mayúscula, pero en este caso, para poder pasar, lo tuve que hacer.
Como en module.exports está declarado con mayúscula Robot, lo tuve que 
poner también al definirlo arribita. 

Y también caché que en el entre paréntesis donde puse Robot, puedo reemplazarlo con this. =)

*/

// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
module.exports = {
  Robot: Robot
}
