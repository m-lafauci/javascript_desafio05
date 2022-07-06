
let articulos = [
    {nombreProducto: "REMERA FELI", categoria: "REMERAS", temporada: "INVIERNO", precio: 8600, imagen: "./img/nodisponible.png"},
    {nombreProducto: "REMERA MONACO", categoria: "REMERAS", temporada: "INVIERNO", precio: 7900, imagen: "./img/nodisponible.png"},
    {nombreProducto: "REMERA CHILD", categoria: "REMERAS", temporada: "INVIERNO", precio: 5500, imagen: "./img/nodisponible.png"},
    {nombreProducto: "CAMISA MARGARITA", categoria: "CAMISAS", temporada: "INVIERNO", precio: 20000, imagen: "./img/nodisponible.png"},
    {nombreProducto: "CAMISA PHIL", categoria: "CAMISAS", temporada: "INVIERNO", precio: 17500, imagen: "./img/nodisponible.png"},
    {nombreProducto: "CAMISA SOHO", categoria: "CAMISAS", temporada: "INVIERNO", precio: 16800, imagen: "./img/nodisponible.png"},
    {nombreProducto: "CAMISA MARKLE", categoria: "CAMISAS", temporada: "INVIERNO", precio: 12000, imagen: "./img/nodisponible.png"},
    {nombreProducto: "CAMISA BRIANA", categoria: "CAMISAS", temporada: "VERANO", precio: 11800, imagen: "./img/nodisponible.png"},
    {nombreProducto: "BUZO LIAM", categoria: "BUZOS", temporada: "INVIERNO", precio: 13900, imagen: "./img/nodisponible.png"},
    {nombreProducto: "BUZO ROSE", categoria: "BUZOS", temporada: "INVIERNO", precio: 16500, imagen: "./img/nodisponible.png"},
    {nombreProducto: "HOODIE DEAN", categoria: "BUZOS", temporada: "INVIERNO", precio: 11000, imagen: "./img/nodisponible.png"},
    {nombreProducto: "HOODIE LUCIEN", categoria: "BUZOS", temporada: "VERANO", precio: 9900, imagen: "./img/nodisponible.png"},
    {nombreProducto: "BUZO BLOOM ", categoria: "BUZOS", temporada: "VERANO", precio: 10700, imagen: "./img/nodisponible.png"},
    {nombreProducto: "VESTIDO IMMA", categoria: "VESTIDOS", temporada: "INVIERNO", precio: 14400, imagen: "./img/nodisponible.png"},
    {nombreProducto: "VESTIDO ANUSH", categoria: "VESTIDOS", temporada: "INVIERNO", precio: 13900, imagen: "./img/nodisponible.png"},
    {nombreProducto: "VESTIDO CROWN ", categoria: "VESTIDOS", temporada: "INVIERNO", precio: 15900, imagen: "./img/nodisponible.png"},
    {nombreProducto: "VESTIDO JANICE", categoria: "VESTIDOS", temporada: "INVIERNO", precio: 37500, imagen: "./img/nodisponible.png"},
    {nombreProducto: "JOGGER WAFLE", categoria: "CALZAS", temporada: "INVIERNO", precio: 9700, imagen: "./img/nodisponible.png"},
    {nombreProducto: "JOGGER JERRY", categoria: "CALZAS", temporada: "INVIERNO", precio: 11000, imagen: "./img/nodisponible.png"},
    {nombreProducto: "JOGGER JOSIE", categoria: "CALZAS", temporada: "INVIERNO", precio: 7300, imagen: "./img/nodisponible.png"},
    {nombreProducto: "JOGGER LUCIEN", categoria: "CALZAS", temporada: "VERANO", precio: 9900, imagen: "./img/nodisponible.png"},
    {nombreProducto: "JOGGER COMFY", categoria: "CALZAS", temporada: "VERANO", precio: 7600, imagen: "./img/nodisponible.png"},
    {nombreProducto: "PANTALON MARGARET", categoria: "PANTALONES", temporada: "INVIERNO", precio: 13900, imagen: "./img/nodisponible.png"},
    {nombreProducto: "PANTALON ELENA", categoria: "PANTALONES", temporada: "INVIERNO", precio: 16500, imagen: "./img/nodisponible.png"},
    {nombreProducto: "DENIM ROSE", categoria: "PANTALONES", temporada: "INVIERNO", precio: 13000, imagen: "./img/nodisponible.png"},
    {nombreProducto: "DENIM PAUL", categoria: "PANTALONES", temporada: "VERANO", precio: 12600, imagen: "./img/nodisponible.png"},
    {nombreProducto: "CAMPERA FOWLER", categoria: "CAMPERAS", temporada: "INVIERNO", precio: 38000, imagen: "./img/nodisponible.png"},
    {nombreProducto: "CAMPERA MADISON", categoria: "CAMPERAS", temporada: "INVIERNO", precio: 47000, imagen: "./img/nodisponible.png"},
    {nombreProducto: "CAMPERA BIKER", categoria: "CAMPERAS", temporada: "INVIERNO", precio: 39000, imagen: "./img/nodisponible.png"},
    {nombreProducto: "CAMPERA PUFFER", categoria: "CAMPERAS", temporada: "INVIERNO", precio: 44000, imagen: "./img/nodisponible.png"},
    {nombreProducto: "PARKA SABBATH", categoria: "CAMPERAS", temporada: "VERANO", precio: 45000, imagen: "./img/nodisponible.png"},
    {nombreProducto: "CARDIGAN MONZON", categoria: "SWEATERS", temporada: "INVIERNO", precio: 20000, imagen: "./img/nodisponible.png"},
    {nombreProducto: "CARDIGAN CAPE", categoria: "SWEATERS", temporada: "INVIERNO", precio: 22000, imagen: "./img/nodisponible.png"},
    {nombreProducto: "CARDIGAN JANDIRA", categoria: "SWEATERS", temporada: "INVIERNO", precio: 12000, imagen: "./img/nodisponible.png"},
    {nombreProducto: "REMERA FAIRY", categoria: "REMERAS", temporada: "VERANO", precio: 8300, imagen: "./img/nodisponible.png"},
    {nombreProducto: "REMERA JUSTINA", categoria: "REMERAS", temporada: "VERANO", precio: 7600, imagen: "./img/nodisponible.png"},
    {nombreProducto: "REMERA WASH", categoria: "REMERAS", temporada: "VERANO", precio: 5200, imagen: "./img/nodisponible.png"},
    {nombreProducto: "CAMISA MORNING", categoria: "CAMISAS", temporada: "VERANO", precio: 16000, imagen: "./img/nodisponible.png"},
    {nombreProducto: "VESTIDO CAROL", categoria: "VESTIDOS", temporada: "VERANO", precio: 18800, imagen: "./img/nodisponible.png"},
    {nombreProducto: "JEAN BASTIAN", categoria: "PANTALONES", temporada: "VERANO", precio: 13300, imagen: "./img/nodisponible.png"},
    {nombreProducto: "CAMPERA SMITH", categoria: "CAMPERAS", temporada: "VERANO", precio: 41000, imagen: "./img/nodisponible.png"},
    {nombreProducto: "CARDIGAN SUNRAY", categoria: "SWEATERS", temporada: "VERANO", precio: 14000, imagen: "./img/nodisponible.png"},
    {nombreProducto: "CARDIGAN STRIPES", categoria: "SWEATERS", temporada: "VERANO", precio: 12300, imagen: "./img/nodisponible.png"},
];

let container = document.getElementById("container");

let filtroSeleccionado = prompt(`BIENVENID@!
Ingrese el filtro de búsqueda: NOMBRE, CATEGORIA, TEMPORADA o PRECIO.
Escriba ESC para salir.`)

while (filtroSeleccionado.toLowerCase() != "esc") {
    let filtro;
    let resultado;
    switch (filtroSeleccionado.toLowerCase()) {
    case "nombre":
        filtro = prompt("Ingrese el NOMBRE del producto");
        resultado = articulos.filter((elemento) => elemento.nombreProducto.includes(filtro.toUpperCase()));
        for(const articulo of resultado){
            let item = document.createElement("div");
            item.innerHTML = `<img src=${articulo.imagen}>
                              <h2>${articulo.nombreProducto}</h2>
                              <p>Categoría: ${articulo.categoria}</p>
                              <p>Temporada: ${articulo.temporada}</p>
                              <b>Precio: ${articulo.precio}</b>`;
            container.append(item);
        }
        break;
    case "categoria":
        filtro = prompt("Ingrese la CATEGORIA del producto");
        resultado = articulos.filter((elemento) => elemento.categoria.includes(filtro.toUpperCase()));
        for(const articulo of resultado){
            let item = document.createElement("div");
            item.innerHTML = `<img src=${articulo.imagen}>
                              <h2>${articulo.nombreProducto}</h2>
                              <p>Categoría: ${articulo.categoria}</p>
                              <p>Temporada: ${articulo.temporada}</p>
                              <b>Precio: ${articulo.precio}</b>`;
            container.append(item);
        }
        break;
    case "temporada":
        filtro = prompt("Ingrese la TEMPORADA del producto");
        resultado = articulos.filter((elemento) => elemento.temporada.includes(filtro.toUpperCase()));
        for(const articulo of resultado){
            let item = document.createElement("div");
            item.innerHTML = `<img src=${articulo.imagen}>
                              <h2>${articulo.nombreProducto}</h2>
                              <p>Categoría: ${articulo.categoria}</p>
                              <p>Temporada: ${articulo.temporada}</p>
                              <b>Precio: ${articulo.precio}</b>`;
            container.append(item);
        }
        break;
    case "precio":
        filtro = parseInt(prompt("Ingrese el PRECIO MAXIMO del producto"));
        resultado = articulos.filter((elemento) => elemento.precio <= filtro);
        for(const articulo of resultado){
            let item = document.createElement("div");
            item.innerHTML = `<img src=${articulo.imagen}>
                              <h2>${articulo.nombreProducto}</h2>
                              <p>Categoría: ${articulo.categoria}</p>
                              <p>Temporada: ${articulo.temporada}</p>
                              <b>Precio: ${articulo.precio}</b>`;
            container.append(item);
        }
        break;
    default:
        alert("Ingrese una operación válida");
        break;
    }
    let leyenda = document.createElement("p");
    leyenda.innerHTML = "<h2>Presione la tecla F5 si desea realizar una nueva búsqueda</h2>";
    document.body.append(leyenda);
    
    container.append(item);
}
