"use strict";
/* JavaScript 7th Edition
   Chapter 6
   Chapter case

   Order Form Code
   Author: Bijaya Kc
   Date: 10/30/2023

   Filename: assignment6.js
*/


const form2 = new URLSearchParams(window.location.search);
const tBody = document.querySelector('tbody');

for (const params of form2) {
    const r = document.createElement('tr');
    r.innerHTML = `<td>${params[0]}</td><td>${params[1]}</td>`;
    tBody.appendChild(r);
}

