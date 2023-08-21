let pText = document.querySelector(".panel p");

/**
 * 
 * @param {MouseEvent} eventArgs 
 */
const eventHandler = (eventArgs) => {
    pText.innerText = `Click event happend
    Target: ${eventArgs.target.id}
    Ctrl: ${eventArgs.ctrlKey}
    Alt: ${eventArgs.altKey}
    Offset: ${eventArgs.offsetX}:${eventArgs.offsetY}
    Page: ${eventArgs.pageX}:${eventArgs.pageY}
    Screen: ${eventArgs.screenX}:${eventArgs.screenY}`
}
const mouseEnterEh = (eventArgs) => {
    eventArgs.target.classList.add("btn-mousehover");
};

const mouseLeaveEh = (eventArgs) => {
    eventArgs.target.classList.remove("btn-mousehover");
};

let [art1Button, art2Button] = [...document.getElementsByClassName("control")];
art1Button.textContent = "article 1 toggle";
art2Button.textContent = "article 2 toggle";

art1Button.addEventListener("click", (eventArgs) => {
    let element = document.getElementById("art-01");
    element.classList.toggle("hidden");
});

art1Button.addEventListener("mouseenter", mouseEnterEh);
art1Button.addEventListener("mouseleave", mouseLeaveEh);

art2Button.addEventListener("click", (eventHandler) => {
    let element = document.getElementById("art-02");
    element.classList.toggle("hidden");
});   
art2Button.addEventListener("mouseenter", mouseEnterEh);
art2Button.addEventListener("mouseleave", mouseLeaveEh);
