const promesa1 = new Promise((resolve, reject)=> reject('Reject'));
const promesa2 = new Promise((resolve, reject)=> resolve('Resolve'));
const promesa3 = new Promise((resolve, reject)=> resolve('Resolve 2'));

//console.log(promesa1);
//console.log(promesa2);
//console.log(promesa3);

Promise.allSettled([promesa1, promesa2, promesa3])
.then(response => console.log(response));