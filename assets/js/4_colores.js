// Función para cambiar el color de fondo a negro
function pintarNegro(event) {
  event.target.style.backgroundColor = "black";
}

// Agregar event listener a los divs
const divs = document.querySelectorAll(".color-div");
divs.forEach((div) => {
  div.addEventListener("click", pintarNegro);
});

// Variable global para almacenar el color
let globalColor = "";

// Función para manejar la presión de teclas
function manejarTeclas(event) {
  const key = event.key.toLowerCase();
  const keyDiv = document.getElementById("key");
  if (key === "a") {
    globalColor = "pink";
    keyDiv.style.backgroundColor = globalColor;
  } else if (key === "s") {
    globalColor = "orange";
    keyDiv.style.backgroundColor = globalColor;
  } else if (key === "d") {
    globalColor = "lightblue";
    keyDiv.style.backgroundColor = globalColor;
  } else if (key === "q") {
    crearDivNuevo("purple");
  } else if (key === "w") {
    crearDivNuevo("gray");
  } else if (key === "e") {
    crearDivNuevo("brown");
  }
}

// Función para crear un nuevo div con el color especificado
function crearDivNuevo(color) {
  const container = document.getElementById("container");
  const newDiv = document.createElement("div");
  newDiv.className = "color-div";
  newDiv.style.backgroundColor = color;
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.marginTop = "20px";
  container.appendChild(newDiv);
}

// Agregar event listener para detectar la presión de teclas
document.addEventListener("keydown", manejarTeclas);
