//ejemplo breve de un objecto en JavaScript
const estudiante = {
    nombre: "brayan",
    edad: 25,
    carrera: ["Ingeniería de Sistemas", "Desarrollo Web"],
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y estudio ${this.carrera[0]} y también ${this.carrera[1]}.`);
    }
};

estudiante.saludar();


//ejemplo de clase en JavaScript
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const persona1 = new Persona("Ana", 30);
persona1.presentarse();

//ejemplo de herencia en JavaScript
class Empleado extends Persona {
    constructor(nombre, edad, puesto) {
        super(nombre, edad);
        this.puesto = puesto;
    }
    trabajar() {
        console.log(`${this.nombre} está trabajando como ${this.puesto}.`);
    }  
}

const empleado1 = new Empleado("Luis", 28, "Desarrollador");
empleado1.presentarse();
empleado1.trabajar();
const empleado2 = new Empleado("ricardo", 25);
empleado2.saludar();
// empleado2.trabajar(); // Esto generará un error porque 'puesto' no está definido
 