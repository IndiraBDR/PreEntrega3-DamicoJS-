//Formulario de registro, guardar datos en el storage

let formRegistroJs = document.getElementById("formRegistro");

let usuarios;

formRegistroJs.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;

  let nombreCliente = inputs[2].value;

  let correoElectronico = inputs[4].value;

  let clave = inputs[6].value;

  let usuariosCargados = {

    nombre: nombreCliente,
    email: correoElectronico,
    clave: clave,
  };

  let usuariosStorage = localStorage.getItem("usuarios");

  if (usuariosStorage) {
    usuarios = JSON.parse(usuariosStorage);
  } else {
    usuarios = [];
  }

  usuarios.push(usuariosCargados);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  formRegistroJs.reset();
});
