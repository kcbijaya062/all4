const liElement = document.querySelector("li");
function funCompute(){
    
        const nBegin = Number(liElement.textContent);
        let sum =0;
        for(let i=nBegin;i<=1000;i++){
            if(i%2===1){
                sum+=i;
            }
        }
        const para=document.querySelector("p");
        if(para){
            para.textContent="sum is "+sum;

        }
    }

document.getElementById("compute").addEventListener("click",funCompute);
