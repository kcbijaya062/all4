const  fruits = ['apple', 'orange', 'banana'];
function addFruits(){
    fruits.push("mango");
    const pElements=document.querySelectorAll("p");
    for(let i=0;i<fruits.length;i++){
        pElements[i].innerHTML =fruits[i];
    }
}
const clickme =document.getElementsByTagName("li");
//clickme.addEventListener("click",addFruits);
for (let i = 0; i < clickme.length; i++) {
    clickme[i].addEventListener("click", addFruits);
}