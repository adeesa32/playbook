// crea la clase que necesitas para correr el archivo main.js
// (debes exportarla usando ESM):
//- usar export default
//- la clase tiene la misma implementación que el ejercicio anterior
//- ejecutar node.js


export default class MyPokemon{
    constructor (name) {
      this.name = name
    }
    sayHello () {
      console.log(`Mi pokemon ${this.name} te saluda!!!`);
    }
    sayMessage (message) {
      console.log (`Mi pokemon ${this.name} dice: ${message}`);
    }
}

//let Pokemon = new Object(); // crea un objeto 
//    Pokemon.tipo='mounstruo'
//export default {MyPokemon} 
