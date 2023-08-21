const value=document.querySelector(".value");

document.querySelector("up").addEventListener("click", ()=>{
    value.textContent=Number(value.textContent)+1;
});
document.querySelector(".down").addEventListener("click", ()=>{
    value.textContent=Number(value.textContent)-1;
});