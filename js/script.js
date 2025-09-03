// Array con elementos de distintos tipos
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que muestra los elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";

  array.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    container.appendChild(li);
  });
}

// Al cargar el DOM, filtramos y ordenamos los strings
document.addEventListener("DOMContentLoaded", () => {
  // Paso 1: Filtrar solo los elementos tipo string
  const stringElements = strangeArray.filter(item => typeof item === "string");

  // Paso 2: Ordenar alfabéticamente ignorando mayúsculas/minúsculas
  const sortedStrings = stringElements.sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );

  // Paso 3: Mostrar en pantalla
  showList(sortedStrings);
});