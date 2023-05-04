const pedidos = [
    {
      nombre: "Hamburguesa",
      contenido: "Hamburguesa de carne 120gr",
      precio: 300,
    },
    {
      nombre: "Papas fritas",
      contenido: "Papas rusticas cortadas a cuchillo",
      precio: 150,
    },
    {
      nombre: "Gaseosa",
      contenido: "Gaseosa linea Coca",
      precio: 200,
    },
    {
      nombre: "Combo I",
      contenido: "Hamburguesa de carne 120gr + Papas fritas pequeñas + Gaseosa pequeña",
      precio: 500,
    },
    {
      nombre: "Combo II",
      contenido: "Hamburguesa de carne 120gr + Papas fritas medianas + Gaseosa mediana",
      precio: 700,
    },
    {
      nombre: "Combo III",
      contenido: "Hamburguesa de carne 120gr + Papas fritas grandes + Gaseosa grande",
      precio: 900,
    },
  ];
  
  let gasto = Number(prompt("Ingrese cuanto está dispuesto a gastar"));
  
  const busqueda = pedidos.filter((menu) => menu.precio <= gasto);
  
  const resultados = busqueda.map(
    (menu) => `${menu.nombre} ($${menu.precio}): ${menu.contenido}`
  );
  
  if (resultados.length > 0) {
    const mensaje = `Puede comprar:\n${resultados.join("\n")}`;
    alert(mensaje);
  } else {
    alert("Lo siento, no hay opciones dentro de su presupuesto.");
  }