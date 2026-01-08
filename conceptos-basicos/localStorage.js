//ejemplo de localStorage
// guardar
localStorage.setItem("fruta", "🍌");

// obtener
const fruta = localStorage.getItem("fruta");
console.log(fruta);

// eliminar
localStorage.removeItem("fruta");

// elimina todos los elementos
localStorage.clear();

// guardar un objeto
const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
};
//stringify convierte un objeto a una cadena de texto
localStorage.setItem("producto", JSON.stringify(producto));
//parse convierte una cadena de texto a un objeto
const productoLS = JSON.parse(localStorage.getItem("producto"));
console.log(productoLS);
console.log(productoLS.nombre);
console.log(productoLS.precio);