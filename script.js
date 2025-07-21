let total = 0;
const carrito = [];

function agregarProducto(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("carrito");
  lista.innerHTML = "";
  carrito.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - $${p.precio}`;
    lista.appendChild(li);
  });
  document.getElementById("total").textContent = total;
}
