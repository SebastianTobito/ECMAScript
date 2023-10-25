const usuario = {
    nombre : 'Enzo',
    edad: 11,
    pais: 'CO'
};

const{ nombre, ...values} = usuario; 
console.log(nombre);
console.log(values);