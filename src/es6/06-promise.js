// las promesas trabajan el asincronismo asyn aways, 
//reciben parametros de una funcion y las ejecutan segun sea el caso
// una promesa algo que va a pasar, hoy, mañana o nunca

const otraFuncion = () =>{
 return new Promise ((resolve, reject)=>{
    if(true){
        resolve('Está sucediendo la promesa');
    }else{
        reject('No está funcionando como esperaba');
    }

 })
}

otraFuncion()
.then(response => console.log(response))
.catch(err => console.log(err));