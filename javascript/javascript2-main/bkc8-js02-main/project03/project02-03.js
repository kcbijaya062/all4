/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Bijaya Kc
      Date:   9/10/2023

      Filename: project02-03.js
 
*/

      const square = document.getElementById("square");
      const triangle = document.getElementById("triangle");
      const circle = document.getElementById("circle");

         const feedback = document.getElementById("feedback");


square.onmouseover = function() {
  
  feedback.innerHTML = "You're hovering over the square";
};


square.onmouseout = function() {
  
  feedback.innerHTML = "";
};

triangle.onmouseover = function() {
  
      feedback.innerHTML = "You're hovering over the triangle";
    };
    
    
    triangle.onmouseout = function() {
      
      feedback.innerHTML = "";
    };

    circle.onmouseover = function() {
  
      feedback.innerHTML = "You're hovering over the circle";
    };
    
    
    circle.onmouseout = function() {
      
      feedback.innerHTML = "";
    };
        
