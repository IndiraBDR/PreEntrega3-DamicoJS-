
//Renderizacion principal
//Carrito de compras,agrengando productos al carrito y guardarlos en el Storage


let contenedorServicios = document.getElementById("contenedor__servicios");

let carritoDeCompras = [];

cursos.forEach((item) => {
  let div = document.createElement("div");
  div.className = "servicio";
  div.innerHTML = `
   <strong>${item.id}</strong> 
   <h1>${item.nombre}</h1>
   <img src ="${item.imagen}">
   <p>Descripcion: ${item.descripcion}</p>
   <b>$${item.precio}</b>
   <p>Cantidad: ${item.cantidad}</p>
   
 `;

  contenedorServicios.append(div);

  let botonAgregar = document.createElement("button");

  botonAgregar.innerText = "Agregar";

  botonAgregar.className = "Boton-agregar";

  div.append(botonAgregar);

  botonAgregar.addEventListener("click", () => {
    carritoDeCompras.push({
      id: item.id,
      imagen: item.imagen,
      nombre: item.nombre,
      precio: item.precio,
    });

    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
  });
});

//OPCIONES DE FILTRADO CON ENTRADAS POR INPUT Y SALIDAS EN EL DOM

//FILTRADOS POR NOMBRE

let botonDeFiltroJs = document.getElementById("botonDeFiltro");

const mostrarCursoEncontradoPorNombre = () => {

  const nombreBuscadoJs= document.getElementById("nombreBuscado").value

  const cursoEncontrado = cursos.find(
    (item) => item.nombre.toLowerCase() === nombreBuscadoJs.toLowerCase()
  );

  let mensajeJs = document.getElementById("mensaje");

  if (cursoEncontrado) {
    mensajeJs.innerHTML = ` 
 
    <strong>Producto encontrado con ese nombre<strong>
    <p>${cursoEncontrado.nombre}</p>
    <p>cuesta $ ${cursoEncontrado.PrecioConIVA()} con IVA incluido</p>
    `;


  } else {

    mensajeJs.innerHTML = ` 
    
     <p>Producto no encontrado</p>
     `;
  };

};


botonDeFiltroJs.addEventListener("click", ()=> mostrarCursoEncontradoPorNombre());


//FILTRADOS POR PRECIO

let botonDeFiltroPrecioJs = document.getElementById("botonDeFiltroPrecio");

const mostrarCursoEncontradoPorPrecio = () => {

  const precioBuscadoJs= Number(document.getElementById("precioBuscado").value)

  const cursosFiltradosPorPrecio = cursos.filter(
    (item) => item.precio <= precioBuscadoJs
  );

  let mensajePrecioJs = document.getElementById("mensajePrecio");

  if (cursosFiltradosPorPrecio.length>0) {

    cursosFiltradosPorPrecio.forEach((item) =>{
    mensajePrecioJs.innerHTML  += `

    <strong>${item.nombre}<strong>
    <b>$${item.PrecioConIVA()}</b>
    <p>Cantidad: ${item.cantidad}</p>
  
    `
    });

   console.log(cursosFiltradosPorPrecio);

  } else {

    mensajePrecioJs.innerHTML = `
    
    No hay productos con ese precio
    
    `;
  };

};

botonDeFiltroPrecioJs.addEventListener("click", ()=> mostrarCursoEncontradoPorPrecio());



















