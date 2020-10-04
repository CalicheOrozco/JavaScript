class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this. apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        let {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido}.`);
        if(fn){
            fn(nombre, apellido, false)
        }
    }

    soyAlto(){
        altura>  1.18
    }
}

class Desarollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }

    saludar(fn){
        let {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador.`);
        if(fn){
            fn(nombre, apellido, true)
        }
        
    }
}

function responderSaludo(nombre, apellido, esDev){
console.log(`Buen dia ${nombre} ${apellido}`);
if(esDev){
    console.log(`Ah mirá, no sabia que eras dev`);
        
}
}
var caliche = new Desarollador('Caliche', 'Orozco', 1.85)
var daniel = new Persona('Daniel', 'Martinez', 1.70)
var santigo = new Persona('Santiago', 'Faik', 1.70)

caliche.saludar(responderSaludo)
daniel.saludar(responderSaludo)
santigo.saludar()