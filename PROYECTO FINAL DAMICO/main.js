
//Carrito de compras guardando toda su funcionalidad  en el Storage

let contenedorServicios = document.getElementById("contenedor__servicios");

let carritoDeCompras = JSON.parse(localStorage.getItem("carrito"))||[];

const guardarCarritoEnStorage = () => { localStorage.setItem("carrito", JSON.stringify(carritoDeCompras))};

cursos.forEach((item) => {
  let div = document.createElement("div");
  div.className = "servicio";
  div.innerHTML = `
   <strong>${item.id}</strong> 
   <h1>${item.nombre}</h1>
   <img src ="${item.imagen}">
   <p>Descripcion: ${item.descripcion}</p>
   <b>$${item.precio}</b>
   <br><br>
   
 `
  contenedorServicios.append(div);
  
  let botonAgregar = document.createElement("button");
  botonAgregar.innerText = "Agregar";
  botonAgregar.className = "Boton-agregar";
  div.append(botonAgregar);


  botonAgregar.addEventListener("click", () => {

    const productoRepetido = carritoDeCompras.some((elementoRepetido)=> elementoRepetido.id === item.id);

    if(productoRepetido){

      carritoDeCompras.map((prod)=>{
       
        if(prod.id === item.id){

         prod.cantidad++;

        }
      });
    }else{

    carritoDeCompras.push({
      id: item.id,
      imagen: item.imagen,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: item.cantidad,
    });
     
  }


  guardarCarritoEnStorage();

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto Agregado',
      showConfirmButton: false,
      timer: 1000,
      
    })
   
  });

});

  //MODAL CARRITO

  const verCarritoJs= document.getElementById("verCarrito");
  const contendorModal = document.getElementById("contenerdor-modal");


  const mostrarCarrito = () =>{
    
   contendorModal.innerHTML = "";
   contendorModal.style.display = "flex";
  

    const modalHeader = document.createElement("div");
    modalHeader.innerHTML=`
     <h2 clas="modal-header-title"> Carrito de Compras</h2> 
    `
    modalHeader.className ="modal-header";
    contendorModal.append(modalHeader);
  
    const modalBoton= document.createElement("h2");
    modalBoton.innerHTML= "X";
    modalBoton.className="modal-header-button"
    modalBoton.addEventListener("click", ()=> {
          
      contendorModal.style.display = "none";

    });
    modalHeader.append(modalBoton);
  
   
    carritoDeCompras.forEach( (item) => {
  
      let contenidoCarrito = document.createElement("div");
      contenidoCarrito.innerHTML=`

      <img src ="${item.imagen}">
      <p>${item.nombre}</p>
      <p>$${item.precio}</p>
      <p>unid:${item.cantidad}</p>
      <span class="sumarProducto"> + </span>
      <span class="restarProducto"> - </span>
      <button class="eliminarProducto"> elimar </button>
    
      `;
      contenidoCarrito.className = "modal-content"
      contendorModal.append(contenidoCarrito);
  

      let sumarProducto = contenidoCarrito.querySelector(".sumarProducto");
      sumarProducto.addEventListener("click", () => {
       
        item.cantidad++;
        mostrarCarrito()
    
      });


      let restarProducto = contenidoCarrito.querySelector(".restarProducto");
      restarProducto.addEventListener("click", ()=>{
        if(item.cantidad >= 1){
          item.cantidad--;
          mostrarCarrito()
          }else{
  
            item.cantidad = 0
            mostrarCarrito()
          }
      });


      let eliminarP = contenidoCarrito.querySelector(".eliminarProducto");
      eliminarP.addEventListener("click",() => {
        eliminarProducto(item.id);
      });

    });


    const total= carritoDeCompras.reduce((acum,item)=> acum + item.precio * item.cantidad, 0);
    const totalPrecioCarrito= document.createElement("div");
    totalPrecioCarrito.innerHTML=`
      Total  a Pagar ${total} $   
    `;

    totalPrecioCarrito.className="total-content" 
    contendorModal.append(totalPrecioCarrito);

  };


verCarritoJs.addEventListener("click",mostrarCarrito);

const eliminarProducto = (id) =>{
    
  const idEncontrados = carritoDeCompras.find((element)=> element.id === id);

   carritoDeCompras = carritoDeCompras.filter((item)=>{

    return item !== idEncontrados;
  
  });

  guardarCarritoEnStorage();
  mostrarCarrito();
  
};

//FILTRADO DE PRODUCTOS

//FILTRADOS POR NOMBRE

let botonDeFiltroJs = document.getElementById("botonDeFiltro");

const mostrarCursoEncontradoPorNombre = () => {

  const nombreBuscadoJs= document.getElementById("nombreBuscado").value

  const cursoEncontrado = cursos.find(
    (item) => item.nombre.toLowerCase() === nombreBuscadoJs.toLowerCase()
  );

  let mensajeJs = document.getElementById("mensaje");



  cursoEncontrado ?  

  mensajeJs.innerHTML = ` 
 
  <strong>Producto encontrado con ese nombre<strong>
  <p>${cursoEncontrado.nombre}</p>
  <p>cuesta $ ${cursoEncontrado.PrecioConIVA()} con IVA incluido</p>
  `

  :

  mensajeJs.innerHTML = ` 
    
  <p>Producto no encontrado</p>
  `

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


  } else {

    mensajePrecioJs.innerHTML = `
    
    No hay productos con ese precio
    
    `;
  };

};

botonDeFiltroPrecioJs.addEventListener("click", () => mostrarCursoEncontradoPorPrecio());




















