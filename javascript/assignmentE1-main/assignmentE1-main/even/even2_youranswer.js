// Copy from your exam paper as is (EVEN number seats)
let nBegin =document.getElementsByTagName("li");
function funCompute(){
let x =Number(nBegin.textContent);
let summation = 0;
for(i=x;i<=1000;i++)
{
    
    if(i%2==1){
        summation +=i;

    }
    
}
document.getElementById("sum").innerHTML =summation;
}
//document.getElementById("compute").onclick =funCompute; this was in my asnwer but it didnot work
//document.getElementById("compute").addEventListener("click",funCompute);