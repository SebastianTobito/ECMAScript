// enahced objet literal 
function nuevoUsuario(usuario, edad, pais, nId){
  return {
    usuario,
    edad,
    pais,
    nId
  }
}

console.log(nuevoUsuario("seto", 30, "colombia", 1));
