
//Productos

class Curso {
  constructor(datos) {
    this.id = datos.idProducto;
    this.nombre = datos.nombreProducto;
    this.descripcion = datos.descripcionProducto;
    this.precio = datos.precioProducto;
    this.cantidad = datos.cantidadProducto;
    this.imagen = datos.imagenProducto;
  }

  PrecioConIVA() {
    return this.precio * 1.21;
  }

  vender() {
    if (this.cantidad > 0) {
      this.cantidad -= 1;
    } else {
      console.log("se acabo");
    }
  }
}

const producto1 = new Curso({
  idProducto: 1,
  nombreProducto: "Desarrollo Personal",
  descripcionProducto:
    "  En todo ser humano hay grandeza y potencial, si alguien mas pudo hacerlo es la prueba de que si se puede",
  precioProducto: 2000,
  cantidadProducto: 5,
  imagenProducto: " https://www.murcia.com/noticias/fotos/1117655200w2.jpg",
});

const producto2 = new Curso({
  idProducto: 2,
  nombreProducto: "Ingresos Extra",
  descripcionProducto:
    "La Educación financiera nos enseña que requerimos tener al menos 7 fuentes de ingresos para construir solides en nuestra economia",
  precioProducto: 1000,
  cantidadProducto: 5,
  imagenProducto:
    "https://lamenteesmaravillosa.com/wp-content/uploads/2016/05/Mujer-pensando-en-sus-proyectos.jpg",
});

const producto3 = new Curso({
  idProducto: 3,
  nombreProducto: "Finanzas Personales",
  descripcionProducto:
    "Es primordial definir un presupuesto organizado mensual, ademas de definir nuestras deusas y plan para saldarlas, para comenzar a invertir",
  precioProducto: 1500,
  cantidadProducto: 5,
  imagenProducto:
    "https://www.elfinancierocr.com/resizer/LsWuY1CWNdOrREY2KGzzqnsYmFU=/300x0/arc-anglerfish-arc2-prod-gruponacion/public/7UI6MRBEPBHJZOOCZM3B752FFE.jpg",
});

const cursos = [producto1, producto2, producto3];