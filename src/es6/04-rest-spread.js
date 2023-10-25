// arrays destructuración 

let deportes = [ 'futbol', 'tenis']
let [a, b ] = deportes;
console.log(a,deportes[1]);

//objetos

let usuario = {
    nombre:'sebas',
    edad:30,
}
let { nombre, edad} = usuario; 
console.log(nombre, usuario.edad); 

//spread operator 

let persona = {nombre: "miguel",  edad: 26};
let pais = "colombia";
let data = {
    id:1, ...persona, pais
}
console.log(data);

//parametros rets 

function suma(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
suma(3, 1, 2, 3);

function solution(json1, json2) {
    json1 ={name:"bigotes", food:"pollito"};
    json2 = {age:12, color:"blanco"};
return{ ...json1, ...json2},
console.log(json1,json2);
};

solution()