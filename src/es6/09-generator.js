function* iterador(array) {
    for (let value of array ){
        yield value; 
    }
}

const it = iterador(['Atenea', 'Enzo','Lola', 'Kiri', 'Canelo','Onix']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


function* getId() {
    let catId = 1
    while (true){
      yield catId++
    }
  }
  const catId = getId();
  console.log(catId.next().value);
  console.log(catId.next().value);
  console.log(catId.next().value);
  console.log(catId.next().value);