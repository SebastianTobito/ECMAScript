//declarando una clase
class User {

};
//instanciando una clase
//const newUser = new User();

class user{
    //metodos
    saludo(){
        return 'Hola';
    }
};

const saludar = new user();
console.log(saludar.saludo());
const bienvenida = new user();
console.log(bienvenida.saludo());

// constructor 

class user{
    //con constructor 
    constructor(){
        console.log('nuevo usuario');
    }
    saludo(){
        return 'Hola';
    }
}

const sebas = new user();


//this hace referencia al elemento padre

class user {
    //constructor
    constructor(name){
        this.name = name;
    }
    //metodos
    hablar(){
        return 'Hola';
    }
    saludo(){
        return `${this.hablar()} ${this.name}`;
    }
};

const enzo = new user('Enzo');
console.log(enzo.saludo());

//stters y getters 

class user {
    //constructor
    constructor(name, age){
     this.name = name;
     this.age = age;
    }
    //metodos
hablar(){
    return 'Hola'
 }
 saludo(){
    return `${this.hablar} ${this.name}`
 }
 get uAge(){
    return this.age;
 }
 set uAge(n){
   this.age = n;
 }
}

const persona = new user('Lola', 14);
console.log(persona.uAge);
console.log(persona.uAge = 15);