async function* nuevoGenerador(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const otro = nuevoGenerador();
otro.next().then(response => console.log(response.value));
otro.next().then(response => console.log(response.value));
otro.next().then(response => console.log(response.value));
otro.next().then(response => console.log(response.value));
console.log('Qué está pasando');

async function arraysDeNombres (array){
    for await (let value of array){
        console.log(value);
    }
}
const nombres = arraysDeNombres(['Juan','Luis', 'Miguel'])
console.log('Final');