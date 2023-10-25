const otraFuncion = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hola!");
    } else {
      reject("Error");
    }
  });
};

otraFuncion()
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(() => console.log("Terminado"));
