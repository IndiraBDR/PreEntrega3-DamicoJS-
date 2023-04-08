//Formulario de registro, guardar datos en el storage

let formRegistroJs = document.getElementById("formRegistro");

let usuarios;

formRegistroJs.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;

  let nombreCliente = inputs[2].value;

  let correoElectronico = inputs[4].value;

  let clave = inputs[6].value;

  let mensaje = inputs[8].value

  let usuariosCargados = {

    nombre: nombreCliente,
    email: correoElectronico,
    clave: clave,
    mensaje: mensaje,

  };

  let usuariosStorage = localStorage.getItem("usuarios");
  usuariosStorage ? usuarios = JSON.parse(usuariosStorage) :  usuarios = [];
  usuarios.push(usuariosCargados);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  formRegistroJs.reset();
  
  Toastify({
    text: "Registro realizado",
    offset: {
      x: 50, 
      y: 10 
    },

    style: {
      color: "black",
      background:"linear-gradient(to right, #ffc6c7 0%, #faeee7 60%, #ffc6c7 100%)",
    }
  }).showToast();

});



let contenedorAsesorias= document.getElementById("contenedor__asesorias");


fetch("./asesorias.json")
.then(response => response.json())
.then(data => {

   data.forEach(asesoria => {

    let div= document.createElement("div");
    div.innerHTML=`
    <strong>${asesoria.id} </strong> 
    <h2>${asesoria.nombre}</h2>
    <h3>$${asesoria.precio}</h3>  
    `;
    contenedorAsesorias.append(div);
    div.className = "asesorias"
    
   });

  
})
