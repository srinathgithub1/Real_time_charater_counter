const textarea=document.querySelector("#textarea");
const totalchar=document.querySelector("#total-counter");
const remaining=document.querySelector("#Remaining-counter");

textarea.addEventListener("keyup",()=>{
    updateCounter();
});

updateCounter();

function updateCounter(){
    totalchar.innerText=textarea.value.length;
    remaining.innerText=textarea.getAttribute("maxLength")-textarea.value.length;
}