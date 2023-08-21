import country_list from "./countries.js";

const input = document.querySelector("input");
const options = document.getElementById("options");

input.addEventListener("input", () => {
    const filtered = country_list.filter((el) =>
        el.toLowerCase().startsWith(input.value.toLowerCase())
    ).slice(0, 10);

    options.innerHTML = "";

    filtered.forEach((el) => {
        const currentOption = document.createElement("div");
        currentOption.className = "option";
        currentOption.innerText = el;
        currentOption.addEventListener("click", () => {
            input.value = currentOption.innerHTML;
            options.innerHTML = "";
        });
        options.appendChild(currentOption);
    });
});