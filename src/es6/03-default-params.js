//Antes de ecma 6

function nuevoUsuario(nombre, edad, pais){
  var nombre = nombre || 'sebas';
  var edad = edad || 18;
  var pais = pais || 'Colombia'
  console.log(nombre, edad, pais);
};
nuevoUsuario();
nuevoUsuario('sebastian',30,'Peru')

//después de ecma 6

function nuevaPersona(nombre = "Sebitas", edad = 27, pais = "Brasil") {
    console.log(nombre,edad,pais);
}
nuevaPersona();
nuevaPersona("Bastian", 29, "Argentina");