const inputStart =document.getElementById("start");
const resultElement =document.getElementById("result");
inputStart.addEventListener("change",calculate);
function calculate(){ 
    let num1 =parseInt(inputStart.value);
let sum =0;
for(let i =num1;i<=num1+50;i++){
    if(i%2===0){
        sum+=i;
    }
}
resultElement.innerHTML ="sum of even number  from num1 to num1+50 is:"+sum;
}
