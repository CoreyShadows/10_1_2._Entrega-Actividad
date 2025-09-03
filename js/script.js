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
  // Filtrar solo los elementos tipo string
  const stringElements = strangeArray.filter(item => typeof item === "string");

  // Ordenar alfabéticamente
  const sortedStrings = stringElements.sort();

  // Mostrar en pantalla
  showList(sortedStrings);
});