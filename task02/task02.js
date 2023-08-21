const blocksField = document.getElementById("blocks");

const rcc = () => Math.floor(Math.random() * 255);

document.getElementById("button").addEventListener("click", () => {
  const newElement = document.createElement("div");
  newElement.className = "block";
  newElement.style.backgroundColor = `rgb(${rcc()}, ${rcc()}, ${rcc()})`;
  newElement.addEventListener("click", () => {
    newElement.remove();
  });
  blocksField.appendChild(newElement);
});
