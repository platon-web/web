const colors=[];
const rcc=()=>Math.floor(Math.random()*255);
const rc = ()=>`rgb(${rcc()},${rcc()},${rcc()})`

for(let i= 0; i<18; i++){
    colors.push(randomColor());
}
const colorPallete = document.querySelector(".color-pal");
const text=document.getElementById("text");
colors.forEach(color=>{
  const ne=  document.createElement("div");
    ne.className="sample";
    ne.style.backgroundColor=color;
ne.addEventListener("click", (ea)=>{
    text.style.color=color;
})
colorPallete.appendChild(ne);
})