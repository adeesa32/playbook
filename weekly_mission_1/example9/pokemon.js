

//exportar usando CommonJS:
//- Crea la clase
//- Crea un constructor que permita recibir un nombre
//- Crea la función sayHello()
//- Creo la función sayMessage()
//- Exporta la clase para que pueda ser importada en el archvio main.js

class Pokemon {
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
module.exports= Pokemon