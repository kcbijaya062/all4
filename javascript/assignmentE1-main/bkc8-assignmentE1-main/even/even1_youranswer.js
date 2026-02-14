// Copy from your exam paper as is (EVEN number seats) // bijaya kc 10/5/2023
button.addEventListener("click",showDays);
const  days = ['Sun', 'Mon', 'Tue', 'Thu'];

function showDays(e)
{

    days = new Array(5);
    days.push("fri");
    let divElements =document.querySelectorAll("div");
    for(let i=0;i<days.length;i++){
        divElements[i].innerHTML =days[i];
    }
    divElements.appendChild("beforeEnd" ,"div");
}
//const button =document.querySelectorAll("input");
//the portion below in for loop  should be written which were not in my answer as  I didnot kept ni loop
/*for(let i=0;i<button1.length;i++)
{
    button1[i].addEventListener("click",showDays);

    
}*/