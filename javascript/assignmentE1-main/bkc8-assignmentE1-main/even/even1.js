const  days = ['Sun', 'Mon', 'Tue', 'Thu']; 

const buttonElements =document.getElementsByTagName("input");
//buttonElements.addEventListener("click",showDays);
function showDays(){


    days.push("fri");
    const divElements =document.querySelectorAll("div");
    for(let i=0;i<days.length;i++){
        divElements[i].textContent =days[i];
    }

}
for(let i=0;i<buttonElements.length;i++){
    buttonElements[i].addEventListener("click",showDays);
}
