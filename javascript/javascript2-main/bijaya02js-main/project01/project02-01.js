/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Bijaya kc
      Date:   9/9/2023

      Filename: project02-01.js
 */
function FahrenheitToCelsius(degree){

return (degree-32)/1.8;

}
function CelsiusToFahrenheit(degree) {
      return degree * 1.8 + 32;
  }

  /*document.getElementById("cValue").onchange = function() {
           
      var cdegree = parseInt(document.getElementById("cValue").value);
      
      var fDegree = CelsiusToFahrenheit(cdegree);};*/

  
      
        
       
        document.getElementById("cValue").onchange = function() {
           
            let cDegree = parseInt(document.getElementById("cValue").value);
            
            
            let fDegree = CelsiusToFahrenheit(cDegree);
            
           
            document.getElementById("fValue").value = fDegree;
        };
        
       
        document.getElementById("fValue").onchange = function() {
           
            let fDegree = parseInt(document.getElementById("fValue").value);
            
           
            let cDegree = FahrenheitToCelsius(fDegree);
            
            
            document.getElementById("cValue").value = cDegree;
        };
   












/*let cdegree =document.getElementById("cValue");
cdegree.addEventListener("onchange",function(){
document.getElementById("fValue").value =CelsiusToFahrenheit(cdegree);

});

let fdegree =document.getElementById("fValue");
fdegree.addEventListener("onchange",function(){
document.getElementById("cValue").value =FahrenheitToCelsius(cdegree);

})*/







/*window.addEventListener("onchange",function()
{

      let cdegree =document.getElementById("cValue").value;
document.getElementById("fValue").value =CelsiusToFahrenheit(cdegree);
});

window.addEventListener("onchange",function()
{

      let fdegree =document.getElementById("fvalue").value;
document.getElementById("fValue").value =FahrenheitToCelsius(fdegree);
});
*/
