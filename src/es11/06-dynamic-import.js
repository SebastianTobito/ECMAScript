const boton = document.getElementById('boton');

boton.addEventListener('click', async function () {
    const module = await import('./module.js')
    console.log(module);
    module.saludo();
});