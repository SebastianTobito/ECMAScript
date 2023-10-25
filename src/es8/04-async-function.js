const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("AsynC!!"), 2000)
      : reject(new Error("Error!!"));
  });
};

//Async Await

const funcion2 = async () => {
  const algo = await fnAsync();
  console.log(algo);
  console.log("Hola");
};

console.log('before');
funcion2();
console.log('After');